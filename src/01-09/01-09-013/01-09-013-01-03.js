function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 15h8v15H9zM4 15c-3 0-3 3-3 3v5h2v-3c0-1 1-1 1-1h5v-4H4zM10 0h1v15h-1zM13 2h1v13h-1zM16 4h1v11h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.375 11.781l-.875.5L9 27v-2L1.375 11.781z"
}));

export default SvgComponent;