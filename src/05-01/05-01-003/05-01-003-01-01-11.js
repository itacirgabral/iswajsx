function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M54 5H12v4h42V5zM10 5l-5 5-.719-.719L8.563 5 4.28.719 5 0l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 7V6H0v1h6zM6 4V3H0v1h6z"
}));

export default SvgComponent;