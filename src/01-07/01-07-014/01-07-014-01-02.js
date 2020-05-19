function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 18a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 12a6 6 0 000 12V12z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0h2v13H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 6.406L0 7.813l6.844 6.843a6.971 6.971 0 011.218-1.594L1.407 6.407z"
}));

export default SvgComponent;