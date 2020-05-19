function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 0a6 6 0 016 6v5h-2V6a4 4 0 10-8 0v28a5 5 0 01-5 5C4.477 39 0 33.627 0 27h2c0 5.523 3.582 10 8 10a3 3 0 003-3V6a6 6 0 016-6z"
}));

export default SvgComponent;