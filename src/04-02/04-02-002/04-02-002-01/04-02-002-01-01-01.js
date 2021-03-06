function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 8l-5 5 .719.719L10.406 9H17V8h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.594 11L7.28 15.281 8 16l4-4h4v-1h-4.406zM25 8l5 5-.719.719L24.594 9H18V8h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.406 11l4.313 4.281L27 16l-4-4h-4v-1h4.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}));

export default SvgComponent;