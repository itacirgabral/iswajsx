function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.94 7.425l-2.83 2.828-.706-.707 2.828-2.829.707.708zM8.525 6.01L5.697 8.84l-.707-.707 2.828-2.829.707.707zM5.697 3.182L2.868 6.01l-.707-.707L4.99 2.475l.707.707zM4.282 1.768L1.454 4.596.747 3.89l2.828-2.828.707.707z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 4.243v4.95l-.994-.023-.022-3.91-4.221-.023-.022-4.22L1.83.993 1.808 0h4.95v4.243H11z"
}));

export default SvgComponent;