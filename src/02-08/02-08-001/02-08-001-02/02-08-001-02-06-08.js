function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27.9 16H18V6.1l1.414 1.415v7.07h7.071L27.9 16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.364 3.98a5 5 0 010 7.07l-.707.707-1.414-1.414.707-.707a3 3 0 000-4.243l-2.122-2.12c-1.171-1.172-3.387-.856-4.95.706l-1.414 1.414c-3.162 3.163-4.242 12.728-4.242 12.728l-9.9-9.9S9.888 7.142 13.05 3.98l1.414-1.414c2.344-2.343 5.826-2.66 7.779-.707l2.121 2.121z"
}));

export default SvgComponent;