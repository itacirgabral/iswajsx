function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 3.5L4.5 7l-.719-.719L6.594 3.5 3.78.719 4.5 0 8 3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 4H1V3h4v1zM0 9.5L3.5 13l.719-.719L1.406 9.5 4.22 6.719 3.5 6 0 9.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 10h4V9H3v1z"
}));

export default SvgComponent;