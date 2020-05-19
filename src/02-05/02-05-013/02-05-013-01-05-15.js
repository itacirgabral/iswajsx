function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 11h25V9H7v2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 4v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 0l-4.5 4.5L17 9V0zm-1 2.406v4.188L13.906 4.5 16 2.406zM7 17l-7-7 7-7v14zm-1-2.438V5.438L1.437 10 6 14.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 14.563L1.437 10 6 5.437v9.125zM16 2.406L13.906 4.5 16 6.594V2.406z",
  fill: "#fff"
}));

export default SvgComponent;