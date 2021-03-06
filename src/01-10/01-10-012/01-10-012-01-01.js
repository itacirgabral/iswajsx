function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 1c-.973 0-1 1-1 1v9h2V2s0-1-1-1zm3 0C8 1 8 2 8 2v9h2V2s0-1-1-1zm3 0c-1 0-1 1-1 1v9h2V2s0-1-1-1zM2 5v11h11v-4H4V5H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0s-2 0-2 2v10h4V2s0-2-2-2zm0 1c1 0 1 1 1 1v9h-2V2s0-1 1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0S7 0 7 2v10h4V2s0-2-2-2zm0 1c1 0 1 1 1 1v9H8V2s0-1 1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0S4 0 4 2v10h4V2s0-2-2-2zm0 1c1 0 1 1 1 1v9H5V2s0-1 1-1z"
}));

export default SvgComponent;