function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 43
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 4a8.5 8.5 0 018.5 8.5 8.501 8.501 0 01-5 7.75V23h3a7 7 0 017 7v13h-2V30a5 5 0 00-5-5H15a5 5 0 00-5 5v13H8V30a7 7 0 017-7h3v-2.75a8.501 8.501 0 01-5-7.75A8.5 8.5 0 0121.5 4zM29 30v13h-3V30h3zm-12 0v13h-3V30h3zM2 43V0H0v43h2z"
}));

export default SvgComponent;