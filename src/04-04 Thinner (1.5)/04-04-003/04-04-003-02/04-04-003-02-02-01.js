function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.125 4.188L4 3.25C5.789 1.231 8.043 0 10.5 0s4.711 1.231 6.5 3.25l-1.125.938C14.591 2.54 12.66 1.5 10.5 1.5S6.41 2.54 5.125 4.188zM17 8a4 4 0 100-8v1c1.38 0 2.5 1.343 2.5 3S18.38 7 17 7v1zM4 8V7C2.62 7 1.5 5.657 1.5 4S2.62 1 4 1V0a4 4 0 100 8z"
}));

export default SvgComponent;