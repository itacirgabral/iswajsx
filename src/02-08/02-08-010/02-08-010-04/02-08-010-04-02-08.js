function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M36 0v11.314L24.686 0H36zm-1.016 1.016h-7.867l7.867 7.867V1.016z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M31.05 6.364L11.251 26.163a4 4 0 01-5.657 0l-2.828-2.828a8 8 0 010-11.314l7.071 7.07-2.121 2.122c-1.172 1.172-1.488 2.755-.707 3.536a2 2 0 002.828 0l4.64-4.64c-.66-.177-1.293-.499-1.812-1.017a4 4 0 115.657-5.657c.519.518.84 1.152 1.017 1.812l2.21-2.21c-.66-.176-1.294-.498-1.812-1.016a4 4 0 115.656-5.657c.519.518.84 1.152 1.017 1.812l3.226-3.226 1.414 1.414zm-7.07 1.414a2 2 0 10-2.83 2.829 2 2 0 002.83-2.829zm-7.072 7.071a2 2 0 10-2.828 2.829 2 2 0 002.828-2.829z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M34.984 1.016v7.867l-7.867-7.867h7.867z",
  fill: "#fff"
}));

export default SvgComponent;