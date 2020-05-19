function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 15h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 17h6v11H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 4h2v11h-2zM7 0h2v15H7zM3 4h2v11H3zM18.281 18.344L15 24.03V28l5-8.656-1.719-1z"
}));

export default SvgComponent;