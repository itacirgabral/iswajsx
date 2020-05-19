function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 1l1.5 1.5v7h7L10 11H0V1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 0c-2.664 0-5.056 1.046-6.781 2.719L4.25 5.25l1.406 1.406 2.469-2.531C9.487 2.822 11.395 2 13.5 2c1.693 0 3.104.684 4.5 1.406 1.129.584 3.031 2.313 3.031 2.313l-1.156 1.156A2.996 2.996 0 0019 9a3 3 0 006 0c0-.828-.332-1.582-.875-2.125l-1.156-1.156C23.996 4.97 24.87 3.99 26 3.406 27.396 2.684 28.807 2 30.5 2 34.642 2 38 5.134 38 9h2c0-4.97-4.253-9-9.5-9-1.992 0-3.747.642-5.344 1.594C23.878 2.356 22 4.75 22 4.75s-1.895-2.42-3.188-3.188C17.226.62 15.477 0 13.5 0zM22 6.406l1.406 1.188c.362.362.594.854.594 1.406a2 2 0 01-4 0c0-.552.232-1.044.594-1.406L22 6.406z"
}));

export default SvgComponent;