function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 8l5-5-.719-.719L6.594 7H1v1h6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 5.031L5.406 5 9.72.719 9 0 5 4H0v1.031z"
}));

export default SvgComponent;