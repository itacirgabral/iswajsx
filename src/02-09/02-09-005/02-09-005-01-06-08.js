function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0L.5 4.5 5 9V7.562L1.937 4.5 5 1.437V0zM18 14C18 8.477 13.523 4 8 4H5v1h3a9 9 0 019 9v6h1v-6z"
}));

export default SvgComponent;