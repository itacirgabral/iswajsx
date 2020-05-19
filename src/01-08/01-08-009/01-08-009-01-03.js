function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15h8v15h-8zM15 0h2v15h-2zM0 15h15v2H0zM21 3h2v12h-2zM27.938 7.219l1.437 1.406L23 15v-2.813l4.938-4.968z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.094 11.844l-2.125 2.125L15 26v-4.25l-9.906-9.906z"
}));

export default SvgComponent;