function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 50
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 0A8.5 8.5 0 005 8.5a8.501 8.501 0 005 7.75V19H7a7 7 0 00-7 7v24h2V26a5 5 0 015-5h13a5 5 0 015 5v24h2V26a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0013.5 0zM6 24v16.219c.48-.138.976-.219 1.5-.219.525 0 1.02.082 1.5.219V24H6zm12 0v17h3V24h-3zm-5.219 20c.137.48.219.975.219 1.5 0 .898-.212 1.751-.594 2.5H23v-4H12.781z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 41a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
}));

export default SvgComponent;