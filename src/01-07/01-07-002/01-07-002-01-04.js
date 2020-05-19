function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 14a8 8 0 100 16 8 8 0 000-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 16a6 6 0 100 12 6 6 0 000-12z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 0v14h2V0h-2zM8.688 4.688L7.28 6.093 15.188 14H18L8.687 4.687zM1.406 10.594L0 12l4 4a9.907 9.907 0 011.375-1.469l-3.969-3.937z"
}));

export default SvgComponent;