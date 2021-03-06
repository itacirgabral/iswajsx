function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 3h9.9L17 12.9V3zm.994.994l.022 6.475 6.453-6.453-6.475-.022z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.444.172L16.293 15.02a3 3 0 004.243 0c1.171-1.172.855-3.388-.708-4.95l4.243-4.243a6 6 0 010 8.486l-2.121 2.121a5 5 0 01-7.071 0L.029 1.585 1.444.173z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.994 3.994l6.475.022-6.453 6.453-.022-6.475z",
  fill: "#fff"
}));

export default SvgComponent;