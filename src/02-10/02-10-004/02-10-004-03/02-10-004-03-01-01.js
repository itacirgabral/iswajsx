function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 20h11l-5.5-5.5L4 20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 0C2.015 0 0 3.806 0 8.5v23C0 36.194 2.015 40 4.5 40h2c2.485 0 5.5-3.806 5.5-8.5V27H7v4.5C7 35.642 5.88 38 4.5 38S2 35.642 2 31.5v-23C2 4.358 3.12 2 4.5 2S7 4.358 7 8.5v5h5v-5C12 3.806 8.985 0 6.5 0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 26h11l-5.5-5.5L4 26z"
}));

export default SvgComponent;