function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L0 7h2l5-5 5 5h2L7 0zM6 7v8a3 3 0 003 3 2.98 2.98 0 002-.781V22a4 4 0 004 4h1c3.866 0 7-2.686 7-6h-6c0 2.21-.895 4-2 4a2 2 0 01-2-2v-9.563L9.719 15.72A1.015 1.015 0 019 16a1 1 0 01-1-1V7H6z"
}));

export default SvgComponent;