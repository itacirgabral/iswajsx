function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7.281l2.5-2.5 2.5 2.5L4.281 8 2.5 6.219.719 8 0 7.281zM8 16v-2h2v2H8zm-4-1v-2h2v2H4zM4 3V1h2v2H4zm4-1V0h2v2H8zM0 11.281l2.5-2.5 2.5 2.5-.719.719L2.5 10.219.719 12 0 11.281z"
}));

export default SvgComponent;