function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.531 14.938C3.875 17.837 0 23.706 0 30.5 0 40.165 7.835 48 17.5 48S35 40.165 35 30.5c0-6.793-3.875-12.663-9.531-15.563l-.907 1.782C29.564 19.29 33 24.489 33 30.5 33 39.06 26.06 46 17.5 46 8.94 46 2 39.06 2 30.5c0-6.01 3.437-11.21 8.438-13.781l-.907-1.782z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 16l5-5 .719.719L13.937 16l4.282 4.281L17.5 21l-5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 15.5v1h6v-1h-6zM12.5 5l5-5 .719.719L13.937 5l4.282 4.281L17.5 10l-5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 4.5v1h6v-1h-6z"
}));

export default SvgComponent;