function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6.156c.4.27.852.483 1.313.688 1.188.544 2.843 1.27 3.812 2.125.734.648 1.719 2.375 1.719 2.375C7.339 12.319 8.33 13 9.5 13s2.161-.681 2.656-1.656c0 0 .985-1.727 1.719-2.375.964-.851 2.63-1.615 3.813-2.156.453-.21.903-.423 1.312-.657C17.34 2.542 13.737 0 9.5 0S1.66 2.542 0 6.156zm2-.562C3.602 3.14 6.351 1.5 9.5 1.5c3.141 0 5.894 1.622 7.5 4.063-1.348.693-3.157 1.62-3.781 2.28-.832.881-1.938 3.063-1.938 3.063A1.993 1.993 0 019.5 12c-.78 0-1.451-.444-1.781-1.094 0 0-1.106-2.182-1.938-3.062C5.16 7.186 3.347 6.288 2 5.594z"
}));

export default SvgComponent;