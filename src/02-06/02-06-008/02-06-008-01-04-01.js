function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3v8h8L0 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 0c-2.623 0-5 1.062-6.719 2.781l-2.5 2.5L3 6l2.5-2.5a8.458 8.458 0 016-2.5c2.347 0 4.462.962 6 2.5l3.813 3.781.687-.687-3.781-3.813A9.472 9.472 0 0011.5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 1a8.458 8.458 0 00-6 2.5L3 6l2.125 2.125 2.5-2.5C8.62 4.63 9.981 4 11.5 4c1.519 0 2.88.63 3.875 1.625l3.813 3.781 2.125-2.125L17.5 3.5a8.458 8.458 0 00-6-2.5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 4c-1.519 0-2.88.63-3.875 1.625l-2.5 2.5.688.688 2.5-2.5A4.494 4.494 0 0111.5 5c1.243 0 2.373.498 3.188 1.313l3.78 3.812.72-.719-3.813-3.781C14.38 4.63 13.019 4 11.5 4z"
}));

export default SvgComponent;