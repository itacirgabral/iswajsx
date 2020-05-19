function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 9l-5 5v17h10V14l-5-5zM4 4L2.281 5l4.281 7.438 1.47-1.47L4 4zM10 0v8.563l1-.97 1 1V0h-2zM18 4l-3.875 6.688 1.469 1.468L19.719 5 18 4zM21.656 10.5L17 15.188V18l6.063-6.063-1.407-1.437zM1.406 17.594L0 19l5 5v-2.813l-3.594-3.593z"
}));

export default SvgComponent;