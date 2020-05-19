function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20.665 3.394l-4.33-2.5-16 27.712 4.33 2.5 16-27.712z"
}));

export default SvgComponent;