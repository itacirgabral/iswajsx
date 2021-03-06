function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 64,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5h42v4H0V5zM44 9l5 5 .719-.719L45.437 9l4.282-4.281L49 4l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48 9.5v-1h6v1h-6zM64 5l-5 5-.719-.719L62.563 5 58.28.719 59 0l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M60 5.5v-1h-6v1h6z"
}));

export default SvgComponent;