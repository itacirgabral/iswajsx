function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 9v2h-9V9h9zM13 9v2H0V9h13zM9 14h11l-5.5 5.5L9 14zm2.408.994l3.092 3.092 3.07-3.07-6.162-.022zM25 17l7-7-7-7v14zm1-2.438V5.438L30.563 10 26 14.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 14.563L30.563 10 26 5.437v9.125zM11.408 14.994l6.162.022-3.07 3.07-3.092-3.092z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0a3 3 0 013 3v8a4 4 0 004 4h-9a4 4 0 004-4V3a2 2 0 00-4 0v4H9V3a3 3 0 013-3z"
}));

export default SvgComponent;