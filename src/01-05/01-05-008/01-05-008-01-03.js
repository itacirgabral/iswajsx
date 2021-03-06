function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 25V1s7 0 7 7v9c0 8-7 8-7 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 0C0 0 .126 3.787 0 4h2c0-2 2-2 2-2h2c2 0 2 2 2 2l.844-2.938C7.663 0 6 0 6 0H4zM4 5S0 5 0 9h2c.083-.1 0-2 2-2h2s2 0 2 2V5.469C7.477 5.193 6.836 5 6 5H4zM4 10s-4 0-4 4h2c.083.015 0-2 2-2h2s2 0 2 2v-3.531C7.477 10.193 6.836 10 6 10H4zM4 15s-4 0-4 4h2c-.043.065 0-2 2-2h2s2 0 2 2v-3.531C7.477 15.193 6.836 15 6 15H4zM0 21c0 4 4 4 4 4h2c.836 0 1.477-.193 2-.469V21c0 2-2 2-2 2H4c-2 0-1.98-1.851-2-2H0z"
}));

export default SvgComponent;