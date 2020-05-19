function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h16L8 0zM4 8v17.656L20.344 42l1.406-1.406L6 24.812V8H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 8v15.188L24.594 37.75 26 36.344l-14-14V8h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8v16.813l15.75 15.78 2.844-2.843L10 23.187V8H6z",
  fill: "#fff"
}));

export default SvgComponent;