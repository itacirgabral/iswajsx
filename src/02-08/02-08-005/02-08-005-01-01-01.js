function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0a4 4 0 00-4 4v1h1V4a3 3 0 013-3h1c1.657 0 3 1.79 3 4v9c0 3.283-4 9-4 9h10s-4-5.717-4-9V5a5 5 0 00-5-5H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 5l5.5 5.5L11 5H0zM0 13v1h26v-1H0z"
}));

export default SvgComponent;