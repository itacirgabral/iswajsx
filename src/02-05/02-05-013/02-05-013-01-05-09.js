function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 7v23h2V7H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.188 15.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L.5 15.844l.688-.719z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.219 13L21 20.781V13h-7.781zm2.406 1H20v4.344L15.625 14zM3 7l7-7 7 7H3zm2.438-1h9.125L10 1.437 5.437 6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.438 6L10 1.437 14.563 6H5.437zM15.625 14L20 18.344V14h-4.375z",
  fill: "#fff"
}));

export default SvgComponent;