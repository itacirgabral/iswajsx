function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 13v17s8 0 8-5v-7s0-5-8-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v13c.743 0 1.389.047 2 .125V0H9zM0 19h2s0-4 7-4v-2s-9 0-9 6zM15 5v9.563c1.608 1.177 1.937 2.665 2 3.218V5h-2zM21.938 8.219L17 13.188V16l6.375-6.375-1.438-1.406zM9 30v-2s-8 0-8-3H0c.077.077 0 5 9 5z"
}));

export default SvgComponent;