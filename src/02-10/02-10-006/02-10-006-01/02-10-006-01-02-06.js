function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 12c0-2.761 3.134-5 7-5s7 2.239 7 5-3.134 5-7 5-7-2.239-7-5zm1.5 0h11c0-1.933-2.462-3.5-5.5-3.5S7.5 10.067 7.5 12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 8.5c-3.038 0-5.5 1.567-5.5 3.5h11c0-1.933-2.462-3.5-5.5-3.5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 8L2 0h8v8zM9 5.594V1H4.437L9 5.594zM0 11c0-1.791.696-3.57 2.063-4.938L5.219 3.22l1.375 1.375-3.125 2.875a4.978 4.978 0 000 7.062l2.312 2.063L4.375 18l-2.313-2.063A6.963 6.963 0 010 11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 5.594L4.437 1H9v4.594z",
  fill: "#fff"
}));

export default SvgComponent;