function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0a6 6 0 00-6 6v3h2V6a4 4 0 014-4 4.01 4.01 0 012.844 1.156L13.75 8.25A5.992 5.992 0 0018 10a5.992 5.992 0 004.25-1.75l4.906-5.094A4.01 4.01 0 0130 2a4 4 0 014 4v4h2V6a6 6 0 00-6-6 5.992 5.992 0 00-4.25 1.75l-2.438 2.563C22.026 5.647 19.855 6 18 6c-1.855 0-4.026-.352-5.313-1.688L10.25 1.75A5.992 5.992 0 006 0z"
}));

export default SvgComponent;