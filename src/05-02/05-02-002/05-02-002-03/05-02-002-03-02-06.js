function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.829.409L.534 5.239 39.171 15.59l1.295-4.83L1.829.41z"
}));

export default SvgComponent;