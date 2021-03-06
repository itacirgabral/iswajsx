function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 6V0h-6v1h5v5h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 5a8.725 8.725 0 006.25-2.625l-.719-.719A7.707 7.707 0 0110 4a7.707 7.707 0 01-5.531-2.344L2.844 0l-.719.719L3.75 2.375A8.725 8.725 0 0010 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 7c2.985 0 5.677-1.223 7.625-3.188L16.25 2.375A8.725 8.725 0 0110 5a8.725 8.725 0 01-6.25-2.625L2.125.719.719 2.125l1.656 1.688A10.704 10.704 0 0010 7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 8a11.72 11.72 0 008.344-3.469l-.719-.718A10.704 10.704 0 0110 7a10.704 10.704 0 01-7.625-3.188L.719 2.125 0 2.844 1.656 4.53A11.72 11.72 0 0010 8z"
}));

export default SvgComponent;