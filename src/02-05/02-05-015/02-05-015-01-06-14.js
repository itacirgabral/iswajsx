function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 14.1V24h9.9l-2.011-2.01H3.01V16.11L1 14.101z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.201 18.385L23.586 0 25 1.414 6.615 19.8l-1.414-1.414zM28 12l-5.5 5.5L17 12h1.414l4.086 4.086L26.586 12H28z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10h-2V1h2zM6 4L.5 9.5 6 15v-1.414L1.914 9.5 6 5.414V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 20c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z"
}));

export default SvgComponent;