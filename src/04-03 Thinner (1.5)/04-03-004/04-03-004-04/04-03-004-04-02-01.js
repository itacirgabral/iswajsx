function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.75 1v12h1.5V1h-1.5zM9.5 0L8.78.719 11.562 3.5 8.062 7l3.5 3.5-2.78 2.781L9.5 14l3.5-3.5L9.5 7 13 3.5 9.5 0zM3.5 0l.719.719L1.438 3.5l3.5 3.5-3.5 3.5 2.78 2.781L3.5 14 0 10.5 3.5 7 0 3.5 3.5 0z"
}));

export default SvgComponent;