function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.657 19.799L24.042 1.414 22.628 0 4.243 18.385l1.414 1.414zM10 19l5.5 5.5L21 19H10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 14.1L9.9 24H0v-9.9zM5 8c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H3V8h2zM17 12l5.5 5.5L28 12H17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10h-2V1h2z"
}));

export default SvgComponent;