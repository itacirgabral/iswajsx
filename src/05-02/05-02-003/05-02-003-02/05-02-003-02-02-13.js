function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.196 3.732l-2-3.464-10.392 6 2 3.464 10.392-6z"
}));

export default SvgComponent;