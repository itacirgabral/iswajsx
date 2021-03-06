function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.531 14.938C3.875 17.837 0 23.706 0 30.5 0 40.165 7.835 48 17.5 48S35 40.165 35 30.5c0-6.793-3.875-12.663-9.531-15.563l-.907 1.782C29.564 19.29 33 24.489 33 30.5 33 39.06 26.06 46 17.5 46 8.94 46 2 39.06 2 30.5c0-6.01 3.437-11.21 8.438-13.781l-.907-1.782z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.5 16l-5-5-.719.719L21.063 16l-4.282 4.281.719.719 5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 14v1h-6v-1h6zM18.5 17v1h-6v-1h6zM22.5 5l-5-5-.719.719L21.063 5 16.78 9.281 17.5 10l5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 3v1h-6V3h6zM18.5 6v1h-6V6h6z"
}));

export default SvgComponent;