function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 26l7 7 7-7h-2.844L11 30.156 6.844 26H4zM10 26V0h2v26h-2zM22 22.781V15h-7.781l1 1H21v5.781l1 1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.188 17.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L1.5 17.844l.688-.719zM0 12.781V5h7.781l-1 1H1v5.781l-1 1zM19.813 7.125l-1.438 1.406c-1.772 1.436-4.49 1.938-7.063 1.938-2.571 0-5.29-.502-7.062-1.938l-.719.719a10.97 10.97 0 007.781 3.219 10.97 10.97 0 007.782-3.219L20.5 7.844l-.688-.719z"
}));

export default SvgComponent;