function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.5 0C9.835 0 2 7.835 2 17.5S9.835 35 19.5 35 37 27.165 37 17.5 29.165 0 19.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.406 33.469c.099.044.182.114.281.156.358.151.756.216 1.125.344.689-2.555 2.916-4.469 5.688-4.469s4.999 1.914 5.687 4.469c.37-.128.767-.193 1.125-.344.1-.042.183-.112.281-.156C25.69 30.34 22.92 28 19.5 28c-3.42 0-6.191 2.34-7.094 5.469zM3.188 32.469l-.72.718L6 36.72 6.719 36l-3.532-3.531z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 30v5.657h1.016l-.022-4.663 4.663.022V30H0zM36.188 32.469l-.72.718 3.563 3.532.688-.688-3.532-3.562z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M33.006 30.006v5.656h1.016L34 31l4.662.022v-1.016h-5.656z"
}));

export default SvgComponent;