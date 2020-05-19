function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 0L0 1.406 28.594 30H30V6h-2v20.594L1.406 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 0L28 26.594V6h2V5h-3v19.188L2.844 0H1.406zM0 1.406v1.438L27.188 30h1.406L0 1.406z",
  fill: "#fff"
}));

export default SvgComponent;