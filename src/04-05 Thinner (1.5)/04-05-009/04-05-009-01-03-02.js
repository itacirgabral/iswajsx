function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v5h1V1h4V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.05 3.172L3.878 6l.708-.707-2.829-2.829-.707.708zM2.464 1.757l2.829 2.829L6 3.879 3.17 1.05l-.707.707z"
}));

export default SvgComponent;