function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0a5.992 5.992 0 00-4.25 1.75l-2.438 2.563C10.033 5.659 7.853 6.144 6 6c-1.486-.116-4-.51-4-2V1H0v3a6 6 0 006 6 5.992 5.992 0 004.25-1.75l4.906-5.094A4.01 4.01 0 0118 2a4.01 4.01 0 012.844 1.156L25.75 8.25A5.992 5.992 0 0030 10a6 6 0 006-6V0h-2v4c0 1.49-2.514 1.886-4 2-1.85.141-4.032-.341-5.313-1.688L22.25 1.75A5.992 5.992 0 0018 0z"
}));

export default SvgComponent;