function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6V1h1v4h4v1H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.05 2.828L3.878 0l.708.707-2.829 2.829-.707-.708zM2.464 4.243l2.829-2.829.707.707L3.17 4.95l-.707-.707z"
}));

export default SvgComponent;