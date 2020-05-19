function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.031 11.813L1 18.843V31h14V18.781l-6.969-6.968z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M8 22H1v3h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.094 2.844l2.531 9.531L3 14 .156 3.375l1.938-.531zM7 0v10l1-1 1 1V0H7zM13.906 2.844l1.938.531L13 14l-1.625-1.625 2.531-9.531zM20.594 9.594l-6 6L16 17l6-6-1.406-1.406z"
}));

export default SvgComponent;