function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 15v15h8V15H7z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M8 16h3v13H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.938 17.219L15 22.187V25l6.375-6.375-1.438-1.406zM13 0h2v15h-2zM8.906 3.406l-1.937.531L9.906 15H12L8.906 3.406zM1.219 10.5l-.5.875L7 15h2l-7.781-4.5zM7 16l-4.938 4.938.688.718L7 17.438V16z"
}));

export default SvgComponent;