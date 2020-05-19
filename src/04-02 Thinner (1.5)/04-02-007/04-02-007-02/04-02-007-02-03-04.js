function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.06 3.575L3.89.747l.706.707-2.828 2.828-.707-.707zM2.475 4.99L5.303 2.16l.707.707-2.828 2.829-.707-.707zM5.303 7.818L8.132 4.99l.707.707L6.01 8.525l-.707-.707zM6.718 9.232l2.828-2.828.707.707-2.828 2.828-.707-.707z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 6.757v-4.95l.994.023.022 3.91 4.221.023.022 4.22 3.911.023.022.994h-4.95V6.757H0z"
}));

export default SvgComponent;