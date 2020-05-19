function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 15v15h8V15h-8zM10 0v15h2V0h-2zM18.5 2L12 13.281V15h1.281L20.22 3 18.5 2zM0 15v2h10v-2H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.656 9.344L16 15h2v.813l5.063-5.063-1.407-1.406zM.844 23.469l-.5 1.937L10 28v-2.094L.844 23.47z"
}));

export default SvgComponent;