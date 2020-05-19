function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.5.5L25 7h-2l-4.5-4.5L14 7h-2L18.5.5zM19 7v6c0 3.866-2.239 7-5 7H9a9 9 0 01-9-9h11c0 3.314 1.343 6 3 6a4 4 0 004-4V7h1z"
}));

export default SvgComponent;