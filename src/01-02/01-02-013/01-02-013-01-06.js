function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.594 3.406L0 15h2.813L13.03 4.812l-1.437-1.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0h2v15H6zM0 17h15v13H0z"
}));

export default SvgComponent;