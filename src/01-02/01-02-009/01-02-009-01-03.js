function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 15h15v15H4zM0 6v6h2V8h2v7h2V6H0zM9 0h2v15H9z"
}));

export default SvgComponent;