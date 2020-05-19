function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 50
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 0A8.5 8.5 0 005 8.5a8.501 8.501 0 005 7.75V19H7a7 7 0 00-7 7v24h2V26a5 5 0 015-5h13a5 5 0 015 5v24h2V26a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0013.5 0zM6 25v16h3V25H6zm12 0v16h3V25h-3zM4 44v4h4.594A5.498 5.498 0 018 45.5c0-.525.082-1.02.219-1.5H4zm14.781 0c.137.48.219.975.219 1.5 0 .898-.212 1.751-.594 2.5H23v-4h-4.219z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 41a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 1.5a3 3 0 110 6 3 3 0 010-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 42.5a3 3 0 100 6 3 3 0 000-6z",
  fill: "#fff"
}));

export default SvgComponent;