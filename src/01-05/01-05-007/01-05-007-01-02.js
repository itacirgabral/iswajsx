function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 31V14l5-5 5 5v17H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 11.813l-3 3V29h3V11.812z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 4l-4.406 7.594 1.469 1.469L20.718 5 19 4zM11 0v10l1-1 1 1V0h-2zM5 4L3.281 5l4.656 8.063 1.47-1.47L5 4zM1.344 10.5l-1.407 1.438L7 19v-2.813L1.344 10.5zM2.406 21.594L7 26.187V29l-6-6 1.406-1.406z"
}));

export default SvgComponent;