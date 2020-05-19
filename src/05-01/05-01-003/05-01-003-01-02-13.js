function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 64,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M64 5H22V1h42v4zM15 10l5-5-.719-.719L15 8.563 10.719 4.28 10 5l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 6h-1V0h1v6zM14 6h-1V0h1v6zM5 10l5-5-.719-.719L5 8.563.719 4.28 0 5l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 6H6V0h1v6zM4 6H3V0h1v6z"
}));

export default SvgComponent;