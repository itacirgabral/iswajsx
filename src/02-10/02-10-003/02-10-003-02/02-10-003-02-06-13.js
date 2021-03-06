function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 13h-2l-3.5 3.5L7 13H5l5.5 5.5L16 13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 32c2.761 0 5-5.373 5-12v-.5H9.875C9.54 25.522 8.395 30 7 30c-1.657 0-3-6.268-3-14S5.343 2 7 2c1.356 0 2.472 4.237 2.844 10H11v-1C11 4.925 8.985 0 6.5 0h-2C1.462 0 0 5.82 0 13v7c0 6.627 2.134 12 6 12z"
}));

export default SvgComponent;