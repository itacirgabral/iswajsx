function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 7.281l-2.5-2.5-2.5 2.5.719.719L7.5 6.219 9.281 8 10 7.281zM8 10H6v2h2v-2zM6 1H4v2h2V1zm0 12H4v2h2v-2zM2 0H0v2h2V0zm0 14H0v2h2v-2z"
}));

export default SvgComponent;