function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.156 0C7.208 1.562 7.68 3.665 8.97 5.125c.648.734 2.375 1.719 2.375 1.719C12.319 7.339 13 8.33 13 9.5s-.681 2.161-1.656 2.656c0 0-1.727.985-2.375 1.719C7.679 15.335 7.08 17.38 6.156 19 2.542 17.34 0 13.737 0 9.5S2.542 1.66 6.156 0zm-.593 2.594C3.41 4.138 2 6.649 2 9.5s1.41 5.362 3.563 6.906c.651-1.066 1.333-2.291 2.28-3.187.881-.832 3.063-1.938 3.063-1.938A1.993 1.993 0 0012 9.5c0-.78-.444-1.451-1.094-1.781 0 0-2.182-1.106-3.062-1.938-.948-.896-1.62-2.128-2.282-3.187z"
}));

export default SvgComponent;