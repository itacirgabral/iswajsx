function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0a5 5 0 015 5v2a5 5 0 01-5 5H0V9h12a3 3 0 003-3V4a3 3 0 00-3-3H3V0h9z"
}));

export default SvgComponent;