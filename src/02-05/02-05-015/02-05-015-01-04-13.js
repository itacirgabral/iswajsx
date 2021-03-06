function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 26V0h2v26h-2zM7.778 23H0v-7.778L7.778 23zM18 26H4l7 7 7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.092 18.757c-4.296-4.295-11.26-4.295-15.556 0l.707.707c3.905-3.905 10.237-3.905 14.142 0l1.414 1.415.707-.707-1.414-1.415zM14.222 13H22V5.222L14.222 13zM2.908 8.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707C13.852 5.56 7.52 5.56 3.615 9.464L2.201 10.88l-.707-.707 1.414-1.415z"
}));

export default SvgComponent;