function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M30 2h9.9l-1.415 1.414h-7.07v7.071L30 11.9V2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.716.586l7.778 7.778a1 1 0 001.414 0c.195-.195.31-.451.31-.707v-4.64l1.988 1.988 6.895 6.894a1 1 0 001.414 0c.195-.195.31-.45.31-.707v-4.64l1.988 1.989 5.48 5.48a3 3 0 004.243 0c1.171-1.172.855-3.388-.708-4.95l4.243-4.243a6 6 0 010 8.486l-2.121 2.121a5 5 0 01-7.071 0l-4.088-4.088a2.98 2.98 0 01-.862 1.967 3 3 0 01-4.243 0l-5.502-5.502a2.98 2.98 0 01-.862 1.966 3 3 0 01-4.242 0L.302 2 1.716.586z"
}));

export default SvgComponent;