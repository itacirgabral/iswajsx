function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.243 3.657l4.242 4.242a5 5 0 007.071 0 4.978 4.978 0 001.459-3.535v-1.06c0-.257.114-.513.31-.708a1 1 0 011.413 0l9.546 9.546 1.414-1.414-9.545-9.546a3 3 0 00-4.243 0 2.996 2.996 0 00-.884 2.121v1.061c0 .768-.298 1.535-.884 2.121a3 3 0 01-4.243 0L1.657 2.243.243 3.657z"
}));

export default SvgComponent;