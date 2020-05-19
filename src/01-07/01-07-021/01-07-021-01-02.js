function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 7h15v15H2z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M4 9h6v11H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0L.594 1.406 6.187 7H9L2 0zM23.375 7.813L17 14.188V17l7.781-7.781-1.406-1.406z"
}));

export default SvgComponent;