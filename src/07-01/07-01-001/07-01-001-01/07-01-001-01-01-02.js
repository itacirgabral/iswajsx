function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 58
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.666 57.991L57.992 5.665l-1.414-1.414L4.252 56.577l1.414 1.414zM1.423 53.749L53.75 1.423 52.335.009.009 52.335l1.414 1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.252 56.577L56.578 4.251l-2.829-2.828L1.423 53.749l2.829 2.828z",
  fill: "#fff"
}));

export default SvgComponent;