function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3v5h1V4h4V3H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.469 4.75l-.719.719L4.594 8.28l.687-.687L2.47 4.75zM11 6V1h-1v4H6v1h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.406.719l-.687.687L8.53 4.25l.719-.719L6.406.72zM15 3v5h1V4h4V3h-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.469 4.75l-.719.719 2.844 2.812.687-.687L17.47 4.75zM26 6V1h-1v4h-4v1h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.406.719l-.687.687L23.53 4.25l.719-.719L21.406.72z"
}));

export default SvgComponent;