function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28.594 0L30 1.406 1.406 30H0V6h2v20.594L28.594 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.594 0L2 26.594V6H0V5h3v19.188L27.156 0h1.438zM30 1.406v1.438L2.812 30H1.407L30 1.406z",
  fill: "#fff"
}));

export default SvgComponent;