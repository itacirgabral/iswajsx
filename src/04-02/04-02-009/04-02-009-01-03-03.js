function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 12H1v-1h4V7h1v5zM2.125 5.75c0 1.024.375 2.063 1.156 2.844L4 7.875a3.009 3.009 0 010-4.25l1.406-1.406-.687-.719L3.28 2.906A4.006 4.006 0 002.125 5.75z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.125 5.75A5.99 5.99 0 001.875 10l.719-.719a4.99 4.99 0 010-7.062L4 .813 3.28.093 1.875 1.5a5.99 5.99 0 00-1.75 4.25z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.574 2.215a5 5 0 000 7.071l.707-.707a4 4 0 010-5.657l1.414-1.414-.707-.707-1.414 1.414z",
  fill: "#fff"
}));

export default SvgComponent;