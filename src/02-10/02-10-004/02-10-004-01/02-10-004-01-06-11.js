function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0v2l3.5 3.5L13 9v2l5.5-5.5L13 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 9.5c0-1.92-2.3-3.517-5.5-4.156v1.875C22.142 7.604 24 8.478 24 9.5c0 1.38-3.358 2.5-7.5 2.5h-8C4.358 12 1 10.88 1 9.5c0-1.085 2.1-1.998 5-2.344V5.22C2.532 5.786 0 7.478 0 9.5v2C0 13.985 3.806 16 8.5 16h8c4.694 0 8.5-2.015 8.5-4.5v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v2l3.5 3.5L7 9v2l5.5-5.5L7 0z"
}));

export default SvgComponent;