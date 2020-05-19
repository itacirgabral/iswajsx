function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 23V0h1v23H8zM7.778 18H0v-7.778L7.778 18zM18 23H4l7 7 7-7zM13 23V0h1v23h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.092 13.757c-4.296-4.295-11.26-4.295-15.556 0l.707.707c3.905-3.905 10.237-3.905 14.142 0l1.414 1.415.707-.707-1.414-1.415z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 23V0h4v23H9z",
  fill: "#fff"
}));

export default SvgComponent;