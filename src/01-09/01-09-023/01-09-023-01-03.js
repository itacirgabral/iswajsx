function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 11h15v15H9zM10 0a3 3 0 00-3 3c0 1.301.842 2.397 2 2.813V11h2V5.812c1.158-.415 2-1.51 2-2.812a3 3 0 00-3-3zM0 17v2h9v-2H0z"
}));

export default SvgComponent;