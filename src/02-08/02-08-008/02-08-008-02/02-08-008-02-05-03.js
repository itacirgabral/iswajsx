function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6v9.192L9.192 6H0zm.994.994l5.768.022-5.746 5.746-.022-5.768zM4.243 10.95l4.242 4.242c2.734 2.734 6.533 3.367 8.486 1.415l3.535-3.536a9 9 0 000-12.728l-7.778 7.778c2.343 2.343 3.293 5.193 2.121 6.364a4 4 0 01-5.657 0L4.95 10.243l-.707.707z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.994 6.994l.022 5.768 5.746-5.746-5.768-.022z",
  fill: "#fff"
}));

export default SvgComponent;