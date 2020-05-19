function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 12h15v13H6zM1.625 2.813L.219 4.218 6 10h2.813L1.625 2.812zM5.094.094L3.687 1.5l8.5 8.5H15L5.094.094zM11.094.094L9.688 1.5l8.5 8.5H21L11.094.094z"
}));

export default SvgComponent;