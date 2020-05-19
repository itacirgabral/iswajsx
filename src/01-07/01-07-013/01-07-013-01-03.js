function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 11h15v15H0zM13 0v11h-2V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.375 4.625l1.406 1.438L15 11.813V11h-2l6.375-6.375z"
}));

export default SvgComponent;