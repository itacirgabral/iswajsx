function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.644 1.866l1-1.732 27.712 16-1 1.732-27.712-16z"
}));

export default SvgComponent;