function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 12A3.5 3.5 0 007 8.5C7 5.235 5.771 2.253 3.75 0L2.406 1.344a10.688 10.688 0 012.156 3.843A3.531 3.531 0 003.5 5a3.5 3.5 0 000 7z"
}));

export default SvgComponent;