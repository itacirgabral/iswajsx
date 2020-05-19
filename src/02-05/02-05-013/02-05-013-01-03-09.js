function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 7l-7-7-7 7h2.844L10 2.844 14.156 7H17zM11 7v23H9V7h2zM21 13.219V21h-7.781l1-1H20v-5.781l1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.908 16.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707c-3.905-3.905-10.237-3.905-14.142 0L1.201 18.88l-.707-.707 1.414-1.415z"
}));

export default SvgComponent;