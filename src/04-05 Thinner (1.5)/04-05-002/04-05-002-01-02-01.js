function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 0C15.345 0 9.963 3.195 6.844 8c-.27.4-.483.852-.688 1.313-.544 1.188-1.27 2.843-2.125 3.812-.648.734-2.375 1.719-2.375 1.719C.681 15.339 0 16.33 0 17.5s.681 2.161 1.656 2.656c0 0 1.727.985 2.375 1.719.851.964 1.615 2.63 2.157 3.813.21.453.422.903.656 1.312 3.12 4.805 8.5 8 14.656 8C31.165 35 39 27.165 39 17.5S31.165 0 21.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16a16.021 16.021 0 01-13.375-7.188L7.437 25c-.693-1.348-1.62-3.157-2.28-3.781-.881-.832-3.063-1.938-3.063-1.938A1.993 1.993 0 011 17.5c0-.78.444-1.451 1.094-1.781 0 0 2.182-1.106 3.062-1.938.658-.622 1.556-2.434 2.25-3.781l.719-1.313A16.021 16.021 0 0121.5 1.5z"
}));

export default SvgComponent;