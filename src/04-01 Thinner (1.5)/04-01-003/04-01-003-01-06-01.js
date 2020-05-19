function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0L0 5l.719.719L5 1.437 9.281 5.72 10 5 5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 4v6h1V4H3zM6 4v6h1V4H6z"
}));

export default SvgComponent;