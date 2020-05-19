function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 8.636V15h-6.364L18 8.636zM1.03 1.565a3 3 0 014.242 0l7.071 7.071c1.054 1.054 4.243 1.414 4.243 1.414l-3.536 3.536s-.36-3.189-1.414-4.243l-7.071-7.07A2 2 0 001.737 5.1l2.828 2.828-.707.707-2.829-2.828a3 3 0 010-4.243z"
}));

export default SvgComponent;