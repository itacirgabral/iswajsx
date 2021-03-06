function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.626 8.406C.948 11.164.244 14.312 0 17.5c-.038 3.255 1.063 6.295 2.625 9.094C7.006 25.952 9 21.202 9 17.5c0-3.702-2.161-8.29-6.374-9.094zm.78 1.688C5.802 11.274 7.5 14.132 7.5 17.5c0 3.368-1.699 6.227-4.093 7.406C2.23 22.68 1.5 20.194 1.5 17.5s.73-5.179 1.906-7.406z"
}));

export default SvgComponent;