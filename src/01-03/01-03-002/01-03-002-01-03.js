function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 22a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 0h2v22H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.313 4.688L8 16l1.813 1L20.718 6.094l-1.407-1.407zM1.938 15.094L.5 16.5 9 25v-2.813l-7.063-7.093z"
}));

export default SvgComponent;