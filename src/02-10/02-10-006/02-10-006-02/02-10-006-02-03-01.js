function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 6c-2.761 0-5 3.134-5 7s2.239 7 5 7 5-3.134 5-7-2.239-7-5-7zm0 1.5v11c-1.933 0-3.5-2.462-3.5-5.5s1.567-5.5 3.5-5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 18.5a3.5 5.5 0 110-11V13z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 10h8L9.5 8.5h-5v-5L3 2v8zM14 0c-1.791 0-3.57.696-4.938 2.063L6.22 5.219l1.375 1.375 2.875-3.125a4.978 4.978 0 017.062 0l2.063 2.312L21 4.375l-2.063-2.313A6.963 6.963 0 0014 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 13h8l-1.5-1.5h-5v-5L0 5v8z"
}));

export default SvgComponent;