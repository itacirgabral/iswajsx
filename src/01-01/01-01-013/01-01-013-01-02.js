function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 7h15v15H6zM1 0L.4 1.5 16 7h5L1 0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M8 9h6v11H8z"
}));

export default SvgComponent;