function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 7h15v15H15z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M17 9h11v11H17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 7h14v2H0zM12 0l-1.406 1.406L15.188 6H18l-6-6zM6.188 9L13 15.813V13L9 9H6.187z"
}));

export default SvgComponent;