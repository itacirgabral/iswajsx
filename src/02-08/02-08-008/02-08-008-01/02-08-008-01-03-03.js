function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v9.9l1.414-1.415v-7.07h7.071L9.9 0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 5.657l10.606 10.606a4 4 0 005.657 0l1.414-1.414c2.734-2.733 3.05-6.849.707-9.192l-4.95 4.95c1.563 1.562 2.196 3.461 1.415 4.242a2 2 0 01-2.829 0L5.657 4.243 4.243 5.657z"
}));

export default SvgComponent;