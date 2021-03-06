function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 2.1V12H8.1l1.415-1.414h7.07V3.515L18 2.1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.03 2.1c2.733-2.733 7.482-2.417 10.606.708.527.527 1.59.883 2.52 1.104l1.016 1.017-4.243 4.243-1.017-1.017c-.221-.929-.577-1.992-1.104-2.519-2.344-2.343-5.193-3.293-6.364-2.121C.882 5.077 2.148 8.875 5.272 12l-.707.707C.66 8.802-.923 4.053 1.029 2.101z"
}));

export default SvgComponent;