function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15h8v15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 16h3v13h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 15h13v3H0zM17 0h2v13h-2zM25.188 3l-4.875 10h2.218L27 3.875 25.187 3zM28 10l-3 3v2.813l4.438-4.407L28 10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.969 11.563l-.688.718L13 23v-1.438l-10.031-10z"
}));

export default SvgComponent;