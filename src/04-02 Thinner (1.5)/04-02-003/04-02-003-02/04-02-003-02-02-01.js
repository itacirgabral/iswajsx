function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5.25v1.5h5v-1.5H0zm16 0v1.5h5v-1.5h-5zM9.75.5v4.188L6.125 2.594l-.75 1.312L9 6 5.375 8.094l.75 1.312L9.75 7.312V11.5h1.5V7.312l3.625 2.094.75-1.312L12 6l3.625-2.094-.75-1.312-3.625 2.094V.5h-1.5z"
}));

export default SvgComponent;