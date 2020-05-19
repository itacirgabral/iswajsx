function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.732 2.072l-3.464-2-8 13.856 3.464 2 8-13.856z"
}));

export default SvgComponent;