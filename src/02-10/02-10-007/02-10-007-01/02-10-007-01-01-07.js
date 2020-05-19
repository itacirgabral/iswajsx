function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.281 17l-2.5-2.5 2.5-2.5.719.719L6.219 14.5 8 16.281 7.281 17zM10 15v-2h2v2h-2zm-9-2v-2h2v2H1zm12 0v-2h2v2h-2zM0 9V7h2v2H0zm14 0V7h2v2h-2zM1 5V3h2v2H1zm12 0V3h2v2h-2zM4 3V1h2v2H4zm6 0V1h2v2h-2zM7 2V0h2v2H7z"
}));

export default SvgComponent;