function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.5 4.5L7 0v9L2.5 4.5zM20 14c0-5.523-4.477-10-10-10H7v1h3a9 9 0 019 9v6h1v-6zM13.5 27.5L18 23H9l4.5 4.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 20c0-5.523-4.477-10-10-10H0v1h4a9 9 0 019 9v3h1v-3z"
}));

export default SvgComponent;