function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 22a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 16a6 6 0 000 12V16z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.406 2.406L7.97 3.812l10.031 10v1.938a8.055 8.055 0 012 2.375V13L9.406 2.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v14.063a8.016 8.016 0 012 0V0h-2zM1.406 9.594L0 11l6.438 6.438a8.07 8.07 0 011.343-1.5L1.406 9.593z"
}));

export default SvgComponent;