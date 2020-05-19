function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0h2v15h-2zM12 15C0 15 0 23 0 23c0 7 12 7 12 7h8V15h-8zm0 4v9c-9 0-9-4-9-4 0-5 9-5 9-5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M13 16h3v13h-3z"
}));

export default SvgComponent;