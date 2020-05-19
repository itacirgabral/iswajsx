function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 7v23h1V7h-1zM8 7v23h1V7H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 7v23h4V7H9z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.813 16.125l-1.438 1.406c-1.772 1.436-4.49 1.938-7.063 1.938-2.571 0-5.29-.502-7.062-1.938l-.719.719a10.97 10.97 0 007.781 3.219 10.97 10.97 0 007.782-3.219l1.406-1.406-.688-.719zM7.781 14L0 21.781V14h7.781zm-2.406 1H1v4.344L5.375 15zM4 7l7-7 7 7H4zm2.438-1h9.125L11 1.437 6.437 6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.438 6L11 1.437 15.563 6H6.437zM5.375 15L1 19.344V15h4.375z",
  fill: "#fff"
}));

export default SvgComponent;