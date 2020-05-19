function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.866 1.036l-1.732-1-4 6.928 1.732 1 4-6.928z"
}));

export default SvgComponent;