function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0L6.5 4.5 11 9V7.562L7.937 4.5 11 1.437V0zM24 14c0-5.523-4.477-10-10-10h-3v1h3a9 9 0 019 9v6h1v-6zM5 6L.5 10.5 5 15v-1.438L1.937 10.5 5 7.437V6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 20c0-5.523-4.477-10-10-10H5v1h3a9 9 0 019 9v6h1v-6z"
}));

export default SvgComponent;