function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 14a8 8 0 110 16 8 8 0 010-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0v14.25A8.054 8.054 0 008 14V0h2zM17 3l1.781.906-5.968 11.719a7.887 7.887 0 00-1.72-1L17 3zM21 10l1.406 1.406-7.187 7.188c-.295-.625-.623-1.227-1.063-1.75L21 10z"
}));

export default SvgComponent;