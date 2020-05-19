function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 58
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M39.656 34H28.344l23.281 23.281 5.656-5.656L39.656 34z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.656 23H17.344l11 11h11.312l-11-11z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.375.719L.719 6.375 17.344 23h11.312L6.375.719zM29.5 25c3.666 0 6.724 2.568 7.5 6h-1.156a6.729 6.729 0 00-6.344-4.5 6.729 6.729 0 00-6.344 4.5H22c.776-3.432 3.834-6 7.5-6z"
}));

export default SvgComponent;