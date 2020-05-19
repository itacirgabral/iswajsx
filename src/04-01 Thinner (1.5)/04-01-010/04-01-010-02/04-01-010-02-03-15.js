function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 6V4h18v2H3zM1.813 10L.405 8.594 3 6h2.813l-4 4zM9 0l1.406 1.406L7.812 4H5l4-4z"
}));

export default SvgComponent;