function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 17l-4.5 4.5L1 17h1l3.5 3.5L9 17h1zM3 0a3 3 0 013 3v10c0 1.49 2 4 2 4H3s2-2.51 2-4V3a2 2 0 10-4 0v4H0V3a3 3 0 013-3z"
}));

export default SvgComponent;