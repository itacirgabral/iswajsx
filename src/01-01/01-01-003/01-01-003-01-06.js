function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 13v17s8 0 8-5v-7s0-5-8-5zM9 0v11h2V0H9zM0 25c.07.07.022 4.233 7 4.906v-2.031C4.631 27.663 1 27.03 1 25H0zM7 13.188c-2.648.38-7 1.622-7 5.812h2s.017-2.394 5-2.906v-2.907z"
}));

export default SvgComponent;