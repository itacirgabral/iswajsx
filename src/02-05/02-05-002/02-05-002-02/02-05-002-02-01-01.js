function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L0 7h14L7 0zM6 7h2v7H6V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 0l-7 7h14l-7-7zM19 7h2v7h-2V7zM0 16v2h27v-2H0z"
}));

export default SvgComponent;