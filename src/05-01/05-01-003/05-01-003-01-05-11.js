function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 56,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M56 11H14v4h42v-4zM12 21l-5 5-.719-.719L10.563 21 6.28 16.719 7 16l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 23v-1H2v1h6zM8 20v-1H2v1h6zM0 13l5 5 .719-.719L1.437 13 5.72 8.719 5 8l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 15v-1h6v1H4zM4 12v-1h6v1H4zM12 5l-5 5-.719-.719L10.563 5 6.28.719 7 0l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 7V6H2v1h6zM8 4V3H2v1h6z"
}));

export default SvgComponent;