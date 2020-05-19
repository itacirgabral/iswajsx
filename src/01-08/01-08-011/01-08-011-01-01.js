function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 15h15v15H6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M8 17h11v11H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 0h2v15h-2zM8 4h2v11H8zM2 9L.594 10.406 6 15.812V15h2L2 9zM27.375 15.813L21 22.186V25l7.781-7.781-1.406-1.407z"
}));

export default SvgComponent;