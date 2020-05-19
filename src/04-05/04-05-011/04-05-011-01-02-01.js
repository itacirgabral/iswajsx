function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v7s-.123 5.46-1 8c-.634 1.837-3 5-3 5h2.281S4.431 17.158 5 15.5C5.925 12.801 6 7 6 7V0H4zM14 0v7s.075 5.801 1 8.5c.568 1.658 2.719 4.5 2.719 4.5H20s-2.366-3.163-3-5c-.877-2.54-1-8-1-8V0h-2z"
}));

export default SvgComponent;