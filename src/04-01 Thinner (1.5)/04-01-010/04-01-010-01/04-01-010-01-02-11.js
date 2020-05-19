function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7h42v4H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M38 0h4v17h-4z"
}));

export default SvgComponent;