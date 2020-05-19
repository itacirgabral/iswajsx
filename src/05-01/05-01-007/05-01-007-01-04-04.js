function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 20H0v-6h1v5h5v1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 10a8.725 8.725 0 01-2.625 6.25l-.719-.719A7.707 7.707 0 004 10a7.707 7.707 0 00-2.344-5.531L0 2.844l.719-.719L2.375 3.75A8.725 8.725 0 015 10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10c0 2.985-1.223 5.677-3.188 7.625L2.375 16.25A8.725 8.725 0 005 10a8.725 8.725 0 00-2.625-6.25L.719 2.125 2.125.719l1.688 1.656A10.704 10.704 0 017 10z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 10a11.72 11.72 0 01-3.469 8.344l-.718-.719A10.704 10.704 0 007 10c0-2.985-1.223-5.677-3.188-7.625L2.125.719 2.844 0 4.53 1.656A11.72 11.72 0 018 10z"
}));

export default SvgComponent;