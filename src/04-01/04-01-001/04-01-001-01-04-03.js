function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.126 5.126c6.834-6.835 17.914-6.835 24.748 0 6.835 6.834 6.835 17.914 0 24.748-6.834 6.835-17.914 6.835-24.748 0-6.835-6.834-6.835-17.914 0-24.748zM6.54 6.54c-6.053 6.053-6.053 15.867 0 21.92 6.053 6.053 15.867 6.053 21.92 0 6.053-6.053 6.053-15.867 0-21.92C22.407.487 12.593.487 6.54 6.54z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.798.176h15.026v15.026c-.28-2.13-.924-4.213-1.989-6.143V2.165h-6.894C24.011 1.1 21.928.457 19.798.175z"
}));

export default SvgComponent;