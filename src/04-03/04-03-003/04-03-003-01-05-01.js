function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0c.966 0 1.881.208 2.719.563C8.659 2.66 8 4.99 8 7.5c0 2.14.434 4.177 1.219 6.031C8.51 13.772 7.789 14 7 14A7 7 0 017 0zm-.125 2A5.005 5.005 0 002 7c0 2.621 2.027 4.757 4.594 4.969A17.537 17.537 0 016 7.5c0-1.917.305-3.774.875-5.5z"
}));

export default SvgComponent;