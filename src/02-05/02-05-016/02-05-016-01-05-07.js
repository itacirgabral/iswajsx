function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 9v2h-8V9h8zM14 9v2H0V9h14zM15 3H4l5.5 5.5L15 3zm-2.408.994L9.5 7.086l-3.07-3.07 6.162-.022zM25 17l7-7-7-7v14zm1-2.438V5.438L30.563 10 26 14.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 14.563L30.563 10 26 5.437v9.125zM12.592 3.994l-6.162.022 3.07 3.07 3.092-3.092z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 0C14.433 0 16 1.343 16 3v8c0 4.418 1.79 8 4 8h-9c2.21 0 4-3.582 4-8V3c0-1.105-1.12-2-2.5-2S10 1.895 10 3H9c0-1.657 1.567-3 3.5-3z"
}));

export default SvgComponent;