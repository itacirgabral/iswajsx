function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 0h9.9L20 9.9V0zm.994.994l.022 6.475 6.453-6.453-6.475-.022z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.322 2.121L10.101 9.9a1 1 0 001.414 0c.195-.195.31-.45.31-.707v-4.64l1.988 1.989 5.48 5.48a3 3 0 004.243 0c1.171-1.172.855-3.388-.708-4.95l4.243-4.243a6 6 0 010 8.486l-2.121 2.121a5 5 0 01-7.071 0L13.79 9.347a2.98 2.98 0 01-.862 1.967 3 3 0 01-4.243 0L.908 3.536 2.322 2.12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.994.994l6.475.022-6.453 6.453-.022-6.475z",
  fill: "#fff"
}));

export default SvgComponent;