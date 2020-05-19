function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.938.438L.094 3.28.813 4l2.156-2.125L5.094 4 7.25 1.875 9.375 4l2.156-2.125L13.656 4l2.156-2.125L17.939 4l2.125-2.125L22.218 4l.718-.719L20.095.437l-2.157 2.126L15.781.437l-2.125 2.126L11.5.437 9.375 2.563 7.219.437 5.094 2.563 2.937.437zM8 5C5.784 5 4 6.784 4 9c0 3.324 1.784 6 4 6h7c2.216 0 4-2.676 4-6 0-2.216-1.784-4-4-4H8zm0 1.5v5A2.495 2.495 0 015.5 9c0-1.385 1.115-2.5 2.5-2.5zm1 0h2v5H9v-5zm3 0h2v5h-2v-5zm3 0c1.385 0 2.5 1.115 2.5 2.5s-1.115 2.5-2.5 2.5v-5z"
}));

export default SvgComponent;