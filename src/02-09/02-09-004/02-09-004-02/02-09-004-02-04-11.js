function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 0C12.538 0 15 2.239 15 5v1.5A6.5 6.5 0 018.5 13H5a3 3 0 000 6h2.5a7.5 7.5 0 110 15H4v-4h5.5a3.5 3.5 0 100-7H7A7 7 0 017 9h2.5a3.5 3.5 0 100-7H1V0h8.5z"
}));

export default SvgComponent;