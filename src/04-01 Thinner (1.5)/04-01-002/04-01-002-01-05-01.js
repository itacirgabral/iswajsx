function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.406 33.469c.099.044.182.114.281.156.359.151.756.216 1.126.344.688-2.555 2.915-4.469 5.687-4.469 2.772 0 4.999 1.914 5.688 4.469.37-.128.766-.193 1.125-.344.099-.042.182-.112.28-.156C23.692 30.34 20.92 28 17.5 28s-6.19 2.34-7.094 5.469z"
}));

export default SvgComponent;