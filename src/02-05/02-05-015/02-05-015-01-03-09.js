function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 7l-7-7-7 7h2.844L11 2.844 15.156 7H18zM12 7v26h-2V7h2zM22 10.219V18h-7.781l1-1H21v-5.781l1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.908 13.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707c-3.905-3.905-10.237-3.905-14.142 0L2.201 15.88l-.707-.707 1.414-1.415zM0 20.219V28h7.781l-1-1H1v-5.781l-1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.092 23.757c-4.296-4.295-11.26-4.295-15.556 0l.707.707c3.905-3.905 10.237-3.905 14.142 0l1.414 1.415.707-.707-1.414-1.415z"
}));

export default SvgComponent;