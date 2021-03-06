function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.281 0l-2.5 2.5 2.5 2.5L8 4.281 6.219 2.5 8 .719 7.281 0zM1 4v2h2V4H1zm12 0v2h2V4h-2zM0 8v2h2V8H0zm14 0v2h2V8h-2zM1 12v2h2v-2H1zm12 0v2h2v-2h-2zm-9 2v2h2v-2H4zm6 0v2h2v-2h-2zm-3 1v2h2v-2H7zM11.281 0l-2.5 2.5 2.5 2.5.719-.719L10.219 2.5 12 .719 11.281 0z"
}));

export default SvgComponent;