function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v15h8V0h-8zM9.875.094C-.013.973 0 8 0 8c0 5.193 6.59 6.498 10 6.844v-1.906C3.012 12.39 3 9 3 9c0-3.493 4.352-4.558 7-4.875V.094c-.039.003-.086-.004-.125 0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M13 1h3v13h-3z"
}));

export default SvgComponent;