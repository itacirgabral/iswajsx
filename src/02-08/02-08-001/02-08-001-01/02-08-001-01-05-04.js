function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 2.1V12h9.9L0 2.1zm1.016 2.431l6.453 6.453H1.016V4.53z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.97 2.1C14.238-.632 9.489-.316 6.365 2.809 5.31 3.862 2.121 4.222 2.121 4.222l5.657 5.657s.36-3.189 1.414-4.243c2.344-2.343 5.193-3.293 6.364-2.121 1.562 1.562.296 5.36-2.828 8.485l.707.707c3.905-3.905 5.488-8.654 3.536-10.606z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.016 4.531v6.453H7.47L1.016 4.53z",
  fill: "#fff"
}));

export default SvgComponent;