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
/* globals module, __non_webpack_require__ */

"use strict";

import { addScriptSync } from "../../protyle/util/addScript.ts";
import { Constants } from "../../constants.ts";
addScriptSync(`${Constants.PROTYLE_CDN}/js/pdf/pdf.js?v=3.0.150`, "pdfjsScript");
var stdin_default = window["pdfjs-dist/build/pdf"];
let __esModule = window["pdfjs-dist/build/pdf"]["__esModule"];
let AnnotationEditorLayer = window["pdfjs-dist/build/pdf"]["AnnotationEditorLayer"];
let AnnotationEditorParamsType = window["pdfjs-dist/build/pdf"]["AnnotationEditorParamsType"];
let AnnotationEditorType = window["pdfjs-dist/build/pdf"]["AnnotationEditorType"];
let AnnotationEditorUIManager = window["pdfjs-dist/build/pdf"]["AnnotationEditorUIManager"];
let AnnotationLayer = window["pdfjs-dist/build/pdf"]["AnnotationLayer"];
let AnnotationMode = window["pdfjs-dist/build/pdf"]["AnnotationMode"];
let CMapCompressionType = window["pdfjs-dist/build/pdf"]["CMapCompressionType"];
let GlobalWorkerOptions = window["pdfjs-dist/build/pdf"]["GlobalWorkerOptions"];
let InvalidPDFException = window["pdfjs-dist/build/pdf"]["InvalidPDFException"];
let MissingPDFException = window["pdfjs-dist/build/pdf"]["MissingPDFException"];
let OPS = window["pdfjs-dist/build/pdf"]["OPS"];
let PDFDataRangeTransport = window["pdfjs-dist/build/pdf"]["PDFDataRangeTransport"];
let PDFDateString = window["pdfjs-dist/build/pdf"]["PDFDateString"];
let PDFWorker = window["pdfjs-dist/build/pdf"]["PDFWorker"];
let PasswordResponses = window["pdfjs-dist/build/pdf"]["PasswordResponses"];
let PermissionFlag = window["pdfjs-dist/build/pdf"]["PermissionFlag"];
let PixelsPerInch = window["pdfjs-dist/build/pdf"]["PixelsPerInch"];
let RenderingCancelledException = window["pdfjs-dist/build/pdf"]["RenderingCancelledException"];
let SVGGraphics = window["pdfjs-dist/build/pdf"]["SVGGraphics"];
let UNSUPPORTED_FEATURES = window["pdfjs-dist/build/pdf"]["UNSUPPORTED_FEATURES"];
let UnexpectedResponseException = window["pdfjs-dist/build/pdf"]["UnexpectedResponseException"];
let Util = window["pdfjs-dist/build/pdf"]["Util"];
let VerbosityLevel = window["pdfjs-dist/build/pdf"]["VerbosityLevel"];
let XfaLayer = window["pdfjs-dist/build/pdf"]["XfaLayer"];
let build = window["pdfjs-dist/build/pdf"]["build"];
let createPromiseCapability = window["pdfjs-dist/build/pdf"]["createPromiseCapability"];
let createValidAbsoluteUrl = window["pdfjs-dist/build/pdf"]["createValidAbsoluteUrl"];
let getDocument = window["pdfjs-dist/build/pdf"]["getDocument"];
let getFilenameFromUrl = window["pdfjs-dist/build/pdf"]["getFilenameFromUrl"];
let getPdfFilenameFromUrl = window["pdfjs-dist/build/pdf"]["getPdfFilenameFromUrl"];
let getXfaPageViewport = window["pdfjs-dist/build/pdf"]["getXfaPageViewport"];
let isPdfFile = window["pdfjs-dist/build/pdf"]["isPdfFile"];
let loadScript = window["pdfjs-dist/build/pdf"]["loadScript"];
let renderTextLayer = window["pdfjs-dist/build/pdf"]["renderTextLayer"];
let shadow = window["pdfjs-dist/build/pdf"]["shadow"];
let version = window["pdfjs-dist/build/pdf"]["version"];
export {
  AnnotationEditorLayer,
  AnnotationEditorParamsType,
  AnnotationEditorType,
  AnnotationEditorUIManager,
  AnnotationLayer,
  AnnotationMode,
  CMapCompressionType,
  GlobalWorkerOptions,
  InvalidPDFException,
  MissingPDFException,
  OPS,
  PDFDataRangeTransport,
  PDFDateString,
  PDFWorker,
  PasswordResponses,
  PermissionFlag,
  PixelsPerInch,
  RenderingCancelledException,
  SVGGraphics,
  UNSUPPORTED_FEATURES,
  UnexpectedResponseException,
  Util,
  VerbosityLevel,
  XfaLayer,
  __esModule,
  build,
  createPromiseCapability,
  createValidAbsoluteUrl,
  stdin_default as default,
  getDocument,
  getFilenameFromUrl,
  getPdfFilenameFromUrl,
  getXfaPageViewport,
  isPdfFile,
  loadScript,
  renderTextLayer,
  shadow,
  version
};