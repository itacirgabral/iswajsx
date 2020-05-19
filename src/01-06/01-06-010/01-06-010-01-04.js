function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 15v15h8V15H6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M7 16h6v13H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.938 17.219L15 21.187V24l5.375-5.375-1.438-1.406zM12 0v13h2V0h-2zM8.5 4.5A2 2 0 008 8.438V13h1V8.437A2.001 2.001 0 008.5 4.5zM4.5 10.5a2 2 0 100 4 2 2 0 000-4zM2.5 17.5a2 2 0 100 4 2 2 0 000-4z"
}));

export default SvgComponent;