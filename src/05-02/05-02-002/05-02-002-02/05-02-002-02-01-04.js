function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.393.98L.98 2.393 23.607 25.02l1.414-1.414L2.393.979z"
}));

export default SvgComponent;