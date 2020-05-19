function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 28l-8 8-8-8h16zm-2.438 1H11.438L17 34.594 22.563 29zM5 0c2.761 0 5 2.686 5 6v6.25c.835-.768 1.868-1.25 3-1.25 2.761 0 5 2.686 5 6v3c0 2.981 4 8 4 8H12s4-5.019 4-8v-3c0-2.21-1.343-4-3-4s-3 1.79-3 4v4H8V6c0-2.21-1.343-4-3-4S2 3.79 2 6v4H0V6c0-3.314 2.239-6 5-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.563 29L17 34.594 11.437 29h11.126z",
  fill: "#fff"
}));

export default SvgComponent;