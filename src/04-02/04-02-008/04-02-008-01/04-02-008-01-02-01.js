function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0L0 4l.719.719L4 1.406 7.281 4.72 8 4 4 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 4v5h1V4h-1zM15 0l-4 4 .719.719L15 1.406l3.281 3.313L19 4l-4-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 4v5h1V4h-1z"
}));

export default SvgComponent;