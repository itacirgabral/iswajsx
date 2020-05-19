function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8h42v4H0V8zM30 0v6h-6V5h5V0h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.5 0c2.796 0 5.324 1.136 7.156 2.969l.344.344-.75.687-.313-.313C25.288 2.038 23.02 1 20.5 1c-2.52 0-4.786 1.036-6.438 2.688L12.72 5 12 4.281l1.344-1.312A10.089 10.089 0 0120.5 0z"
}));

export default SvgComponent;