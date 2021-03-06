function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27 0v6h-6V5h5V0h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0c2.9 0 5.537 1.162 7.438 3.063l-.72.718A9.472 9.472 0 0017.5 1c-2.623 0-5 1.062-6.719 2.781L9.687 4.875 9 4.156l1.063-1.062C11.963 1.194 14.6 0 17.5 0zM17.5 7C7.835 7 0 14.835 0 24.5S7.835 42 17.5 42 35 34.165 35 24.5 27.165 7 17.5 7zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}));

export default SvgComponent;