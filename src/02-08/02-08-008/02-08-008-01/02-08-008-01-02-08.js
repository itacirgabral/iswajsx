function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 0v9.9L15.1 0H25zm-1.016 1.016L17.509.994l6.497 6.497-.022-6.475z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.757 5.657L10.151 16.263a4 4 0 01-5.657 0L3.08 14.85C.346 12.116.03 8 2.373 5.657l4.95 4.95c-1.563 1.562-2.196 3.461-1.415 4.242a2 2 0 002.829 0L19.343 4.243l1.414 1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.984 1.016l.022 6.475L17.509.994l6.475.022z",
  fill: "#fff"
}));

export default SvgComponent;