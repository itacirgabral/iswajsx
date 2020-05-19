function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.415.425l12.5 21.65-4.33 2.5-12.5-21.65 4.33-2.5z"
}));

export default SvgComponent;