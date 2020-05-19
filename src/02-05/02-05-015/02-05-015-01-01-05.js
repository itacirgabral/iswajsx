function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 26V0h2v26h-2zM14.222 15H22v7.778L14.222 15zM18 26H4l7 7 7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.188 17.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L1.5 17.844l.688-.719zM7.778 5H0v7.778L7.778 5zM19.813 7.125l-1.438 1.406c-1.772 1.436-4.49 1.938-7.063 1.938-2.571 0-5.29-.502-7.062-1.938l-.719.719a10.97 10.97 0 007.781 3.219 10.97 10.97 0 007.782-3.219L20.5 7.844l-.688-.719z"
}));

export default SvgComponent;