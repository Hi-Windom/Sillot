const _ = require("lodash");
const crypto = require('crypto');
if (typeof window !== "undefined") {
  window._ = _;
  window.crypto=crypto;
}