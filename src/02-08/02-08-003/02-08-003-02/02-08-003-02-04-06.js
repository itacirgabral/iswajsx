function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0a6 6 0 016 6v23H9v-9.563A3.99 3.99 0 017 20a4 4 0 110-8c.73 0 1.41.221 2 .563V6a4 4 0 00-4-4 3 3 0 00-3 3v3H0V5a5 5 0 015-5zm2 14a2 2 0 100 4 2 2 0 000-4z"
}));

export default SvgComponent;