function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 3.25C5.789 1.23 8.043 0 10.5 0s4.711 1.23 6.5 3.25l-1.5 1.281C14.093 2.954 12.378 2 10.5 2c-1.878 0-3.593.954-5 2.531L4 3.25zM4 0a4 4 0 100 8V7C2.895 7 2 5.657 2 4s.895-3 2-3V0zM17 0v1c1.105 0 2 1.343 2 3s-.895 3-2 3v1a4 4 0 100-8z"
}));

export default SvgComponent;