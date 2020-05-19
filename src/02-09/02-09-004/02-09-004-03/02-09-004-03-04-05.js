function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 44,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 0A8.5 8.5 0 0013 8.5v4c0 1.933-2.462 3.5-5.5 3.5S2 14.433 2 12.5V2H0v10.5a7.5 7.5 0 1015 0v-4a6.5 6.5 0 1113 0V12a8 8 0 1016 0V6h-2v6c0 2.21-2.686 4-6 4s-6-1.79-6-4V8.5A8.5 8.5 0 0021.5 0z"
}));

export default SvgComponent;