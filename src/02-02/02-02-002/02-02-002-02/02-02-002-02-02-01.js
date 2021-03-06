function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 0a3 3 0 100 6 3 3 0 000-6zM11 0a3 3 0 100 6 3 3 0 000-6zM19 0a3 3 0 100 6 3 3 0 000-6z"
}));

export default SvgComponent;