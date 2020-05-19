function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 0v2l-3.5 3.5L14 9v2L8.5 5.5 14 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 9.5c0-2.304 3.281-4.173 7.5-4.438v1.97C3.839 7.196 1 8.233 1 9.5 1 10.88 4.358 12 8.5 12h8c4.142 0 7.5-1.12 7.5-2.5S20.642 7 16.5 7H15V5h1.5C21.194 5 25 7.015 25 9.5v2c0 2.485-3.806 4.5-8.5 4.5h-8C3.806 16 0 13.985 0 11.5v-2z"
}));

export default SvgComponent;