function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 8H0v4h42V8zM12 0v6h6V5h-5V0h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 0a10.089 10.089 0 00-7.156 2.969L14 3.313l.75.687.313-.313C16.712 2.038 18.98 1 21.5 1c2.52 0 4.786 1.036 6.438 2.688L29.28 5 30 4.281 28.656 2.97A10.089 10.089 0 0021.5 0z"
}));

export default SvgComponent;