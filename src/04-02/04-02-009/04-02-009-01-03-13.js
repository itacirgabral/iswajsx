function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v5h1V1h4V0H0zM6.25 3.875A4.006 4.006 0 013.406 2.72L4.125 2a3.009 3.009 0 004.25 0L9.781.594l.719.687L9.094 2.72A4.006 4.006 0 016.25 3.875z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.25 5.875A5.99 5.99 0 012 4.125l.719-.719a4.99 4.99 0 007.062 0L11.187 2l.72.719L10.5 4.125a5.99 5.99 0 01-4.25 1.75z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.785 3.426a5 5 0 01-7.071 0l.707-.707a4 4 0 005.657 0l1.414-1.414.707.707-1.414 1.414z",
  fill: "#fff"
}));

export default SvgComponent;