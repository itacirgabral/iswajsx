function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5.25v1.5h4v-1.5H0zm13 0v1.5h4v-1.5h-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.75 0v4.688L3.687 2.344l-.75 1.312L7 6 2.937 8.344l.75 1.312L7.75 7.312V12h1.5V7.312l4.063 2.344.75-1.312L10 6l4.063-2.344-.75-1.312L9.25 4.688V0h-1.5z"
}));

export default SvgComponent;