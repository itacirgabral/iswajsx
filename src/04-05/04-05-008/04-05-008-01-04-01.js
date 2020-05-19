function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v3H0v2h4v3h1V5h2v3h1V5h2v3h1V5h4V3h-4V0h-1v3H8V0H7v3H5V0H4z"
}));

export default SvgComponent;