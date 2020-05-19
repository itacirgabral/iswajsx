function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.219 15.094C3.73 18.047 0 23.83 0 30.5 0 40.165 7.835 48 17.5 48S35 40.165 35 30.5c0-6.67-3.73-12.453-9.219-15.406l-.687 1.312A16.002 16.002 0 0133.5 30.5c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-6.09 3.399-11.39 8.406-14.094l-.687-1.312zM9 5l5 5 .719-.719L10.438 5l4.28-4.281L14 0 9 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 7V6h6v1h-6zM13 4V3h6v1h-6zM26 11l-5 5-.719-.719L24.563 11 20.28 6.719 21 6l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 13v-1h-6v1h6zM22 10V9h-6v1h6z"
}));

export default SvgComponent;