function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 0v14l7-7-7-7zM0 22a6 6 0 016-6h5v-4a6 6 0 016-6h3v2h-3a4 4 0 00-4 4v6H6a4 4 0 00-4 4v5H0v-5z"
}));

export default SvgComponent;