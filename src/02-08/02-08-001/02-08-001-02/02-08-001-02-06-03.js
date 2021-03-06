function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.1 16H10V6.1L8.586 7.516v7.07H1.515L.1 16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.636 3.98a5 5 0 000 7.07l.707.707 1.414-1.414-.707-.707a3 3 0 010-4.243l2.122-2.12c1.171-1.172 3.387-.856 4.95.706l1.414 1.414c3.162 3.163 4.242 12.728 4.242 12.728l9.9-9.9S18.112 7.142 14.95 3.98l-1.414-1.414C11.192.222 7.71-.095 5.757 1.858L3.636 3.979z"
}));

export default SvgComponent;