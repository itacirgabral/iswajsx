function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.219 15.094C3.73 18.047 0 23.83 0 30.5 0 40.165 7.835 48 17.5 48S35 40.165 35 30.5c0-6.67-3.73-12.453-9.219-15.406l-.937 1.781C29.689 19.495 33 24.605 33 30.5 33 39.06 26.06 46 17.5 46 8.94 46 2 39.06 2 30.5c0-5.895 3.311-11.004 8.156-13.625l-.937-1.781zM26 5l-5 5-.719-.719L24.563 5 20.28.719 21 0l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 5.5v-1h-6v1h6zM9 11l5 5 .719-.719L10.438 11l4.28-4.281L14 6l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 11.5v-1h6v1h-6z"
}));

export default SvgComponent;