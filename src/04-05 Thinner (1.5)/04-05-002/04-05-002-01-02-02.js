function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5c0 1.264.12 2.5.375 3.688.092.472.257.936.438 1.406.456 1.225 1.107 2.929 1.187 4.218.06.978-.469 2.875-.469 2.875a3.008 3.008 0 00.719 3.063 3.008 3.008 0 003.063.719s1.897-.53 2.875-.469c1.283.08 2.998.703 4.218 1.156.47.172.952.345 1.406.469C15 34.879 16.236 35 17.5 35 27.165 35 35 27.165 35 17.5S27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16c-1.127 0-2.22-.092-3.281-.313l-1.406-.406c-1.445-.462-3.374-1.088-4.282-1.062-1.21.034-3.531.812-3.531.812a1.997 1.997 0 01-2.031-.5 1.997 1.997 0 01-.5-2.031s.778-2.32.812-3.531c.026-.905-.632-2.807-1.094-4.25l-.374-1.438A16.067 16.067 0 011.5 17.5c0-8.837 7.163-16 16-16z"
}));

export default SvgComponent;