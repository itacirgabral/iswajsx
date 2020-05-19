function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 5h15v15H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 7v2H6v3h2v6h11v-6h2V9h-2V7H8z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.844 0L0 2.813l6 6V5h1.813l-4.97-5z"
}));

export default SvgComponent;