function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 23V0H9v23h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.908 12.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707c-3.905-3.905-10.237-3.905-14.142 0L1.201 14.88l-.707-.707 1.414-1.415z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.219 17L21 9.219V17h-7.781zm2.406-1H20v-4.344L15.625 16zM17 23l-7 7-7-7h14zm-2.438 1H5.438L10 28.563 14.563 24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.563 24L10 28.563 5.437 24h9.125zM15.625 16L20 11.656V16h-4.375z",
  fill: "#fff"
}));

export default SvgComponent;