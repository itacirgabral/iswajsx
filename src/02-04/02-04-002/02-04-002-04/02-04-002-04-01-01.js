function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 50
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h16L8 0zM4 8h2v42H4V8zM10 8h2v42h-2V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8v42h4V8H6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 23.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"
}));

export default SvgComponent;