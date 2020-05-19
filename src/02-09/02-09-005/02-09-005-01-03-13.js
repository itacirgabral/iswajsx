function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4v8l1.5-1.5v-5h5L8 4H0zM10 0H9v21h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0h-3v21h3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0h-1v21h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.938 6L21 7.063 17.5 10.5c-1.541 1.532-3.656 2.5-6 2.5a8.45 8.45 0 01-6-2.5L3.469 8.531 4.53 7.47 5.063 8c1.585 1.584 4.027 2 6.437 2s4.852-.415 6.438-2l2-2z"
}));

export default SvgComponent;