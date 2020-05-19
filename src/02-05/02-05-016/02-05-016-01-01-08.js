function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 17C19 9.82 13.18 4 6 4v1c6.627 0 12 5.373 12 12v2h1v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.435 4.151L4 17.586 5.414 19 18.85 5.565l-1.414-1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 17c0-6.627-5.373-12-12-12v3a9 9 0 019 9v2h3v-2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 17a9 9 0 00-9-9v1a8 8 0 018 8v2h1v-2zM6 12L.5 6.5 6 1v11zM23 9.9L13.1 0H23v9.9z"
}));

export default SvgComponent;