function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 5.657L20.506 21.92l1.414-1.414L5.657 4.243 4.243 5.657zM7 12l-5.5 5.5L7 23V12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.9 0L0 9.9V0h9.9zM18 7c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10V5h1v2z"
}));

export default SvgComponent;