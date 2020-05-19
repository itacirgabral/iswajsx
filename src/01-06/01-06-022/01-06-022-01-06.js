function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 7v15h8V7h-8zM10 0L8.594 1.406 12.188 5H15l-5-5zM0 7h13v4H0zM27.938 11.219L24 15.188V18l5.375-5.375-1.438-1.406z"
}));

export default SvgComponent;