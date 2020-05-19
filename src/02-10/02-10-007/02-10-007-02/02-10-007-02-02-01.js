function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.281 0l-2.5 2.5 2.5 2.5L8 4.281 6.219 2.5 8 .719 7.281 0zM16 8h-2v2h2V8zm-1-4h-2v2h2V4zM3 4H1v2h2V4zM2 8H0v2h2V8zM11.281 0l-2.5 2.5 2.5 2.5.719-.719L10.219 2.5 12 .719 11.281 0z"
}));

export default SvgComponent;