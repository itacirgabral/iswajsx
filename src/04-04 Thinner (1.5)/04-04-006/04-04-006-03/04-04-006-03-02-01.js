function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.5.5v9h6v-9h-6zm1.5 1h3v7H2v-7z"
}));

export default SvgComponent;