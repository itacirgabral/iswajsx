function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 7.281l-2.5-2.5-2.5 2.5.719.719L7.5 6.219 9.281 8 10 7.281zM2 16v-2H0v2h2zm4-1v-2H4v2h2zM6 3V1H4v2h2zM2 2V0H0v2h2zM10 11.281l-2.5-2.5-2.5 2.5.719.719L7.5 10.219 9.281 12l.719-.719z"
}));

export default SvgComponent;