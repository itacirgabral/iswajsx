function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 3L9.5 6.5 6 3h1l2.5 2.5L12 3h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 0a3.5 3.5 0 013.469 3H8.938C8.704 1.86 7.707 1 6.5 1A2.5 2.5 0 004 3.5V13c0 2.848 3 8 3 8H0s3-5.152 3-8V3.5A3.5 3.5 0 016.5 0zM19 17l-4.5 4.5L10 17h1l3.5 3.5L18 17h1zM17 0a3 3 0 00-3 3v10c0 1.49-2 4-2 4h5s-2-2.51-2-4V3a2 2 0 114 0v4h1V3a3 3 0 00-3-3z"
}));

export default SvgComponent;