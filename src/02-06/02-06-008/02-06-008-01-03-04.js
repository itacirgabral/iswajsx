function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 5.5v2l5 5-5 5v2l7-7-7-7zM9 5.5c0 1.407.551 2.801 1.625 3.875A5.467 5.467 0 0014.5 11H16v-1h-1.5a4.493 4.493 0 01-3.188-1.313A4.493 4.493 0 0110 5.5V0H9v5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 5.5c0 2.175.84 4.34 2.5 6a8.462 8.462 0 006 2.5H16v-3h-1.5a5.467 5.467 0 01-3.875-1.625A5.467 5.467 0 019 5.5V0H6v5.5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 19.281L.719 20 20 .719 19.281 0 0 19.281z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 5.5c0 2.43.927 4.864 2.781 6.719A9.473 9.473 0 0014.5 15H16v-1h-1.5c-2.175 0-4.34-.84-6-2.5a8.462 8.462 0 01-2.5-6V0H5v5.5z"
}));

export default SvgComponent;