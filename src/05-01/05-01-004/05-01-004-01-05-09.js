function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 74,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M74 5H32v4h42V5zM25 0l5 5-.719.719L25 1.437 20.719 5.72 20 5l5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.5 4h-1v6h1V4zM15 10l5-5-.719-.719L15 8.563 10.719 4.28 10 5l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.5 6h-1V0h1v6zM5 0l5 5-.719.719L5 1.437.719 5.72 0 5l5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 4h-1v6h1V4z"
}));

export default SvgComponent;