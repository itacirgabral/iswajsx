function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 4h15v15H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 0C0 0 0 4 0 4v2h2V4c0-2 2-2 2-2h2c2 0 2 2 2 2h1.906C10 0 6 0 6 0H4zM0 13v2c0 4 4 4 4 4h4v-2H4c-2 0-2-2-2-2v-2H0z"
}));

export default SvgComponent;