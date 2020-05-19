function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 4h15v15H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0C0 0 0 5 0 5h2c0-3 3-3 3-3h1c3 0 3 3 3 3V4h1.906C10.282.012 6 0 6 0H5zM0 5c0 5 5 5 5 5h1c1.328 0 2.284-.357 3-.875V5c0 3-3 3-3 3H5C2 8 2 5 2 5H0z"
}));

export default SvgComponent;