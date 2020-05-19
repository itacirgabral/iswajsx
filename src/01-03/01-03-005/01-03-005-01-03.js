function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 12h15v15H7zM3 2v6h2V4h2v8h2V2H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 6h-2V0h6v12h-2V2h-2v4z",
  fillRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 19v2H0v-6h5v2H2v2h5z"
}));

export default SvgComponent;