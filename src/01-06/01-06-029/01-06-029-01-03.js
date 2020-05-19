function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15v15h8V15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28 8l-5.156 5.156L21 15h2v.813l.813-.813.437-.406v-.031l5.156-5.157L28 8zM0 15h15v3H0zM15 0h2v15h-2zM2 28h13v2H2z"
}));

export default SvgComponent;