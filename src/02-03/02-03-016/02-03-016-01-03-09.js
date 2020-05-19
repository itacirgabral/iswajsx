function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 7v23h1V7h-1zM3 7l7-7 7 7h-2.844L10 2.844 5.844 7H3zM7 7v23h1V7H7zM21 15.219V23h-7.781l1-1H20v-5.781l1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.908 18.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707c-3.905-3.905-10.237-3.905-14.142 0L1.201 20.88l-.707-.707 1.414-1.415z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 7v23h4V7H8z",
  fill: "#fff"
}));

export default SvgComponent;