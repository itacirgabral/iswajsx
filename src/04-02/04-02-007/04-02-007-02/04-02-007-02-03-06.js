function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.94 3.575L7.11.747l-.706.707 2.828 2.828.707-.707zM8.525 4.99L5.697 2.16l-.707.707 2.828 2.829.707-.707zM5.697 7.818L2.868 4.99l-.707.707L4.99 8.525l.707-.707zM4.282 9.232L1.454 6.404l-.707.707 2.828 2.828.707-.707z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 6.757v-4.95l-.994.023-.022 3.91-4.221.023-.022 4.22-3.911.023-.022.994h4.95V6.757H11z"
}));

export default SvgComponent;