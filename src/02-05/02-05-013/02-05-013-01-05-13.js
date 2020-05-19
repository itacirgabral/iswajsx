function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 23V0h2v23h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.092 12.757c-4.296-4.295-11.26-4.295-15.556 0l.707.707c3.905-3.905 10.237-3.905 14.142 0l1.414 1.415.707-.707-1.414-1.415z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.781 17L0 9.219V17h7.781zm-2.406-1H1v-4.344L5.375 16zM4 23l7 7 7-7H4zm2.438 1h9.125L11 28.563 6.437 24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.438 24L11 28.563 15.563 24H6.437zM5.375 16L1 11.656V16h4.375z",
  fill: "#fff"
}));

export default SvgComponent;