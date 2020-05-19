function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.594 1.406L0 13h2.813L13.03 2.812l-1.437-1.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4v5h2V4s0-2 2-2 2 2 2 2v9h2V4s0-4-4-4-4 4-4 4zM0 15h15v13H0z"
}));

export default SvgComponent;