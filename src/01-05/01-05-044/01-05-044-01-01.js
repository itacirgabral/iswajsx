function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0C0 0 0 8 0 8c0 7 12 7 12 7h8V0h-8zm0 4v9c-9 0-9-4-9-4 0-5 9-5 9-5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M13 1h6v13h-6z"
}));

export default SvgComponent;