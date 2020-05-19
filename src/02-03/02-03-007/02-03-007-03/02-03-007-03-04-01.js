function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v17.656L16.344 34l1.406-1.406L2 16.812V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v15.188L20.594 29.75 22 28.344l-14-14V0H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v16.813l15.75 15.78 2.844-2.843L6 15.187V0H2z",
  fill: "#fff"
}));

export default SvgComponent;