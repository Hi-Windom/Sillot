/* Copyright 2016 Mozilla Foundation
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

import {
  animationStarted,
  DEFAULT_SCALE,
  DEFAULT_SCALE_VALUE,
  MAX_SCALE,
  MIN_SCALE,
  noContextMenuHandler,
} from "./ui_utils.js";
import { AnnotationEditorType } from "./pdfjs";

const PAGE_NUMBER_LOADING_INDICATOR = "visiblePageIsLoading";

/**
 * @typedef {Object} ToolbarOptions
 * @property {HTMLDivElement} container - Container for the secondary toolbar.
 * @property {HTMLSpanElement} numPages - Label that contains number of pages.
 * @property {HTMLInputElement} pageNumber - Control for display and user input
 *   of the current page number.
 * @property {HTMLSelectElement} scaleSelect - Scale selection control.
 *   Its width is adjusted, when necessary, on UI localization.
 * @property {HTMLOptionElement} customScaleOption - The item used to display
 *   a non-predefined scale.
 * @property {HTMLButtonElement} previous - Button to go to the previous page.
 * @property {HTMLButtonElement} next - Button to go to the next page.
 * @property {HTMLButtonElement} zoomIn - Button to zoom in the pages.
 * @property {HTMLButtonElement} zoomOut - Button to zoom out the pages.
 * @property {HTMLButtonElement} viewFind - Button to open find bar.
 * @property {HTMLButtonElement} openFile - Button to open a new document.
 * @property {HTMLButtonElement} editorFreeTextButton - Button to switch to
 *   FreeText editing.
 * @property {HTMLButtonElement} download - Button to download the document.
 */

class Toolbar {
  #wasLocalized = false;

  /**
   * @param {ToolbarOptions} options
   * @param {EventBus} eventBus
   * @param {IL10n} l10n - Localization service.
   */
  constructor(options, eventBus, l10n) {
    this.toolbar = options.container;
    this.eventBus = eventBus;
    this.l10n = l10n;
    this.buttons = [
      { element: options.previous, eventName: "previouspage" },
      { element: options.next, eventName: "nextpage" },
      { element: options.zoomIn, eventName: "zoomin" },
      { element: options.zoomOut, eventName: "zoomout" },
      // NOTE
      // { element: options.print, eventName: "print" },
      // { element: options.download, eventName: "download" },
      // {
      //   element: options.editorFreeTextButton,
      //   eventName: "switchannotationeditormode",
      //   eventDetails: {
      //     get mode() {
      //       const { classList } = options.editorFreeTextButton;
      //       return classList.contains("toggled")
      //         ? AnnotationEditorType.NONE
      //         : AnnotationEditorType.FREETEXT;
      //     },
      //   },
      // },
      // {
      //   element: options.editorInkButton,
      //   eventName: "switchannotationeditormode",
      //   eventDetails: {
      //     get mode() {
      //       const { classList } = options.editorInkButton;
      //       return classList.contains("toggled")
      //         ? AnnotationEditorType.NONE
      //         : AnnotationEditorType.INK;
      //     },
      //   },
      // },
    ];
    // NOTE
    // if (typeof PDFJSDev === "undefined" || PDFJSDev.test("GENERIC")) {
    //   this.buttons.push({ element: options.openFile, eventName: "openfile" });
    // }
    this.items = {
      numPages: options.numPages,
      pageNumber: options.pageNumber,
      scaleSelect: options.scaleSelect,
      customScaleOption: options.customScaleOption,
      previous: options.previous,
      next: options.next,
      zoomIn: options.zoomIn,
      zoomOut: options.zoomOut,
    };

    // Bind the event listeners for click and various other actions.
    this.#bindListeners(options);

    this.reset();
  }

  setPageNumber(pageNumber, pageLabel) {
    this.pageNumber = pageNumber;
    this.pageLabel = pageLabel;
    this.#updateUIState(false);
  }

  setPagesCount(pagesCount, hasPageLabels) {
    this.pagesCount = pagesCount;
    this.hasPageLabels = hasPageLabels;
    this.#updateUIState(true);
  }

  setPageScale(pageScaleValue, pageScale) {
    this.pageScaleValue = (pageScaleValue || pageScale).toString();
    this.pageScale = pageScale;
    this.#updateUIState(false);
  }

  reset() {
    this.pageNumber = 0;
    this.pageLabel = null;
    this.hasPageLabels = false;
    this.pagesCount = 0;
    this.pageScaleValue = DEFAULT_SCALE_VALUE;
    this.pageScale = DEFAULT_SCALE;
    this.#updateUIState(true);
    this.updateLoadingIndicatorState();

    // Reset the Editor buttons too, since they're document specific.
    this.eventBus.dispatch("toolbarreset", { source: this });
  }

  #bindListeners(options) {
    const { pageNumber, scaleSelect } = this.items;
    const self = this;

    // The buttons within the toolbar.
    for (const { element, eventName, eventDetails } of this.buttons) {
      element.addEventListener("click", evt => {
        if (eventName !== null) {
          const details = { source: this };
          if (eventDetails) {
            for (const property in eventDetails) {
              details[property] = eventDetails[property];
            }
          }
          this.eventBus.dispatch(eventName, details);
        }
      });
    }
    // The non-button elements within the toolbar.
    pageNumber.addEventListener("click", function () {
      this.select();
    });
    pageNumber.addEventListener("change", function () {
      self.eventBus.dispatch("pagenumberchanged", {
        source: self,
        value: this.value,
      });
    });

