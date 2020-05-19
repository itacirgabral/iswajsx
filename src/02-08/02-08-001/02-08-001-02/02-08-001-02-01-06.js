function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0a6 6 0 016 6v10c0 2.981 4 8 4 8H5s4-5.019 4-8V6a4 4 0 00-4-4 3 3 0 00-3 3v5H0V5a5 5 0 015-5zM19 24l-9 9-9-9h18z"
}));

export default SvgComponent;