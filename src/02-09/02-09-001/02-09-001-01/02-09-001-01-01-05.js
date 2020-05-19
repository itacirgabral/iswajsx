function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22 8l-8-8h8v8zM1.063 1l3 3C5.647 5.585 8.09 6 10.5 6s4.852-.416 6.438-2l.53-.531 1.063 1.062L16.5 6.5a8.45 8.45 0 01-6 2.5c-2.344 0-4.459-.968-6-2.5L0 2.062 1.063 1z"
}));

export default SvgComponent;