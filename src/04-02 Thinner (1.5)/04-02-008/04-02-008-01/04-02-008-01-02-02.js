function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v5.656h1V1h4.656V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.188 2.469l-.72.719L6 6.717 6.719 6 3.187 2.469zM11 0v5.656h1V1h4.656V0H11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.188 2.469l-.72.719L17 6.717 17.719 6l-3.532-3.531z"
}));

export default SvgComponent;