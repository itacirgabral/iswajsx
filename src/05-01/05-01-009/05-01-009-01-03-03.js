function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 46
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.188 12.188C4.643 14.72 0 21.062 0 28.5 0 38.165 7.835 46 17.5 46S35 38.165 35 28.5c0-7.438-4.643-13.78-11.188-16.313l-.5 1.407C29.27 15.923 33.5 21.719 33.5 28.5c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-6.781 4.231-12.577 10.188-14.906l-.5-1.406zM23.5 3a3 3 0 11-6 0 3 3 0 016 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 3.75v-1.5h-7v1.5h7zM11.5 9a3 3 0 106 0 3 3 0 00-6 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 9.75v-1.5h7v1.5h-7z"
}));

export default SvgComponent;