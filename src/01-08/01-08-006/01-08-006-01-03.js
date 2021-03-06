function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 15h8v15H9zM9 0h2v15H9zM4 15c-4 0-4 4-4 4v3h2v-3c0-1 1-1 1-1h6v-3H4zM15 4h2v11h-2zM21.938 8.219l1.437 1.406L17 16v-2.813l4.938-4.968z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.219 18L9 26.281v-2L5.375 18H4.219z"
}));

export default SvgComponent;