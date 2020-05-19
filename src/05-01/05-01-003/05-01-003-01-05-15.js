function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 56,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M56 11H14v4h42v-4zM0 21l5 5 .719-.719L1.437 21l4.282-4.281L5 16l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 23v-1h6v1H4zM4 20v-1h6v1H4zM12 13l-5 5-.719-.719L10.563 13 6.28 8.719 7 8l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 15v-1H2v1h6zM8 12v-1H2v1h6zM0 5l5 5 .719-.719L1.437 5 5.72.719 5 0 0 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 7V6h6v1H4zM4 4V3h6v1H4z"
}));

export default SvgComponent;