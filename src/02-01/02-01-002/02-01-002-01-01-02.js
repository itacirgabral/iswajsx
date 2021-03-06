function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.75 8v4.188l-3.625-2.094-.75 1.312L4 13.5.375 15.594l.75 1.312 3.625-2.093V19h1.5v-4.188l3.625 2.094.75-1.312L7 13.5l3.625-2.094-.75-1.312-3.625 2.094V8h-1.5zM13.75 0v4.188l-3.625-2.094-.75 1.312L13 5.5 9.375 7.594l.75 1.312 3.625-2.094V11h1.5V6.812l3.625 2.094.75-1.312L16 5.5l3.625-2.094-.75-1.312-3.625 2.094V0h-1.5z"
}));

export default SvgComponent;