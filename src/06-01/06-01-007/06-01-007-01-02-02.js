function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v29l16.25-16.25-1.406-1.438L9 24.188V5h22V0H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v19H3v2.125c-1.23.277-2.278 1.057-3 2.125v3.25C0 24.015 1.79 22 4 22v-2h1v13h1v-1.563L24.688 12.75l-2.844-2.844L10 21.75V6h21V5H9v19.156l12.844-12.843 1.406 1.437L7 29V0H6zM0 26.5v3.25c.722 1.068 1.77 1.848 3 2.125V33h1v-2c-2.21 0-4-2.015-4-4.5zm4-3c-1.38 0-2.5 1.343-2.5 3s1.12 3 2.5 3v-6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 20v2c-2.21 0-4 2.015-4 4.5S1.79 31 4 31v2h1V20H4zm0 3.5v6c-1.38 0-2.5-1.343-2.5-3s1.12-3 2.5-3z"
}));

export default SvgComponent;