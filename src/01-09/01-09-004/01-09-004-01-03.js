function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 13v17s8 0 8-5v-7s0-5-8-5zM0 19h2s0-4 7-4v-2s-9 0-9 6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0v13.125c.75.096 1.426.25 2 .438V0h-2zM19 3l-5.469 10.75c.707.284 1.271.63 1.719 1l5.531-10.844L19 3zM22 10l-5.781 5.781c.574.837.739 1.632.781 2l6.406-6.375L22 10zm-6.094 8c.107.198.216.388.313.594l.593-.594h-.906zM9 30v-2s-8 0-8-3H0c.077.077 0 5 9 5z"
}));

export default SvgComponent;