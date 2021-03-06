function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M31 9v2h-6V9h6zm-9 0v2h-9V9h9zM10 9v2H0V9h10zM31 17l7-7-7-7v2.844L35.156 10 31 14.156V17zM17 14l-5.5 5.5L6 14h1.414l4.086 4.086L15.586 14H17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0a3 3 0 013 3v8c0 1.005.387 1.899 1 2.594V15h-3v-1.406c.613-.695 1-1.59 1-2.594V3a2 2 0 00-4 0v4H6V3a3 3 0 013-3zM22 3l-4.5 4.5L13 3h1.406L17.5 6.094 20.594 3H22z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.5 0C22.433 0 24 1.343 24 3v8c0 4.418 1.79 8 4 8h-9c2.21 0 4-3.582 4-8V3c0-1.105-1.12-2-2.5-2S18 1.895 18 3h-1c0-1.657 1.567-3 3.5-3z"
}));

export default SvgComponent;