function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.344.5L7.812 4H19v2H7L4.344 3.344 1.687 6 .282 4.594 4.344.5z"
}));

export default SvgComponent;