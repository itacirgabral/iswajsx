function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 25v14l-7-7 7-7zm-1 2.438L1.406 32 6 36.563v-9.126z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 0C15.538 0 18 2.239 18 5v1.5a6.5 6.5 0 01-6.5 6.5H8a3 3 0 000 6h2.5a7.5 7.5 0 110 15H7v-4h5.5a3.5 3.5 0 100-7H10a7 7 0 010-14h2.5a3.5 3.5 0 100-7H4V0h8.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 27.438v9.125L1.406 32 6 27.437z",
  fill: "#fff"
}));

export default SvgComponent;