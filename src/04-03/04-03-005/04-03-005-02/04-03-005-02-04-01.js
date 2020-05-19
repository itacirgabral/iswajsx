function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 47,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8v2h17V8H0zM17 11L0 15.563.5 17.5l17.031-4.563L17 11zM.5.5L0 2.438 17 7l.531-1.938L.5.5zM47 8v2H30V8h17zM30 11l17 4.563-.5 1.937-17.031-4.563L30 11zM46.5.5l.5 1.938L30 7l-.531-1.938L46.5.5z"
}));

export default SvgComponent;