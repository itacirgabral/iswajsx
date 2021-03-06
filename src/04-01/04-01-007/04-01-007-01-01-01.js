function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0v6h6V5H9V0H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0c-2.9 0-5.537 1.162-7.438 3.063l.72.718A9.472 9.472 0 0117.5 1c2.623 0 5 1.062 6.719 2.781l1.093 1.094.688-.719-1.063-1.062A10.513 10.513 0 0017.5 0zM17.5 7C7.835 7 0 14.835 0 24.5S7.835 42 17.5 42 35 34.165 35 24.5 27.165 7 17.5 7zm0 2C26.06 9 33 15.94 33 24.5 33 33.06 26.06 40 17.5 40 8.94 40 2 33.06 2 24.5 2 15.94 8.94 9 17.5 9z"
}));

export default SvgComponent;