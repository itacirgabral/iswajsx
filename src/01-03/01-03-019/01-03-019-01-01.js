function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 15h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 17h11v11H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 15h2V0h-2v15zM5 6v5h2V8h2v7h2V6H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 13v1l6 6v-1l-6-6zm-2.813 2L15 23.813v-1L7.187 15h-1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 11l-1.406 1.406L15 22.812C16.015 23.994 16 25 16 25c0 1.145-.984 1.14-1 1.156V28c3 0 3-3 3-3 0-2.461-3-5-3-5l-9-9z"
}));

export default SvgComponent;