function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 53,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M53 0v2l-8 2v5L9 17v-6l-9 2V9l12-2v5l30-5V2l11-2z"
}));

export default SvgComponent;