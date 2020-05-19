function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3.25v1.5h10v-1.5H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v1h2c1.38 0 2.5 1.343 2.5 3S12.38 7 11 7H9v1h2a4 4 0 100-8H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 4a2 2 0 11-4 0 2 2 0 114 0z"
}));

export default SvgComponent;