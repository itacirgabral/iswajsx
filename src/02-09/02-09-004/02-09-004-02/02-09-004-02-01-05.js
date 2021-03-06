function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 7H28l7-7 7 7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 6c1.657 0 3.164.664 4.25 1.75l2.438 2.563c1.28 1.346 3.46 1.832 5.312 1.687 1.486-.116 4-.51 4-2V7h2v3a6 6 0 01-6 6 5.992 5.992 0 01-4.25-1.75l-4.906-5.094A4.01 4.01 0 0018 8a4.01 4.01 0 00-2.844 1.156L10.25 14.25A5.992 5.992 0 016 16a6 6 0 01-6-6V6h2v4c0 1.49 2.514 1.886 4 2 1.85.141 4.032-.341 5.313-1.688L13.75 7.75A5.992 5.992 0 0118 6z"
}));

export default SvgComponent;