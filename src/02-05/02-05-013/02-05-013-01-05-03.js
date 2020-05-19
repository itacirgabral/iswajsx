function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 8h25V6H7v2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 2v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-2v3h2a6 6 0 000-12h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 8l-4.5 4.5L16 17V8zm-1 2.406v4.188L12.906 12.5 15 10.406zM7 14L0 7l7-7v14zm-1-2.438V2.438L1.437 7 6 11.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 11.563L1.437 7 6 2.437v9.126zM15 10.406L12.906 12.5 15 14.594v-4.188z",
  fill: "#fff"
}));

export default SvgComponent;