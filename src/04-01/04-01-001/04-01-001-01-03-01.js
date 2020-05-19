function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 48,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 0C14.335 0 6.5 7.835 6.5 17.5S14.335 35 24 35s17.5-7.835 17.5-17.5S33.665 0 24 0zm0 2c8.56 0 15.5 6.94 15.5 15.5C39.5 26.06 32.56 33 24 33c-8.56 0-15.5-6.94-15.5-15.5C8.5 8.94 15.44 2 24 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 14v7h6.844a17.61 17.61 0 01-.344-3.5c0-1.198.115-2.37.344-3.5H0zm41.156 0c.23 1.13.344 2.302.344 3.5s-.115 2.37-.344 3.5H48v-7h-6.844z"
}));

export default SvgComponent;