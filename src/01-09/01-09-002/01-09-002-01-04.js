function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 14a8 8 0 100 16 8 8 0 000-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 16a6 6 0 100 12 6 6 0 000-12z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0v12.219A9.895 9.895 0 0115 12V0h-2zM6 3l-1.781.906 5.062 9.906A9.937 9.937 0 0111 12.845L6 3zM2 10L.594 11.406l5.687 5.688a9.946 9.946 0 011.157-1.657L2 10z"
}));

export default SvgComponent;