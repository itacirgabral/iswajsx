function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 20A5.507 5.507 0 000 22.344v6.312c.365.518.826.978 1.344 1.344h6.312A5.507 5.507 0 0010 25.5 5.5 5.5 0 004.5 20z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 0v29l16.25-16.25-1.406-1.438L5 24.188V5h22V0H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v30h1.438l17.25-17.25-2.844-2.844L6 21.75V6h21V5H5v19.156l12.844-12.843 1.406 1.437L3 29V0H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 21a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
}));

export default SvgComponent;