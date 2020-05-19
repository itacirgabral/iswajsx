function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 10v2h31v-2H0zM26 5L21.5.5 17 5h9zM31 4v14l7-7-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 5v10c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2v-1h-5v1c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4V5h-1zM14 5L9.5.5 5 5h9zM9 5v10c0 1.105-.672 2-1.5 2S6 16.105 6 15v-1H1v1c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4V5H9z"
}));

export default SvgComponent;