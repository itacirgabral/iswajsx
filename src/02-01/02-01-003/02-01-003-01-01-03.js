function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 18.75h15v-1.5H0v1.5zM6.75 4v4.188L3.125 6.094l-.75 1.312L6 9.5l-3.625 2.094.75 1.312 3.625-2.094V15h1.5v-4.188l3.625 2.094.75-1.312L9 9.5l3.625-2.094-.75-1.312L8.25 8.187V4h-1.5zM0 1.75h15V.25H0v1.5z"
}));

export default SvgComponent;