function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 26l7 7 7-7h-2.844L11 30.156 6.844 26H4zM10 26V0h2v26h-2zM22 5.219V13h-7.781l1-1H21V6.219l1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.908 8.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707C13.852 5.56 7.52 5.56 3.615 9.464L2.201 10.88l-.707-.707 1.414-1.415zM0 15.219V23h7.781l-1-1H1v-5.781l-1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.092 18.757c-4.296-4.295-11.26-4.295-15.556 0l.707.707c3.905-3.905 10.237-3.905 14.142 0l1.414 1.415.707-.707-1.414-1.415z"
}));

export default SvgComponent;