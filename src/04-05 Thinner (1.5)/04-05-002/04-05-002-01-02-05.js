function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35c6.155 0 11.537-3.195 14.656-8 .27-.4.48-.854.688-1.313.54-1.19 1.27-2.843 2.125-3.812.648-.734 2.375-1.719 2.375-1.719C38.319 19.661 39 18.67 39 17.5s-.681-2.161-1.656-2.656c0 0-1.727-.985-2.375-1.719-.851-.964-1.615-2.63-2.157-3.813-.21-.453-.422-.903-.656-1.312-3.12-4.805-8.5-8-14.656-8zm0 1.5c5.58 0 10.512 2.857 13.375 7.188L31.563 10c.693 1.348 1.62 3.157 2.28 3.781.881.832 3.063 1.938 3.063 1.938A1.993 1.993 0 0138 17.5c0 .78-.444 1.451-1.094 1.781 0 0-2.182 1.106-3.062 1.938-.658.622-1.523 2.452-2.25 3.781l-.719 1.313A16.021 16.021 0 0117.5 33.5c-8.837 0-16-7.163-16-16s7.163-16 16-16z"
}));

export default SvgComponent;