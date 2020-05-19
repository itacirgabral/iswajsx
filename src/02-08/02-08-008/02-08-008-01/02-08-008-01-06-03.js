function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5v7.778l1.414-1.414v-4.95h4.95L7.778 5H0zM3.536 9.243l4.242 4.242a4 4 0 005.657 0l2.828-2.828a7 7 0 000-9.9L9.9 7.121l1.415 1.415c1.171 1.171 1.488 2.754.707 3.535a3 3 0 01-4.243 0L4.243 8.536l-.707.707z"
}));

export default SvgComponent;