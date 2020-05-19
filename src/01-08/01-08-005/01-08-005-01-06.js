function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 15h8v15H9zM9 0h2v13H9zM4 15c-4 0-4 4-4 4v3h2v-3c0-1 1-1 1-1h4v-3H4zM15 4h2v9h-2zM21.938 8.219L17.188 13H20l3.375-3.375-1.438-1.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 10.406l-.875.5L7 22.812v-2L1 10.406z"
}));

export default SvgComponent;