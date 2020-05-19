function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0v6h-6V5h5V0h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 0c2.796 0 5.324 1.136 7.156 2.969l.344.344-.75.687-.313-.313C13.287 2.038 11.02 1 8.5 1 5.98 1 3.714 2.036 2.062 3.688L.72 5 0 4.281 1.344 2.97A10.089 10.089 0 018.5 0z"
}));

export default SvgComponent;