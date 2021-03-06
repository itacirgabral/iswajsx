function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8.719l2.5 2.5 2.5-2.5L4.281 8 2.5 9.781.719 8 0 8.719zM8 0v2h2V0H8zM4 1v2h2V1H4zm0 12v2h2v-2H4zm4 1v2h2v-2H8zM0 4.719l2.5 2.5 2.5-2.5L4.281 4 2.5 5.781.719 4 0 4.719z"
}));

export default SvgComponent;