function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 46,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 11l42 6v5L0 13v-2zM40.5 0v1H33V0h7.5zm0 8v3H36V8h4.5zM40.5 0a5.5 5.5 0 010 11V8a3.5 3.5 0 100-7V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M35.25 5.25l1.063 1.063L33.124 9.5l3.188 3.188-1.063 1.062L31 9.5l4.25-4.25z"
}));

export default SvgComponent;