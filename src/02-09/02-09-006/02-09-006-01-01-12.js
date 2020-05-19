function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0H8v34h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0H9v34h3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0h-1v34h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 3a5 5 0 015 5v2a5 5 0 01-5 5H6v-3h8a3 3 0 003-3V7a3 3 0 00-3-3V3zM6 8v11L.5 13.5 6 8zM14 16a5 5 0 015 5v2a5 5 0 01-5 5H6v-3h8a3 3 0 003-3v-2a3 3 0 00-3-3v-1zM6 21v11L.5 26.5 6 21z"
}));

export default SvgComponent;