function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6V1h1v4h4v1H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.05 2.828L3.88 0l.707.707-2.829 2.829-.707-.708zM2.465 4.243l2.828-2.829.707.707L3.172 4.95l-.707-.707zM11 3v5h-1V4H6V3h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.95 6.172L7.122 9l-.708-.707 2.83-2.829.706.708zM8.536 4.757L5.707 7.586 5 6.879 7.83 4.05l.707.707z"
}));

export default SvgComponent;