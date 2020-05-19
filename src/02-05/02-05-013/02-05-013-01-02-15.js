function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 11h25V9H7v2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 4v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 0l4.5 4.5L20 9V0zm1 2.406v4.188L23.094 4.5 21 2.406zM7 17l-7-7 7-7v14zm-1-2.438V5.438L1.437 10 6 14.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 14.563L1.437 10 6 5.437v9.125zM21 2.406L23.094 4.5 21 6.594V2.406z",
  fill: "#fff"
}));

export default SvgComponent;