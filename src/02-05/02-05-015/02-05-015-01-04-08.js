function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.385 5.201L0 23.586 1.414 25 19.8 6.615l-1.414-1.414zM14 6L8.5.5 3 6h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 10.9L14.1 1H24v9.9zM19 17C12.925 17 8 12.075 8 6h1c0 5.523 4.477 10 10 10h2v1h-2zM12 17l5.5 5.5L12 28V17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 12c0 6.075 4.925 11 11 11v-1C6.477 22 2 17.523 2 12v-2H1v2z"
}));

export default SvgComponent;