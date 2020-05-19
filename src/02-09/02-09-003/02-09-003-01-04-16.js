function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 16a6 6 0 016-6h5V6a6 6 0 016-6h3v2h-3c-2.21 0-3.733 2.133-4 4l-.563 4H14a3 3 0 11-3 3v-1.625L6 12c-1.871.234-4 1.79-4 4v5H0v-5zm12-3a2 2 0 102-2l-1.75.219L12 13z"
}));

export default SvgComponent;