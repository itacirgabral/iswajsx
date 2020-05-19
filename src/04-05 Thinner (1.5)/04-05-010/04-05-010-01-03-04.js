function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6V1h1v4h4v1H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.594.719L1.75 3.53l.719.719L5.28 1.406 4.594.72z"
}));

export default SvgComponent;