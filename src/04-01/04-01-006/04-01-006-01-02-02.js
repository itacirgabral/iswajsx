function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 6V0h-6v1h5v5h1zM10 8a10.97 10.97 0 007.781-3.219l-.718-.718a9.956 9.956 0 01-14.125 0L1 2.125l-.719.688L2.22 4.78A10.97 10.97 0 0010 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 7a9.956 9.956 0 007.063-2.938l-1.407-1.406A7.974 7.974 0 0110 5a7.974 7.974 0 01-5.656-2.344L2.375.687 1 2.125l1.938 1.938A9.956 9.956 0 0010 7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 5c2.21 0 4.209-.896 5.656-2.344l-.719-.719A6.96 6.96 0 0110 4a6.96 6.96 0 01-4.938-2.063L3.095 0l-.719.688 1.969 1.968A7.974 7.974 0 0010 5z"
}));

export default SvgComponent;