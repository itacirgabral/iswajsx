function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8v2h17V8H0zM17 11L0 15.563.5 17.5l17.031-4.563L17 11zM.5.5L0 2.438 17 7l.531-1.938L.5.5z"
}));

export default SvgComponent;