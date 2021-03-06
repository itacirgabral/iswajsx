function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6V0h6v1H1v5H0zM10 8a10.97 10.97 0 01-7.781-3.219l.719-.718a9.956 9.956 0 0014.124 0L19 2.125l.719.688L17.78 4.78A10.97 10.97 0 0110 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 7a9.956 9.956 0 01-7.063-2.938l1.407-1.406A7.974 7.974 0 0010 5c2.21 0 4.209-.896 5.656-2.344L17.625.687 19 2.125l-1.938 1.938A9.956 9.956 0 0110 7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 5a7.974 7.974 0 01-5.656-2.344l.718-.719A6.96 6.96 0 0010 4a6.96 6.96 0 004.938-2.063L16.905 0l.719.688-1.969 1.968A7.974 7.974 0 0110 5z"
}));

export default SvgComponent;