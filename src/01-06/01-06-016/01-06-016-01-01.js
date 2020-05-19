function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 6C0 6 0 14 0 14c0 7 12 7 12 7h8V6h-8zm0 4v9c-9 0-9-4-9-4 0-5 9-5 9-5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M13 7h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.344.344L6.219 2.469l5.656 5.656L12 6h2L8.344.344z"
}));

export default SvgComponent;