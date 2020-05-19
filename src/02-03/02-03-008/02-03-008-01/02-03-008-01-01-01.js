function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0l-7 7h14l-7-7zM4 7v14h16v-2H6V7H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 7v9h11v-2h-9V7H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 7v12h14v-3H9V7H6z",
  fill: "#fff"
}));

export default SvgComponent;