function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7v2h25V7H0zM9.5 10.5L5 15h9l-4.5-4.5zM25 1v14l7-7-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v15a2 2 0 01-4 0H7c0 2.21 2.239 4 5 4s5-1.79 5-4V0h-1z"
}));

export default SvgComponent;