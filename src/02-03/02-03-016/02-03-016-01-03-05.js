function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 23V0h1v23h-1zM3 23l7 7 7-7h-2.844L10 27.156 5.844 23H3zM7 23V0h1v23H7zM21 14.781V7h-7.781l1 1H20v5.781l1 1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 23V0h4v23H8z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.188 9.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L.5 9.844l.688-.719z"
}));

export default SvgComponent;