function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 4.5L11 0v9L6.5 4.5zM24 14c0-5.523-4.477-10-10-10h-3v1h3a9 9 0 019 9v6h1v-6zM.5 10.5L5 6v9L.5 10.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 20c0-5.523-4.477-10-10-10H5v1h3a9 9 0 019 9v6h1v-6z"
}));

export default SvgComponent;