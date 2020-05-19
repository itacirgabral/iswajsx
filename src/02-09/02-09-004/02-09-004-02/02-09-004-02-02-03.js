function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 25v14l7-7-7-7zm1 2.438L16.594 32 12 36.563v-9.126z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0C2.462 0 0 2.239 0 5v1.5A6.5 6.5 0 006.5 13H10a3 3 0 010 6H7.5a7.5 7.5 0 100 15H11v-4H5.5a3.5 3.5 0 110-7H8A7 7 0 008 9H5.5a3.5 3.5 0 010-7H14V0H5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 27.438v9.125L16.594 32 12 27.437z",
  fill: "#fff"
}));

export default SvgComponent;