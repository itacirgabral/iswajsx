function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.201 18.385L23.586 0 25 1.414 6.615 19.8l-1.414-1.414zM6 14L.5 8.5 6 3v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.9 24L1 14.1V24h9.9zM17 19c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2zM17 12l5.5 5.5L28 12H17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10h-2V1h2z"
}));

export default SvgComponent;