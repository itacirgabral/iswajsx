function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 15L0 8h2.719l4.219 4.25L11.188 8H14l-7 7zM6 8h2V1H6v7zM20 0l-7 7h2.719l4.219-4.25L24.188 7H27l-7-7zM19 7h2v7h-2V7zM0 17v2h27v-2H0z"
}));

export default SvgComponent;