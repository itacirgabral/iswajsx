function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 15h15v15H2z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M4 17h11v11H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v15h2V0H9zM5 6v9h2V6H5z"
}));

export default SvgComponent;