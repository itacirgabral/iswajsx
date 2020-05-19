function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 12l7 7 7-7h-2l-5 5-5-5H0zM12 0C8.134 0 5 3.582 5 8c0 .745-.5 1.749-1 2.563V12h6v-1.438C9.5 9.75 9 8.745 9 8c0-3.314 1.343-6 3-6 2.21 0 4 3.582 4 8h1c0-5.523-2.239-10-5-10z"
}));

export default SvgComponent;