function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 16l7 7V9l-7 7zM7 15v2h8v-2H7zm14 0v2h9v-2h-9zM18 0l-7 7h14l-7-7zM17 7h2v19h-2V7z"
}));

export default SvgComponent;