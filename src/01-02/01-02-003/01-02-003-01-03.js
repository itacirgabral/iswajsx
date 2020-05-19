function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 12h15v15H4zM0 2v6h2V4h2v8h2V2H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 6H8V0h6v12h-2V2h-2v4z",
  fillRule: "evenodd"
}));

export default SvgComponent;