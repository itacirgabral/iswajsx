function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0a6 6 0 00-6 6v23h2v-9.563A3.99 3.99 0 004 20a4 4 0 100-8c-.73 0-1.41.221-2 .563V6a4 4 0 014-4 3 3 0 013 3v3h2V5a5 5 0 00-5-5zM4 14a2 2 0 110 4 2 2 0 010-4z"
}));

export default SvgComponent;