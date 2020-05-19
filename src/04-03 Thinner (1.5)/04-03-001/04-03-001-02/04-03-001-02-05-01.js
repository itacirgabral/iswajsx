function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.374.406C2.762 1.322 0 4.936 0 9.5c0 4.563 2.762 8.178 6.374 9.094C8.094 15.84 8.834 12.714 9 9.5 9.037 6.245 7.936 3.205 6.374.406zm-.718 1.781C6.923 4.453 7.369 6.942 7.499 9.5c.049 2.6-.752 4.999-1.843 7.313C3.23 15.677 1.5 12.889 1.5 9.5s1.73-6.177 4.156-7.313z"
}));

export default SvgComponent;