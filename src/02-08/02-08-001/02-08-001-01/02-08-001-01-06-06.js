function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 12l-7 7-7-7h2l5 5 5-5h2zM5 0c3.866 0 7 3.582 7 8 0 .745.5 1.749 1 2.563V12H7v-1.438C7.5 9.75 8 8.745 8 8c0-3.314-1.343-6-3-6-2.21 0-4 3.582-4 8H0C0 4.477 2.239 0 5 0z"
}));

export default SvgComponent;