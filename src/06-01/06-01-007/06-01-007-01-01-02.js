function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v22l15 15 1.406-1.406L9 21.187V5h22V0H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v4H3v2.125C1.77 6.402.722 7.182 0 8.25v3.25C0 9.015 1.79 7 4 7V5h1v13H4v-2c-2.21 0-4-2.015-4-4.5v3.25c.722 1.068 1.77 1.848 3 2.125V19h3v3.438L20.594 37H22L7 22V0H6zm16 37h1.438l1.406-1.406L10 20.75V6h21V5H9v16.188l14.406 14.406L22 37zM4 8.5c-1.38 0-2.5 1.343-2.5 3s1.12 3 2.5 3v-6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 5v2c-2.21 0-4 2.015-4 4.5S1.79 16 4 16v2h1V5H4zm0 3.5v6c-1.38 0-2.5-1.343-2.5-3s1.12-3 2.5-3z"
}));

export default SvgComponent;