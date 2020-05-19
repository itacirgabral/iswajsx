function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 10c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0c-1.656 0-3 1.344-3 3 0 1.3.842 2.397 2 2.813V18h2V5.812c1.158-.415 2-1.511 2-2.812 0-1.656-1.344-3-3-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 12a6 6 0 00-5.656 4H.25A8.051 8.051 0 000 18h2c0 3.312 2.688 6 6 6s6-2.688 6-6h2v-2h-2.344A6 6 0 008 12z",
  fill: "#fff"
}));

export default SvgComponent;