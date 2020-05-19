function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 5H.636L7 11.364V5zm-.685.685l-.022 4-3.978-3.978 4-.022z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.142.05L9.122 12.071c-1.172 1.172-2.755 1.488-3.536.707a2 2 0 010-2.828L2.05 6.414a4 4 0 000 5.657l.707.707a5 5 0 007.071 0L21.85.758 21.142.05z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.315 5.685l-4 .022 3.978 3.978.022-4z",
  fill: "#fff"
}));

export default SvgComponent;