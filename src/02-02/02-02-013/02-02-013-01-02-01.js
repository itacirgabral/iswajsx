function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 0l-5 5 .719.719L16 1.437l4.281 4.282L21 5l-5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.5 4h1v6h-1V4zM5 0L0 5l.719.719L5 1.437 9.281 5.72 10 5 5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 4h1v6h-1V4z"
}));

export default SvgComponent;