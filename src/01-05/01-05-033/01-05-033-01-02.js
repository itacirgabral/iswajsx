function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 5h8v15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M13 6h3v13h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0C3.358 0 0 2.239 0 5h3c0-1.105 2.015-2 4.5-2s4.5.895 4.5 2h3c0-2.761-3.358-5-7.5-5zM0 16c0 2.761 3.358 5 7.5 5 1.688 0 3.247-.373 4.5-1v-2.281C11.006 18.494 9.366 19 7.5 19 4.462 19 2 17.657 2 16H0z"
}));

export default SvgComponent;