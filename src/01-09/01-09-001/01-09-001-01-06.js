function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17h15v13H0zM7 0h2v15H7zM16.5 3.75l1.719 1L12.28 15H10l6.5-11.25zM18.531 10.625L14.188 15H17l2.938-2.938-1.407-1.437z"
}));

export default SvgComponent;