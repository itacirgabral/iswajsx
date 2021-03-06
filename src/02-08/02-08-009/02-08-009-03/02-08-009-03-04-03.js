function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.243 1.657l5.656 5.657a3 3 0 004.243 0 2.98 2.98 0 00.862-1.967l2.674 2.674a3 3 0 004.242 0 2.98 2.98 0 00.862-1.967l2.674 2.674a4 4 0 005.657 0 6 6 0 000-8.485l-1.415 1.414a4 4 0 010 5.657 2 2 0 01-2.828 0l-6.055-6.055V5.9c0 .256-.114.512-.309.708a1 1 0 01-1.414 0L9.037.552v4.64c0 .256-.114.512-.31.707a1 1 0 01-1.413 0L1.657.243.243 1.657z"
}));

export default SvgComponent;