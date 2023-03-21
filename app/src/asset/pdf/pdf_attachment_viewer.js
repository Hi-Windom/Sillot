/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createPromiseCapability, getFilenameFromUrl } from "./pdfjs";
import { BaseTreeViewer } from "./base_tree_viewer.js";
import { waitOnEventOrTimeout } from "./event_utils.js";

/**
 * @typedef {Object} PDFAttachmentViewerOptions
 * @property {HTMLDivElement} container - The viewer element.
 * @property {EventBus} eventBus - The application event bus.
 * @property {DownloadManager} downloadManager - The download manager.
 */

/**
 * @typedef {Object} PDFAttachmentViewerRenderParameters
 * @property {Object|null} attachments - A lookup table of attachment objects.
 */

class PDFAttachmentViewer extends BaseTreeViewer {
  /**
   * @param {PDFAttachmentViewerOptions} options
   */
  constructor(options) {
    super(options);
    this.downloadManager = options.downloadManager;

    this.eventBus._on(
      "fileattachmentannotation",
      this.#appendAttachment.bind(this)
    );
  }

  reset(keepRenderedCapability = false) {
    super.reset();
    this._attachments = null;

    if (!keepRenderedCapability) {
      // The only situation in which the `_renderedCapability` should *not* be
      // replaced is when appending FileAttachment annotations.
      this._renderedCapability = createPromiseCapability();
    }
    this._pendingDispatchEvent = false;
  }

  /**
   * @private
   */
  async _dispatchEvent(attachmentsCount) {
    this._renderedCapability.resolve();

    if (attachmentsCount === 0 && !this._pendingDispatchEvent) {
      // Delay the event when no "regular" attachments exist, to allow time for
      // parsing of any FileAttachment annotations that may be present on the
      // *initially* rendered page; this reduces the likelihood of temporarily
      // disabling the attachmentsView when the `PDFSidebar` handles the event.
      this._pendingDispatchEvent = true;

      await waitOnEventOrTimeout({
        target: this.eventBus,
        name: "annotationlayerrendered",
        delay: 1000,
      });

      if (!this._pendingDispatchEvent) {
        return; // There was already another `_dispatchEvent`-call`.
      }
    }
    this._pendingDispatchEvent = false;

    this.eventBus.dispatch("attachmentsloaded", {
      source: this,
      attachmentsCount,
    });
  }

  /**
   * @private
   */
  _bindLink(element, { content, filename }) {
    element.onclick = () => {
      this.downloadManager.openOrDownloadData(element, content, filename);
      return false;
    };
  }

  /**
   * @param {PDFAttachmentViewerRenderParameters} params
   */
  render({ attachments, keepRenderedCapability = false }) {
    if (this._attachments) {
      this.reset(keepRenderedCapability);
    }
    this._attachments = attachments || null;

    if (!attachments) {
      this._dispatchEvent(/* attachmentsCount = */ 0);
      return;
    }
    const names = Object.keys(attachments).sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    const fragment = document.createDocumentFragment();
    let attachmentsCount = 0;
    for (const name of names) {
      const item = attachments[name];
      const content = item.content,
        filename = getFilenameFromUrl(
          item.filename,
          /* onlyStripPath = */ true
        );

      const div = document.createElement("div");
      div.className = "treeItem";

      const element = document.createElement("a");
      this._bindLink(element, { content, filename });
      element.textContent = this._normalizeTextContent(filename);

      div.append(element);

      fragment.append(div);
      attachmentsCount++;
    }

    this._finishRendering(fragment, attachmentsCount);
  }

  /**
   * Used to append FileAttachment annotations to the sidebar.
   */
  #appendAttachment({ filename, content }) {
    const renderedPromise = this._renderedCapability.promise;

    renderedPromise.then(() => {
      if (renderedPromise !== this._renderedCapability.promise) {
        return; // The FileAttachment annotation belongs to a previous document.
      }
      const attachments = this._attachments || Object.create(null);

      for (const name in attachments) {
        if (filename === name) {
          return; // Ignore the new attachment if it already exists.
        }
      }
      attachments[filename] = {
        filename,
        content,
      };
      this.render({
        attachments,
        keepRenderedCapability: true,
      });
    });
  }
}

export { PDFAttachmentViewer };
