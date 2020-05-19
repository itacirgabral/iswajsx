function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0l7 7h-2L7 2 2 7H0l7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 6a5.992 5.992 0 00-4.25 1.75l-2.438 2.563C16.032 11.659 13.852 12.145 12 12c-1.486-.116-4-.51-4-2V7H6v3a6 6 0 006 6 5.992 5.992 0 004.25-1.75l4.906-5.094A4.01 4.01 0 0124 8a4.01 4.01 0 012.844 1.156l4.906 5.094A5.992 5.992 0 0036 16a6 6 0 006-6V6h-2v4c0 1.49-2.514 1.886-4 2-1.85.141-4.032-.341-5.313-1.688L28.25 7.75A5.992 5.992 0 0024 6z"
}));

export default SvgComponent;