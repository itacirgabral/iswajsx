function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 7h13v15H12z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M14 9h5v11h-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 0L1.594 1.406 10 9.812V7L3 0zM0 19v2h10v-2H0z"
}));

export default SvgComponent;