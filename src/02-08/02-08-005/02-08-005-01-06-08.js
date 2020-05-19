function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.95 8H17V3.05l.707.707v3.536h3.536L21.95 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.475 1.282a3.5 3.5 0 01.331 4.575l-.729-.73c.64-.97.545-2.283-.31-3.137a2.5 2.5 0 00-3.535 0L8.515 8.707c-2.014 2.014-3.536 7.778-3.536 7.778l-4.95-4.95S5.794 10.015 7.808 8l6.717-6.718a3.5 3.5 0 014.95 0z"
}));

export default SvgComponent;