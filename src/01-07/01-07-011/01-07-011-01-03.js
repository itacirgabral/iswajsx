function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7h15v15H0zM15 0l1.406 1.406L10.813 7H8l7-7z"
}));

export default SvgComponent;