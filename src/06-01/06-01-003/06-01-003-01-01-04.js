function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 43
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 4a8.5 8.5 0 018.5 8.5 8.501 8.501 0 01-5 7.75V23h3a7 7 0 017 7v13h-2V30a5 5 0 00-5-5H7a5 5 0 00-5 5v13H0V30a7 7 0 017-7h3v-2.75a8.501 8.501 0 01-5-7.75A8.5 8.5 0 0113.5 4zM21 30v13h-3V30h3zM9 30v13H6V30h3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 43V0h-2v43h2z"
}));

export default SvgComponent;