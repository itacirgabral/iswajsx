function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27 20l-7 7-7-7h14zm-2.406 1h-9.188L20 25.563 24.594 21zM5 0a6 6 0 016 6v5h4a6 6 0 016 6v3h-2v-3c0-2.21-2.133-3.733-4-4l-4-.563V14a3 3 0 11-3-3h1.625L9 6c-.234-1.871-1.79-4-4-4H0V0h5zm3 12a2 2 0 102 2l-.219-1.75L8 12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.594 21L20 25.563 15.406 21h9.188z",
  fill: "#fff"
}));

export default SvgComponent;