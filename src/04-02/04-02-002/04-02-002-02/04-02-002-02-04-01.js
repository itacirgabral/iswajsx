function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v1h4.594l4.687 4.719L12 5 7 0H2zM5.406 3L9.72 7.281 9 8 5 4H0V3h5.406zM18 0l-5 5 .719.719L18.406 1H23V0h-5zM19.594 3L15.28 7.281 16 8l4-4h5V3h-5.406z"
}));

export default SvgComponent;