function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 7h15v15H15zM0 7h15v2H0zM12 0l-1.406 1.406L16.188 7H19l-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 4L3.875 6.125 15 17.25V13L6 4z"
}));

export default SvgComponent;