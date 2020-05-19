function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 48,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 0C14.335 0 6.5 7.835 6.5 17.5S14.335 35 24 35s17.5-7.835 17.5-17.5S33.665 0 24 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 14v7h6.844a17.61 17.61 0 01-.344-3.5c0-1.198.115-2.37.344-3.5H0zm41.156 0c.23 1.13.344 2.302.344 3.5s-.115 2.37-.344 3.5H48v-7h-6.844zM39.969 24.594c.044-.099.114-.182.156-.282.151-.358.216-.755.344-1.125C37.914 22.5 36 20.272 36 17.5c0-2.772 1.914-4.999 4.469-5.688-.128-.37-.193-.766-.344-1.125-.042-.099-.112-.182-.156-.28-3.128.902-5.469 3.674-5.469 7.093s2.34 6.19 5.469 7.094z"
}));

export default SvgComponent;