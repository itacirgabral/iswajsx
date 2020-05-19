function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.56 15.854L3.146 14.44l2.122-2.122 1.414 1.414-2.122 2.122zm3.536-3.536l-1.414-1.414 2.121-2.121 1.414 1.414-2.121 2.121zm3.536-3.535l-1.415-1.415 2.122-2.12 1.414 1.413-2.121 2.122zM6.975 19l-1-1.732 2.598-1.5 1 1.732L6.975 19zm4.33-2.5l-1-1.732 2.598-1.5 1 1.732-2.598 1.5zm4.33-2.5l-1-1.732 2.598-1.5 1 1.732-2.598 1.5zM1.732 13.025l-1.732-1 1.5-2.598 1.732 1-1.5 2.598zm2.5-4.33l-1.732-1L4 5.097l1.732 1-1.5 2.598zm2.5-4.33L5 3.365 6.5.767l1.732 1-1.5 2.598z"
}));

export default SvgComponent;