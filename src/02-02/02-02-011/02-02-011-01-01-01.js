function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 2.281l-5 5L3.719 8 8 3.719 12.281 8 13 7.281l-5-5zM0 0v1h16V0H0zM0 9v1h16V9H0z"
}));

export default SvgComponent;