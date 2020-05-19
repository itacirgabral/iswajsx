function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.732 2.804l-3.464-2-6 10.392 3.464 2 6-10.392z"
}));

export default SvgComponent;