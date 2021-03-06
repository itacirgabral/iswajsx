function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.06 7.425l2.83 2.828.706-.707-2.828-2.828-.707.707zM2.475 6.01L5.303 8.84l.707-.707-2.828-2.829-.707.707zM5.303 3.182L8.132 6.01l.707-.707L6.01 2.475l-.707.707zM6.718 1.768l2.828 2.828.707-.707-2.828-2.828-.707.707z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4.243v4.95l.994-.023.022-3.91 4.221-.023.022-4.22L9.17.993 9.192 0h-4.95v4.243H0z"
}));

export default SvgComponent;