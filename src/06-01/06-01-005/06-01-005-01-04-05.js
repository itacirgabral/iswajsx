function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 0C11.835 0 4 7.835 4 17.5S11.835 35 21.5 35 39 27.165 39 17.5 31.165 0 21.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 5c-2.52 3.524-4 7.839-4 12.5S1.48 26.476 4 30l1.219-.938C2.896 25.797 1.5 21.814 1.5 17.5S2.896 9.203 5.219 5.937L4 5zm35 0l-1.219.938C40.104 9.203 41.5 13.186 41.5 17.5s-1.396 8.297-3.719 11.563L39 30c2.52-3.524 4-7.839 4-12.5S41.52 8.524 39 5zM14.406 33.469c.099.044.182.114.281.156.359.151.756.216 1.126.344.688-2.555 2.915-4.469 5.687-4.469 2.772 0 4.999 1.914 5.688 4.469.37-.128.766-.193 1.125-.344.099-.042.182-.112.28-.156C27.692 30.34 24.92 28 21.5 28s-6.19 2.34-7.094 5.469z"
}));

export default SvgComponent;