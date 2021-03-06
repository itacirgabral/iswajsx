function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M39 2l-1.5 1.5v9h-9L27 14h12V2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 0a19.958 19.958 0 0114.156 5.844l1.532 1.468-1.376 1.375-1.593-1.406C27.46 4.024 22.97 2 18 2 13.03 2 8.539 4.024 5.281 7.281L1.406 11 0 9.594l3.844-3.75A19.958 19.958 0 0118 0z"
}));

export default SvgComponent;