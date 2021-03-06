function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 5
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 2v1h7V2H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.5 5a2.5 2.5 0 110-5 2.5 2.5 0 110 5z"
}));

export default SvgComponent;