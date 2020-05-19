function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 5v7.778l-1.414-1.414v-4.95h-4.95L11.222 5H19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.464 9.243l-4.242 4.242a4 4 0 01-5.657 0l-2.828-2.828a7 7 0 010-9.9L9.1 7.121 7.686 8.536C6.515 9.707 6.198 11.29 6.98 12.07a3 3 0 004.243 0l3.535-3.535.707.707z"
}));

export default SvgComponent;