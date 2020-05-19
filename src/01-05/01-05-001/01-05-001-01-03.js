function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 9l-5 5v17h10V14l-5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 4L2.281 5l4.656 8.063 1.47-1.47L4 4zM10 0v10l1-1 1 1V0h-2zM18 4l-4.406 7.594 1.469 1.469L19.718 5 18 4zM21.656 10.5L16 16.188V19l7.063-7.063-1.407-1.437zM1.406 17.594L0 19l6 6v-2.813l-4.594-4.593z"
}));

export default SvgComponent;