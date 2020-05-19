function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 0A3.5 3.5 0 017 3.5C7 6.765 5.771 9.747 3.75 12l-1.344-1.344a10.688 10.688 0 002.156-3.844A3.531 3.531 0 013.5 7a3.5 3.5 0 010-7z"
}));

export default SvgComponent;