function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 15h15v15H14z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 17h11v11H16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 15H0v2h14v-2zM16 15V0h-2v15h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.406 10.563L1.97 11.969 14 24v-2.813L3.406 10.563z"
}));

export default SvgComponent;