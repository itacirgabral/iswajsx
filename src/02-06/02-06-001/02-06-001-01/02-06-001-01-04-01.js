function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.469.531L6.406 1.594l1.75 1.75A7.974 7.974 0 0110.5 9c0 2.21-.896 4.209-2.344 5.656l-4.281 4.281L4.938 20l4.28-4.281A9.472 9.472 0 0012 9c0-2.623-1.062-5-2.781-6.719L7.469.531z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.594 4.406L2.53 5.47l1.75 1.75C4.734 7.67 5 8.309 5 9c0 .69-.266 1.329-.719 1.781L0 15.062l1.063 1.063 4.28-4.281A4.01 4.01 0 006.5 9a4.01 4.01 0 00-1.156-2.844l-1.75-1.75z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.406 1.594L3.594 4.406l1.75 1.75A4.01 4.01 0 016.5 9a4.01 4.01 0 01-1.156 2.844l-4.282 4.281 2.813 2.813 4.281-4.282A7.974 7.974 0 0010.5 9c0-2.21-.896-4.209-2.344-5.656l-1.75-1.75z",
  fill: "#fff"
}));

export default SvgComponent;