function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v15h8V0h-8zM9.875.094C-.013.973 0 8 0 8c0 .357.034.678.094 1H3c0-3.493 4.352-4.558 7-4.875V.094c-.039.003-.086-.004-.125 0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M13 1h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.25 3.938L21 7.188V10l4.656-4.656-1.406-1.407z"
}));

export default SvgComponent;