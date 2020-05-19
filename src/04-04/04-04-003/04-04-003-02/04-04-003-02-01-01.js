function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 26.531L11 25.25c1.789-2.02 4.043-3.25 6.5-3.25s4.711 1.23 6.5 3.25l-1.5 1.281C21.093 24.954 19.378 24 17.5 24c-1.878 0-3.593.954-5 2.531zM11 22a4 4 0 100 8v-1c-1.105 0-2-1.343-2-3s.895-3 2-3v-1zM24 22v1c1.105 0 2 1.343 2 3s-.895 3-2 3v1a4 4 0 100-8z"
}));

export default SvgComponent;