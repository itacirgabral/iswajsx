function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 20h14l-7 7-7-7zM22 0a6 6 0 00-6 6v5h-4a6 6 0 00-6 6v3h2v-3a4 4 0 014-4h6V6a4 4 0 014-4h5V0h-5z"
}));

export default SvgComponent;