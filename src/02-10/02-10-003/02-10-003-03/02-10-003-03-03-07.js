function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 4v2l3.5 3.5L17 13v2l5.5-5.5L17 4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M40 4.5C40 2.015 36.194 0 31.5 0h-23C3.806 0 0 2.015 0 4.5v2C0 8.985 3.806 12 8.5 12H16V7H8.5C4.358 7 2 5.88 2 4.5S4.358 2 8.5 2h23C35.642 2 38 3.12 38 4.5S35.642 7 31.5 7h-8v5h8c4.694 0 8.5-3.015 8.5-5.5v-2z"
}));

export default SvgComponent;