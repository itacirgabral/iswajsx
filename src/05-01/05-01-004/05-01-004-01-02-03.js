function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8h42v4H0V8zM44 15l5 5 .719-.719L45.437 15l4.282-4.281L49 10l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48 15.5v-1h6v1h-6zM44 5l5 5 .719-.719L45.437 5 49.72.719 49 0l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48 5.5v-1h6v1h-6z"
}));

export default SvgComponent;