function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 0C6.836 0 4.444 1.046 2.719 2.719L.25 5.25l1.406 1.406 2.469-2.531C5.487 2.822 7.395 2 9.5 2c1.693 0 3.104.684 4.5 1.406 1.129.584 3.031 2.313 3.031 2.313l-1.156 1.156A2.996 2.996 0 0015 9a3 3 0 006 0c0-.828-.332-1.582-.875-2.125l-1.156-1.156C19.996 4.97 20.87 3.99 22 3.406 23.396 2.684 24.807 2 26.5 2 30.642 2 34 5.134 34 9h2c0-4.97-4.253-9-9.5-9-1.992 0-3.747.642-5.344 1.594C19.878 2.356 18 4.75 18 4.75s-1.895-2.42-3.188-3.188C13.226.62 11.477 0 9.5 0zM18 6.406l1.406 1.188c.362.362.594.854.594 1.406a2 2 0 01-4 0c0-.552.232-1.044.594-1.406L18 6.406z"
}));

export default SvgComponent;