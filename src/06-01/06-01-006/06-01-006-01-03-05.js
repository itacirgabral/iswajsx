function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 0A8.5 8.5 0 005 8.5a8.501 8.501 0 005 7.75V19H7a7 7 0 00-7 7v22h2V26a5 5 0 015-5h13a5 5 0 015 5v22h2V26a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0013.5 0zM6 25v16h3v-4.344A5.441 5.441 0 018 33.5c0-1.179.369-2.261 1-3.156V25H6zm12 0v5.344c.631.895 1 1.977 1 3.156a5.441 5.441 0 01-1 3.156V41h3V25h-3zM4 44v4h19v-4H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 29a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
}));

export default SvgComponent;