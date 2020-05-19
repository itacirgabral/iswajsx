function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 12A3.5 3.5 0 010 8.5C0 5.235 1.229 2.253 3.25 0l1.344 1.344a10.688 10.688 0 00-2.157 3.843A3.531 3.531 0 013.5 5a3.5 3.5 0 010 7z"
}));

export default SvgComponent;