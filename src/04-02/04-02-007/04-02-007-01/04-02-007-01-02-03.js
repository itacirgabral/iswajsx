function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4l4-4 .719.719L1.406 4 4.72 7.281 4 8 0 4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 2h5v1H4V2zM4 5h5v1H4V5zM12 4l4-4 .719.719L13.406 4l3.313 3.281L16 8l-4-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 2h5v1h-5V2zM16 5h5v1h-5V5z"
}));

export default SvgComponent;