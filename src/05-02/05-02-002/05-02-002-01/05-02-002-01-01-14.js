function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24.315.799L.167 7.269l.518 1.932 24.148-6.47-.518-1.932z"
}));

export default SvgComponent;