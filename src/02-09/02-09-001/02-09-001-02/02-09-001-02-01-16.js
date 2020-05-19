function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 14l7-7-7-7v14zM15 6v2H6a4 4 0 00-4 4v2a3 3 0 003 3h1v4a6 6 0 01-6-6v-3a6 6 0 016-6h9z"
}));

export default SvgComponent;