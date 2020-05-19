function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.56 3.146l9.193 9.192-1.415 1.415L3.146 4.56zM6.974 0l11.259 6.5-1 1.732-11.259-6.5zM1.732 5.974l6.5 11.259-1.732 1L0 6.974z"
}));

export default SvgComponent;