    scaleSelect.addEventListener("change", function () {
      if (this.value === "custom") {
        return;
      }
      self.eventBus.dispatch("scalechanged", {
        source: self,
        value: this.value,
      });
    });
    // Here we depend on browsers dispatching the "click" event *after* the
    // "change" event, when the <select>-element changes.
    scaleSelect.addEventListener("click", function (evt) {
      const target = evt.target;
      // Remove focus when an <option>-element was *clicked*, to improve the UX
      // for mouse users (fixes bug 1300525 and issue 4923).
      if (
        this.value === self.pageScaleValue &&
        target.tagName.toUpperCase() === "OPTION"
      ) {
        this.blur();
      }
    });
    // Suppress context menus for some controls.
    scaleSelect.oncontextmenu = noContextMenuHandler;

    this.eventBus._on("localized", () => {
      this.#wasLocalized = true;
      this.#adjustScaleWidth();
      this.#updateUIState(true);
    });

    // NOTE
    // this.#bindEditorToolsListener(options);
  }

  #bindEditorToolsListener({
    editorFreeTextButton,
    editorFreeTextParamsToolbar,
    editorInkButton,
    editorInkParamsToolbar,
  }) {
    const editorModeChanged = (evt, disableButtons = false) => {
      const editorButtons = [
        {
          mode: AnnotationEditorType.FREETEXT,
          button: editorFreeTextButton,
          toolbar: editorFreeTextParamsToolbar,
        },
        {
          mode: AnnotationEditorType.INK,
          button: editorInkButton,
          toolbar: editorInkParamsToolbar,
        },
      ];

      for (const { mode, button, toolbar } of editorButtons) {
        const checked = mode === evt.mode;
        button.classList.toggle("toggled", checked);
        button.setAttribute("aria-checked", checked);
        button.disabled = disableButtons;
        // NOTE
        toolbar?.classList.toggle("fn__hidden", !checked);
      }
    };
    this.eventBus._on("annotationeditormodechanged", editorModeChanged);

    this.eventBus._on("toolbarreset", evt => {
      if (evt.source === this) {
        editorModeChanged(
          { mode: AnnotationEditorType.NONE },
          /* disableButtons = */ true
        );
      }
    });
  }

  #updateUIState(resetNumPages = false) {
    if (!this.#wasLocalized) {
      // Don't update the UI state until we localize the toolbar.
      return;
    }
    const { pageNumber, pagesCount, pageScaleValue, pageScale, items } = this;

    if (resetNumPages) {
      if (this.hasPageLabels) {
        items.pageNumber.type = "text";
      } else {
        items.pageNumber.type = "number";
        // NOTE
        items.numPages.textContent =  "/ " + pagesCount;
      }
      items.pageNumber.max = pagesCount;
    }

    if (this.hasPageLabels) {
      items.pageNumber.value = this.pageLabel;
      // NOTE
      items.numPages.textContent = `(${pageNumber} / ${pagesCount})`
    } else {
      items.pageNumber.value = pageNumber;
    }

    items.previous.disabled = pageNumber <= 1;
    items.next.disabled = pageNumber >= pagesCount;

    items.zoomOut.disabled = pageScale <= MIN_SCALE;
    items.zoomIn.disabled = pageScale >= MAX_SCALE;

    // NOTE
    let predefinedValueFound = false;
    for (const option of items.scaleSelect.options) {
      if (option.value !== pageScaleValue) {
        option.selected = false;
        continue;
      }
      option.selected = true;
      predefinedValueFound = true;
    }
    if (!predefinedValueFound) {
      items.customScaleOption.textContent = `${Math.round(pageScale * 10000) / 100}%`;
      items.customScaleOption.selected = true;
    }
  }

  updateLoadingIndicatorState(loading = false) {
    const { pageNumber } = this.items;

    pageNumber.classList.toggle(PAGE_NUMBER_LOADING_INDICATOR, loading);
  }

  /**
   * Increase the width of the zoom dropdown DOM element if, and only if, it's
   * too narrow to fit the *longest* of the localized strings.
   */
  async #adjustScaleWidth() {
    const { items, l10n } = this;

    // NOTE
    const predefinedValuesPromise = [
      window.siyuan.languages.pageScaleAuto,
      window.siyuan.languages.pageScaleActual,
      window.siyuan.languages.pageScaleFit,
      window.siyuan.languages.pageScaleWidth];

    await animationStarted;

    const style = getComputedStyle(items.scaleSelect);
    const scaleSelectWidth = parseFloat(
      style.getPropertyValue("--scale-select-width")
    );

    // The temporary canvas is used to measure text length in the DOM.
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { alpha: false });
    ctx.font = `${style.fontSize} ${style.fontFamily}`;

    let maxWidth = 0;
    for (const predefinedValue of await predefinedValuesPromise) {
      const { width } = ctx.measureText(predefinedValue);
      if (width > maxWidth) {
        maxWidth = width;
      }
    }
    // Account for the icon width, and ensure that there's always some spacing
    // between the text and the icon.
    maxWidth += 0.3 * scaleSelectWidth;

    if (maxWidth > scaleSelectWidth) {
      const container = items.scaleSelect.parentNode;
      container.style.setProperty("--scale-select-width", `${maxWidth}px`);
    }
    // Zeroing the width and height cause Firefox to release graphics resources
    // immediately, which can greatly reduce memory consumption.
    canvas.width = 0;
    canvas.height = 0;
  }
}

export { Toolbar };
