function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.125 6C2.041 2.37 5.072 0 8.5 0s6.459 2.37 8.375 6H.125zm2.656-1.5H14.22c-1.376-1.837-3.425-3-5.719-3-2.294 0-4.343 1.163-5.719 3z"
}));

export default SvgComponent;