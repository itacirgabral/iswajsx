function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0H1v1h4v4h1V0zM2.125 6.25c0-1.024.375-2.063 1.156-2.844L4 4.125a3.009 3.009 0 000 4.25l1.406 1.406-.687.719L3.28 9.094A4.006 4.006 0 012.125 6.25z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.125 6.25A5.99 5.99 0 011.875 2l.719.719a4.99 4.99 0 000 7.062L4 11.187l-.719.72L1.875 10.5a5.99 5.99 0 01-1.75-4.25z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.574 9.785a5 5 0 010-7.071l.707.707a4 4 0 000 5.657l1.414 1.414-.707.707-1.414-1.414z",
  fill: "#fff"
}));

export default SvgComponent;