function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 44,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22.5 0A8.5 8.5 0 0131 8.5v4c0 1.933 2.462 3.5 5.5 3.5s5.5-1.567 5.5-3.5V2h2v10.5a7.5 7.5 0 11-15 0v-4a6.5 6.5 0 10-13 0V12a8 8 0 11-16 0V6h2v6c0 2.21 2.686 4 6 4s6-1.79 6-4V8.5A8.5 8.5 0 0122.5 0z"
}));

export default SvgComponent;