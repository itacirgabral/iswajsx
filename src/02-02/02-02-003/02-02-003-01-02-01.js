function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v7h1V1h6V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.719 3L3 3.719l3 2.969c6.053 6.053 6.053 15.884 0 21.937a15.443 15.443 0 01-6 3.719v1.031a16.447 16.447 0 006.688-4.063C13.13 22.87 13.13 12.445 6.688 6l-2.97-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 7a3 3 0 100 6 3 3 0 000-6zM10 19a3 3 0 100 6 3 3 0 000-6zM4 28a3 3 0 100 6 3 3 0 000-6z"
}));

export default SvgComponent;