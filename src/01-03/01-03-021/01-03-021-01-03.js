function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 11h15v15H10zM4.938 3.094L3.5 4.5 10 11h2.813L4.936 3.094z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.094.281L5.687 1.687 15 11h2.813L7.092.281zM0 18h10v2H0z"
}));

export default SvgComponent;