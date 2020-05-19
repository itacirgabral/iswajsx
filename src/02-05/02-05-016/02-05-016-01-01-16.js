function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 17C4 9.82 9.82 4 17 4v1C10.373 5 5 10.373 5 17v2H4v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.565 4.151L19 17.586 17.586 19 4.15 5.565l1.414-1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 17c0-6.627 5.373-12 12-12v3a9 9 0 00-9 9v2H5v-2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 17a9 9 0 019-9v1a8 8 0 00-8 8v2H8v-2zM17 12l5.5-5.5L17 1v11zM0 9.9L9.9 0H0v9.9z"
}));

export default SvgComponent;