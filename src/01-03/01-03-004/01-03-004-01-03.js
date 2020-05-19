function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 12h15v15H9zM5 2v6h2V4h2v8h2V2H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 6h-2V0h6v12h-2V2h-2v4z",
  fillRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 19h9v2H0z"
}));

export default SvgComponent;