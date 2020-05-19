function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v20a4 4 0 01-4 4 8 8 0 01-8-8h2a6 6 0 006 6 2 2 0 002-2v-7.563C9.409 12.78 8.733 13 8 13a4 4 0 110-8c.733 0 1.409.22 2 .563V0h2zM8 7a2 2 0 100 4 2 2 0 000-4z"
}));

export default SvgComponent;