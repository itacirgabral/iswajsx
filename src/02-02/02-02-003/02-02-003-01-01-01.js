function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v7h1V1h6V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.719 3L3 3.719l3 2.969C10.953 11.64 11.868 19.127 8.719 25h1.094c3.063-6.169 2.015-13.86-3.126-19L3.72 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 19a3 3 0 100 6 3 3 0 000-6zM9 7a3 3 0 100 6 3 3 0 000-6z"
}));

export default SvgComponent;