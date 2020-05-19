function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v22l15 15 1.406-1.406L2 21.187V5h22V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 5v16.188l14.406 14.406L15 37h1.438l1.406-1.406-4.25-4.25 2.125-2.094-1.5-1.531c1.248-1.974.91-4.746-.969-6.625-1.88-1.88-4.651-2.217-6.625-.969l-1.5-1.5L3 20.75V6h21V5H2zm3.125 15.031l1.406 1.438c1.562-1.562 4.243-1.414 6 .343 1.758 1.758 1.937 4.438.375 6l1.406 1.438-.718.688-9.188-9.188.719-.719zm4.344 1.844a2.332 2.332 0 00-1.875.656l4.25 4.219c.976-.976.828-2.703-.344-3.875-.586-.586-1.327-.936-2.031-1zM15 37L0 22v1.438L13.594 37H15z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.414 20.75l9.193 9.193.707-.707-1.415-1.415c1.563-1.562 1.404-4.253-.353-6.01-1.757-1.757-4.448-1.916-6.01-.353L5.12 20.043l-.707.707zm3.182 1.768c.977-.976 2.718-.818 3.89.354 1.17 1.171 1.33 2.912.353 3.889l-4.243-4.243z"
}));

export default SvgComponent;