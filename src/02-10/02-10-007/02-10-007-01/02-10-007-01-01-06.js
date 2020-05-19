function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 8.719l-2.5 2.5-2.5-2.5.719-.719L14.5 9.781 16.281 8l.719.719zM15 6h-2V4h2v2zm-2 9h-2v-2h2v2zm0-12h-2V1h2v2zM9 16H7v-2h2v2zM9 2H7V0h2v2zM5 15H3v-2h2v2zM5 3H3V1h2v2zm-2 9H1v-2h2v2zm0-6H1V4h2v2zM2 9H0V7h2v2z"
}));

export default SvgComponent;