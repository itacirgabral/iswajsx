function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 3
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.545.09C0 .09 0 3 0 3h1.455s0-1.455 1.09-1.455C3.636 1.545 3.636 3 5.455 3 8 3 8 .09 8 .09H6.545s0 1.455-1.09 1.455c-1.091 0-1.091-1.454-2.91-1.454z"
}));

export default SvgComponent;