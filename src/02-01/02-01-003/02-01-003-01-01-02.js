function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.75 7v4.187L8.125 9.093l-.75 1.313L11 12.5l-3.625 2.093.75 1.313 3.625-2.094V18h1.5v-4.188l3.625 2.094.75-1.313L14 12.5l3.625-2.094-.75-1.313-3.625 2.094V7h-1.5zM.646 13.727l10.607 10.606 1.06-1.06L1.707 12.666l-1.061 1.06zM12.666 1.706l10.607 10.606 1.06-1.06L13.727.645l-1.06 1.06z"
}));

export default SvgComponent;