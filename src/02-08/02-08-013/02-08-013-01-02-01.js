function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 0L3 7h14l-7-7zm0 1.406L14.563 6H5.437L10 1.406zM9 7v12a4 4 0 004 4h2c3.866 0 7-2.686 7-6h-7c0 2.21-.895 4-2 4a2 2 0 01-2-2V7H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 13v1h39v-1H0zM25 0l-7 7h14l-7-7zm0 1.406L29.563 6h-9.125L25 1.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 7v12a4 4 0 004 4h2c3.866 0 7-2.686 7-6h-7c0 2.21-.895 4-2 4a2 2 0 01-2-2V7h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 1.406L5.437 6h9.125L10 1.406zM25 1.406L20.437 6h9.125L25 1.406z",
  fill: "#fff"
}));

export default SvgComponent;