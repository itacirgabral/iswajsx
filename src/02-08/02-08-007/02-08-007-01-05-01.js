function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3l3.5 3.5L7 3H0zm1.688.688h3.625L3.5 5.5 1.687 3.687z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 0a3.5 3.5 0 00-3.469 3h1.031c.234-1.14 1.23-2 2.438-2A2.5 2.5 0 019 3.5V13c0 2.848-3 8-3 8h7s-3-5.152-3-8V3.5A3.5 3.5 0 006.5 0zM14 17l4.5 4.5L23 17h-9zm1.688.688h5.624L18.5 20.5l-2.813-2.813zM16 0a3 3 0 013 3v10c0 1.49 2 4 2 4h-5s2-2.51 2-4V3a2 2 0 10-4 0v4h-1V3a3 3 0 013-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.688 3.688L3.5 5.5l1.813-1.813H1.688zM15.688 17.688L18.5 20.5l2.813-2.813h-5.625z",
  fill: "#fff"
}));

export default SvgComponent;