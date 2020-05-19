function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 15h15v15H4z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M6 17h6v11H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 0h2v15h-2zM.78 7.969L-.062 9.78 11.125 15h4.718L.781 7.969zM25.375 15.813L19 22.186V25l7.781-7.781-1.406-1.407z"
}));

export default SvgComponent;