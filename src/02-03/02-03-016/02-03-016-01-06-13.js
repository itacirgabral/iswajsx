function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 23V0h1v23h-1zM4 23l7 7 7-7h-2.844L11 27.156 6.844 23H4zM8 23V0h1v23H8zM0 10.219V18h7.781l-1-1H1v-5.781l-1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.092 13.757c-4.296-4.295-11.26-4.295-15.556 0l.707.707c3.905-3.905 10.237-3.905 14.142 0l1.414 1.415.707-.707-1.414-1.415z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 23V0h4v23H9z",
  fill: "#fff"
}));

export default SvgComponent;