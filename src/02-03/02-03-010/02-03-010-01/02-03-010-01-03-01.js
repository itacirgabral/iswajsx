function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0l-7 7h2.719l4.219-4.25L11.688 7H14.5l-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 6v14H6V7H4v15h21V6h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 6v9h-7V7H9v10h11V6h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 6v11H9V7H6v13h17V6h-3z",
  fill: "#fff"
}));

export default SvgComponent;