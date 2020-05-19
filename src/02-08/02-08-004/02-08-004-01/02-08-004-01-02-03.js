function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v9.9L9.9 0H0zm1.016 1.016L7.491.994.994 7.491l.022-6.475z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 5.657l4.242 4.242a5 5 0 007.071 0 4.978 4.978 0 001.459-3.535v-1.06c0-.257.114-.513.31-.708a1 1 0 011.413 0l2.475 2.475c2.539 2.539 4.243 9.9 4.243 9.9l7.07-7.072s-7.36-1.704-9.899-4.242l-2.474-2.475a3 3 0 00-4.243 0 2.996 2.996 0 00-.884 2.121v1.061c0 .768-.298 1.535-.884 2.121a3 3 0 01-4.243 0L5.657 4.243 4.243 5.657z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.016 1.016L.994 7.491 7.491.994l-6.475.022z",
  fill: "#fff"
}));

export default SvgComponent;