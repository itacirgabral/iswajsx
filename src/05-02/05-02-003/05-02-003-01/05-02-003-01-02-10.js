function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.14.755L9.002 1.79 4.862 17.245.998 16.21 5.139.755z"
}));

export default SvgComponent;