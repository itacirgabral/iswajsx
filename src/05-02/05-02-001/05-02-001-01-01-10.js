function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 0v40L0 15.75l1.719-1L12 32.594V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v32.594L1.719 14.75 0 15.75v-1.156l2.094-1.219L11 28.813V0h1zM0 15.75L14 40h-1.156L0 17.75v-2z",
  fill: "#fff"
}));

export default SvgComponent;