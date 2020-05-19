function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.964.531l4.141 15.455 1.932-.517L2.896.014.964.53z"
}));

export default SvgComponent;