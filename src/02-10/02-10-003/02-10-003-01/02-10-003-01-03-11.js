function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 3l6 6-6 6v-2l4-4-4-4V3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 4.5C25 2.015 21.194 0 16.5 0h-8C3.806 0 0 2.015 0 4.5v2C0 8.985 3.806 11 8.5 11H11V7H8.5C4.358 7 1 5.88 1 4.5S4.358 2 8.5 2h8C20.642 2 24 3.12 24 4.5c0 1.085-2.1 1.998-5 2.344v3.937c3.468-.567 6-2.259 6-4.281v-2z"
}));

export default SvgComponent;