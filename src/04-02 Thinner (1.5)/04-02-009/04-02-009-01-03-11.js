function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 12h5v-1H1V7H0v5zM3.875 5.75A4.006 4.006 0 012.72 8.594L2 7.875a3.009 3.009 0 000-4.25L.594 2.219l.687-.719L2.72 2.906A4.006 4.006 0 013.875 5.75z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.875 5.75A5.99 5.99 0 014.125 10l-.719-.719a4.99 4.99 0 000-7.062L2 .813l.719-.72L4.125 1.5a5.99 5.99 0 011.75 4.25z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.426 2.215a5 5 0 010 7.071L2.72 8.58a4 4 0 000-5.657L1.305 1.508l.707-.707 1.414 1.414z",
  fill: "#fff"
}));

export default SvgComponent;