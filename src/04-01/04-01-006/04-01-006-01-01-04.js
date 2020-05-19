function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 44
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 6V0h6v1H9v5H8zM18 8a10.97 10.97 0 01-7.781-3.219l.719-.718a9.956 9.956 0 0014.124 0L27 2.125l.719.688L25.78 4.78A10.97 10.97 0 0118 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 7a9.956 9.956 0 01-7.063-2.938l1.407-1.406A7.974 7.974 0 0018 5c2.21 0 4.209-.896 5.656-2.344L25.625.687 27 2.125l-1.938 1.938A9.956 9.956 0 0118 7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 5a7.974 7.974 0 01-5.656-2.344l.719-.719A6.96 6.96 0 0018 4a6.96 6.96 0 004.938-2.063L24.905 0l.719.688-1.969 1.968A7.974 7.974 0 0118 5zM17.5 9C7.835 9 0 16.835 0 26.5S7.835 44 17.5 44 35 36.165 35 26.5 27.165 9 17.5 9zm0 2C26.06 11 33 17.94 33 26.5 33 35.06 26.06 42 17.5 42 8.94 42 2 35.06 2 26.5 2 17.94 8.94 11 17.5 11z"
}));

export default SvgComponent;