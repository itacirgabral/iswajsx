function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 22a8 8 0 11-16 0 8 8 0 1116 0zM8 0h2v14H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.313 4.688L10 14h2.813l7.906-7.906-1.407-1.407zM1.938 15.094L.5 16.5 7 23v-2.813l-5.063-5.093z"
}));

export default SvgComponent;