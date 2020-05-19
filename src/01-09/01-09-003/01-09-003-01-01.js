function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 13c-7 0-7 6-7 6 0 6 6 6 6 6h3v-2h-3c-4 0-4-4-4-4 0-4 5-4 5-4 6 0 6 6 6 6 0 7-7 7-7 7-5.519 0-8.484-2.54-10.094-5.281L1 23.812C4.872 29.997 13 30 13 30c9 0 9-9 9-9 0-8-8-8-8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 15s-5 0-5 4c0 0 0 4 4 4h3v2h2.938c.647-.978 1.062-2.27 1.062-4 0 0 0-6-6-6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0v13.063c.323-.03.64-.063 1-.063h.344c.158.011.41.06.656.094V0h-2zM6 3l-1.781.906L9.5 14.25a6.246 6.246 0 011.781-.875L6 3zM2 10L.594 11.406l6.562 6.563c.119-.57.338-1.295.782-2.032L2 10z"
}));

export default SvgComponent;