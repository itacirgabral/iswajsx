function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M31 9v2h-6V9h6zm-9 0v2h-9V9h9zM10 9v2H0V9h10zM31 17l7-7-7-7v2.844L35.156 10 31 14.156V17zM29 14l-5.5 5.5L18 14h1.414l4.086 4.086L27.586 14H29z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0a3 3 0 013 3v8c0 1.005.387 1.899 1 2.594V15h-3v-1.406c.613-.695 1-1.59 1-2.594V3a2 2 0 00-4 0v4h-1V3a3 3 0 013-3zM10 3L5.5 7.5 1 3h1.406L5.5 6.094 8.594 3H10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 0C10.433 0 12 1.343 12 3v8c0 4.418 1.79 8 4 8H7c2.21 0 4-3.582 4-8V3c0-1.105-1.12-2-2.5-2S6 1.895 6 3H5c0-1.657 1.567-3 3.5-3z"
}));

export default SvgComponent;