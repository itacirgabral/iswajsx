function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 64,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M64 5H22v4h42V5zM0 9l5 5 .719-.719L1.437 9 5.72 4.719 5 4 0 9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 9.5v-1h6v1H4zM20 5l-5 5-.719-.719L18.562 5 14.282.719 15 0l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 5.5v-1h-6v1h6z"
}));

export default SvgComponent;