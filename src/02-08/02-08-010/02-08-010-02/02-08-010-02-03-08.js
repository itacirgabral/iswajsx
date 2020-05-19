function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M30 0v11.314l-1.414-1.415V1.414H20.1L18.686 0H30z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.05 6.364L10.908 20.506a4 4 0 01-5.657 0l-2.828-2.828a8 8 0 010-11.314l7.07 7.071-2.12 2.121c-1.172 1.172-1.489 2.755-.708 3.536a2 2 0 002.829 0l5.347-5.348c-.66-.176-1.293-.498-1.812-1.016a4 4 0 115.657-5.657c.519.518.84 1.152 1.017 1.812l3.933-3.933 1.414 1.414zm-7.778 2.121a2 2 0 10-2.828 2.829 2 2 0 002.828-2.829z"
}));

export default SvgComponent;