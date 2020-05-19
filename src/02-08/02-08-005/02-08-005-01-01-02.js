function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 0a4 4 0 014 4v1h-1V4a3 3 0 00-3-3h-1c-1.657 0-3 1.79-3 4v9c0 3.283 4 9 4 9H7s4-5.717 4-9V5a5 5 0 015-5h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 5l-5.5 5.5L15 5h11zM26 13v1H0v-1h26z"
}));

export default SvgComponent;