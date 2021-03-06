function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 11c-7 0-7 6-7 6 0 6 6 6 6 6h3v-2h-3c-4 0-4-4-4-4 0-4 5-4 5-4 1.246 0 2.218.278 3 .688v11.156c-1.462.889-3.04 1.11-3.688 1.156H12c-5.519 0-8.484-2.54-10.094-5.281L0 21.812C3.872 27.997 12 28 12 28c9 0 9-9 9-9 0-8-8-8-8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 13s-5 0-5 4c0 0 0 4 4 4h3v2h1v-9.313c-.782-.41-1.754-.687-3-.687z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 0v13.438c1.152 1.184 2 2.946 2 5.562V0h-2zM8 3v9.656a5.87 5.87 0 012-1.187V3H8zM2 9L.594 10.406 6.156 16a6.46 6.46 0 01.782-2.063L2 9z"
}));

export default SvgComponent;