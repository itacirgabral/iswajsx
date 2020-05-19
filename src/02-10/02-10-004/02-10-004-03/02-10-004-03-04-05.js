function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 25.5L0 20h11l-5.5 5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 40C7.015 40 5 36.194 5 31.5v-5h2v5C7 35.642 8.12 38 9.5 38s3.5-2.358 3.5-6.5v-23C13 4.358 10.88 2 9.5 2S7 4.358 7 8.5V13H5V8.5C5 3.806 7.015 0 9.5 0h2C13.985 0 17 3.806 17 8.5v23c0 4.694-3.015 8.5-5.5 8.5h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 19.5L0 14h11l-5.5 5.5z"
}));

export default SvgComponent;