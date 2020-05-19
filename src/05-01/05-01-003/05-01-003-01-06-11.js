function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 5L5 0l-.719.719L8.563 5 4.28 9.281 5 10l5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 3v1H0V3h6zM6 6v1H0V6h6z"
}));

export default SvgComponent;