function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 32.156c.4.27.852.483 1.313.688 1.188.544 2.843 1.27 3.812 2.125.734.648 1.719 2.375 1.719 2.375C15.339 38.319 16.33 39 17.5 39s2.161-.681 2.656-1.656c0 0 .985-1.727 1.719-2.375.964-.851 2.63-1.615 3.813-2.157.453-.21.903-.422 1.312-.656C25.34 28.542 21.737 26 17.5 26S9.66 28.542 8 32.156zm2-.562c1.602-2.453 4.351-4.094 7.5-4.094 3.141 0 5.894 1.622 7.5 4.063-1.348.693-3.157 1.62-3.781 2.28-.832.881-1.938 3.063-1.938 3.063A1.993 1.993 0 0117.5 38c-.78 0-1.451-.444-1.781-1.094 0 0-1.106-2.182-1.938-3.062-.622-.658-2.434-1.556-3.781-2.25z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5c0 6.155 3.195 11.537 8 14.656.206-.449.517-.837.781-1.25C4.408 28.05 1.5 23.113 1.5 17.5c0-8.837 7.163-16 16-16s16 7.163 16 16c0 5.613-2.908 10.55-7.281 13.406.264.413.575.801.781 1.25 4.805-3.12 8-8.5 8-14.656C35 7.835 27.165 0 17.5 0z"
}));

export default SvgComponent;