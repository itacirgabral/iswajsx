function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v2L8.5 5.5 12 9v2L6.5 5.5 12 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 9.5c0-1.92 2.3-3.517 5.5-4.156v1.875C2.858 7.604 1 8.478 1 9.5 1 10.88 4.358 12 8.5 12h8c4.142 0 7.5-1.12 7.5-2.5 0-1.085-2.1-1.998-5-2.344V5.22c3.468.567 6 2.259 6 4.281v2c0 2.485-3.806 4.5-8.5 4.5h-8C3.806 16 0 13.985 0 11.5v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 0v2l-3.5 3.5L18 9v2l-5.5-5.5L18 0z"
}));

export default SvgComponent;