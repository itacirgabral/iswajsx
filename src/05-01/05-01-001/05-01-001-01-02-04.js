function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 38
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0l42 6v5L0 2V0zM0 27l42 6v5L0 29v-2z"
}));

export default SvgComponent;