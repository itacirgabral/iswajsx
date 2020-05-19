function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0c9.124 0 16.596 6.993 17.406 15.906l-2 .188C32.198 8.19 25.588 2 17.5 2 8.94 2 2 8.94 2 17.5 2 26.06 8.94 33 17.5 33c3.362 0 6.46-1.088 9-2.906l1.156 1.625C24.79 33.769 21.293 35 17.5 35 7.835 35 0 27.165 0 17.5S7.835 0 17.5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M41 23v2H24v-2h17zM24 26l17 4.563-.5 1.937-17.031-4.563L24 26zM40.5 15.5l.5 1.938L24 22l-.531-1.938L40.5 15.5z"
}));

export default SvgComponent;