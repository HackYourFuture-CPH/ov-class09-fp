"use strict";

const path = require("path");
const moment = require("moment");

let nameUploadsInAWS = function(filename) {
  const extension = path.parse(filename).ext;
  return `${
    extension.match(/^(.mp3|.ogg|.wav)$/) ? "podcast/" : "images/"
  }Fabric_EP_${moment(new Date()).format("DDMMMYYYY_HHmms")}_${filename}`;
};

module.exports = {
  nameUploadsInAWS: nameUploadsInAWS
};
