function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.156 7v23h1V7h-1zM4.156 7l7-7 7 7h-2.843l-4.157-4.156L7 7H4.156zM8.156 7v23h1V7h-1zM0 15.219V23h7.781l-1-1H1v-5.781l-1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.092 18.757c-4.296-4.295-11.26-4.295-15.556 0l.707.707c3.905-3.905 10.237-3.905 14.142 0l1.414 1.415.707-.707-1.414-1.415z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.156 7v23h4V7h-4z",
  fill: "#fff"
}));

export default SvgComponent;