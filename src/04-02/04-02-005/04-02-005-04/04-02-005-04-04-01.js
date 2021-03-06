function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 0C2.015 0 0 1.79 0 4h1c0-1.105 1.567-2 3.5-2S8 2.895 8 4h1c0-2.21-2.015-4-4.5-4zM16.5 0C14.015 0 12 1.79 12 4h1c0-1.105 1.567-2 3.5-2s3.5.895 3.5 2h1c0-2.21-2.015-4-4.5-4zM4.5 10C2.015 10 0 8.21 0 6h1c0 1.105 1.567 2 3.5 2S8 7.105 8 6h1c0 2.21-2.015 4-4.5 4zM16.5 10C14.015 10 12 8.21 12 6h1c0 1.105 1.567 2 3.5 2S20 7.105 20 6h1c0 2.21-2.015 4-4.5 4z"
}));

export default SvgComponent;