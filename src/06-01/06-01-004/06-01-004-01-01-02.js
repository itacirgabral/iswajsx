function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h43v2H0V0zM20 4v3.156c-3.033.662-5.412 3.28-5.906 6.563C12.964 12.096 10.887 11 8.5 11 4.91 11 2 13.462 2 16.5S4.91 22 8.5 22c2.851 0 5.28-1.558 6.156-3.719C15.83 21.068 18.451 23 21.5 23c3.049 0 5.671-1.932 6.844-4.719C29.22 20.442 31.649 22 34.5 22c3.59 0 6.5-2.462 6.5-5.5S38.09 11 34.5 11c-2.387 0-4.464 1.096-5.594 2.719-.494-3.283-2.873-5.9-5.906-6.563V4h-3zM8.5 13.5c2.21 0 4 1.343 4 3s-1.79 3-4 3-4-1.343-4-3 1.79-3 4-3zm26 0c2.21 0 4 1.343 4 3s-1.79 3-4 3-4-1.343-4-3 1.79-3 4-3z"
}));

export default SvgComponent;