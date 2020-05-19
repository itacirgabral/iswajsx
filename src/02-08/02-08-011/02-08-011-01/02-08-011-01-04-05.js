function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 0a6 6 0 00-6 6c0 1.657.664 3.164 1.75 4.25l5.094 4.906A4.01 4.01 0 0112 18v1a3 3 0 01-3 3c-3.866 0-7-2.239-7-5H0c0 3.866 4.03 7 9 7a5 5 0 005-5v-1a5.992 5.992 0 00-1.75-4.25L7.156 8.844A4.01 4.01 0 016 6a4 4 0 118 0v3h2V6a6 6 0 00-6-6z"
}));

export default SvgComponent;