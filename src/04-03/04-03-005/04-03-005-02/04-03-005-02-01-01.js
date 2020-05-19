function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 47,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.5 0C14.376 0 6.904 6.993 6.094 15.906l2 .188C8.802 8.19 15.412 2 23.5 2c8.088 0 14.698 6.19 15.406 14.094l2-.188C40.096 6.993 32.624 0 23.5 0zm-9 30.094l-1.156 1.625C16.21 33.769 19.707 35 23.5 35s7.29-1.23 10.156-3.281L32.5 30.094a15.403 15.403 0 01-9 2.906c-3.362 0-6.46-1.088-9-2.906zM0 23v2h17v-2H0zM17 26L0 30.563.5 32.5l17.031-4.563L17 26zM.5 15.5L0 17.438 17 22l.531-1.938L.5 15.5zM47 23v2H30v-2h17zM30 26l17 4.563-.5 1.937-17.031-4.563L30 26zM46.5 15.5l.5 1.938L30 22l-.531-1.938L46.5 15.5z"
}));

export default SvgComponent;