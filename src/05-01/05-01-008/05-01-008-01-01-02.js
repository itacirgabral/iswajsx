function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 0L0 6v5l42-9V0zM33 10v1h5.5a3.5 3.5 0 110 7H30v2h8a5 5 0 100-10h-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M33.25 6.25L29 10.5l4.25 4.25.688-.719-3.5-3.531 3.5-3.531-.688-.719z"
}));

export default SvgComponent;