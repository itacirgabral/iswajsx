function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 2l1.5 1.5v9h9L12 14H0V2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0A19.958 19.958 0 006.844 5.844L5.312 7.312l1.375 1.375 1.594-1.406C11.54 4.024 16.03 2 21 2c4.97 0 9.461 2.024 12.719 5.281L37.594 11 39 9.594l-3.844-3.75A19.958 19.958 0 0021 0z"
}));

export default SvgComponent;