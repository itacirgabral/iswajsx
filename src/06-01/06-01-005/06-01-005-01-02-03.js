function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 48,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 0C14.335 0 6.5 7.835 6.5 17.5S14.335 35 24 35s17.5-7.835 17.5-17.5S33.665 0 24 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 14v7h6.844a17.61 17.61 0 01-.344-3.5c0-1.198.115-2.37.344-3.5H0zm41.156 0c.23 1.13.344 2.302.344 3.5s-.115 2.37-.344 3.5H48v-7h-6.844zM8.031 10.406c-.044.099-.114.182-.156.281-.151.359-.216.756-.344 1.125C10.086 12.502 12 14.728 12 17.5s-1.914 4.999-4.469 5.687c.128.37.193.767.344 1.125.042.1.112.183.156.282C11.16 23.69 13.5 20.919 13.5 17.5c0-3.419-2.34-6.19-5.469-7.094z"
}));

export default SvgComponent;