function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 20a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 24.25h9v1.5h-9zM8.938 15.438L6.094 18.28l.718.719 2.157-2.125L11.094 19l2.156-2.125L15.375 19l2.156-2.125L19.656 19l2.157-2.125L23.938 19l2.125-2.125L28.218 19l.718-.719-2.843-2.843-2.157 2.124-2.156-2.125-2.125 2.126-2.156-2.125-2.125 2.124-2.156-2.125-2.125 2.126-2.156-2.125z"
}));

export default SvgComponent;