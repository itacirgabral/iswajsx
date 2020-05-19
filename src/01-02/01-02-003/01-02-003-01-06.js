function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 13h15v14H4zM0 2v6h2V4h2v7h2V2H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6V0h6v11h-2V2h-2v4H8z",
  fillRule: "evenodd"
}));

export default SvgComponent;