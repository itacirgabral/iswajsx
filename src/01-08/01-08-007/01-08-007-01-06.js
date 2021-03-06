function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 13v17s8 0 8-5v-7s0-5-8-5zM9 0v11c-.007 0 .844.027 2 .188V0H9zM0 19h2s0-4 7-4v-2s-9 0-9 6zM15 5v7.313a8.325 8.325 0 012 1.25V5h-2zM21.938 8.219L17 13.188v.374c.43.375.845.787 1.156 1.282l5.219-5.219-1.438-1.406zM9 30v-2s-8 0-8-3H0c.077.077 0 5 9 5z"
}));

export default SvgComponent;