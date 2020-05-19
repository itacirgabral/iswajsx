function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.063 0l3 3C5.647 4.585 8.09 5 10.5 5s4.852-.416 6.438-2l.53-.531 1.063 1.062L16.5 5.5a8.45 8.45 0 01-6 2.5c-2.344 0-4.459-.968-6-2.5L0 1.062 1.063 0z"
}));

export default SvgComponent;