function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.779 5.68l24.148 6.47 1.294-4.83L2.073.85.78 5.68z"
}));

export default SvgComponent;