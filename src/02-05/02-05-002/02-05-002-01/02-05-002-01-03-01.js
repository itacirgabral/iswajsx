function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L0 7h2.719l4.219-4.25L11.188 7H14L7 0zM6 7h2v7H6V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 0l-7 7h2.719l4.219-4.25L24.188 7H27l-7-7zM19 7h2v7h-2V7z"
}));

export default SvgComponent;