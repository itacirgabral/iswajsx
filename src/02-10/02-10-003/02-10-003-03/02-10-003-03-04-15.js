function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 5.5L23 0v11l-5.5-5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 9.5C0 7.015 3.806 5 8.5 5h8v2h-8C4.358 7 2 8.12 2 9.5S4.358 13 8.5 13h23c4.142 0 6.5-2.12 6.5-3.5S35.642 7 31.5 7H24V5h7.5C36.194 5 40 7.015 40 9.5v2c0 2.485-3.806 5.5-8.5 5.5h-23C3.806 17 0 13.985 0 11.5v-2z"
}));

export default SvgComponent;