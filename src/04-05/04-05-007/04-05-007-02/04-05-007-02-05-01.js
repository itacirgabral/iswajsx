function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.938.438L.094 3.28.813 4l2.156-2.125L5.094 4 7.25 1.875 9.375 4l2.156-2.125L13.656 4l2.156-2.125L17.939 4l2.125-2.125L22.218 4l.718-.719L20.095.437l-2.157 2.126L15.781.437l-2.125 2.126L11.5.437 9.375 2.563 7.219.437 5.094 2.563 2.937.437zM6 5v6h10V5h-1v4h-2V5h-1v4h-2V5H9v4H7V5H6z"
}));

export default SvgComponent;