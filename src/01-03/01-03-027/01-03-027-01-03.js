function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 15h15v15H9zM11 0H9v15h2V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 16s0-3 3-3h1s3 0 3 3h2s0-5-5-5H5s-5 0-5 5h2zM0 16c0 5 5 5 5 5h1c5 0 5-5 5-5H9c0 3-3 3-3 3H5c-3 0-3-3-3-3H0z"
}));

export default SvgComponent;