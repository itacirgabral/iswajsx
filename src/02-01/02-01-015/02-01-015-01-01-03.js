function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 4a7 7 0 000 14c2.31 0 4.407-.882 6-2.313l-1.344-1.5C12.416 15.305 10.8 16 9 16A5 5 0 119 6a3 3 0 010 6 1 1 0 110-2h1V8H9a3 3 0 000 6A5 5 0 109 4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 6a5 5 0 100 10c1.8 0 3.416-.696 4.656-1.813l-1.344-1.468A4.947 4.947 0 019 14a3 3 0 010-6h1v2H9a1 1 0 100 2 3 3 0 000-6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 0H0v2h17V0zM17 20H0v2h17v-2z"
}));

export default SvgComponent;