function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 0A19.958 19.958 0 001.844 5.844L.312 7.312l1.375 1.375 1.594-1.406C6.54 4.024 11.03 2 16 2c4.97 0 9.461 2.024 12.719 5.281L32.594 11 34 9.594l-3.844-3.75A19.958 19.958 0 0016 0z"
}));

export default SvgComponent;