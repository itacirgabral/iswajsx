function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 26V0H9v26h2zM13.222 23H21v-7.778L13.222 23zM3 26h14l-7 7-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.908 18.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707c-3.905-3.905-10.237-3.905-14.142 0L1.201 20.88l-.707-.707 1.414-1.415zM13.222 13H21V5.222L13.222 13zM1.908 8.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707C12.852 5.56 6.52 5.56 2.615 9.464L1.201 10.88l-.707-.707 1.414-1.415z"
}));

export default SvgComponent;