function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 14v15h8V14H8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M9 15h6v13H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.281 6.063L14.844 12h2.312L20 7.062l-1.719-1zM12 0h2v12h-2zM7.719 6.063L6 7.063 8.844 12h2.312L7.72 6.062zM0 14h6v2H0zM21.594 17.594L17 22.187V25l6-6-1.406-1.406z"
}));

export default SvgComponent;