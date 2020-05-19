function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 10h15v15H0zM14 0c-1.656 0-3 1.344-3 3 0 1.3.842 2.397 2 2.813V10h2V5.812c1.158-.415 2-1.511 2-2.812 0-1.656-1.344-3-3-3z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 12h11v11H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 10h15v15H0zM14 0c-1.656 0-3 1.344-3 3 0 1.3.842 2.397 2 2.813V10h2V5.812c1.158-.415 2-1.511 2-2.812 0-1.656-1.344-3-3-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 12v2H0v3h2v6h11v-6h2v-3h-2v-2H2z",
  fill: "#fff"
}));

export default SvgComponent;