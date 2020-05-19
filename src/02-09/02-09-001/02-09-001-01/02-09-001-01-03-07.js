function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 5a5 5 0 015 5v2a5 5 0 01-5 5H3v-3h12a3 3 0 003-3V9a3 3 0 00-3-3H6V5h9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0L.5 5.5 6 11V9.5l-4-4 4-4V0z"
}));

export default SvgComponent;