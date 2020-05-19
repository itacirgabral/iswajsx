function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 15h8v15h-8zM11 0h2v13h-2zM6 15c-4 0-4 4-4 4v3h2v-3c0-2 2-2 2-2h3v-2H6zM17 4h2v9h-2zM23.938 8.219L19.188 13H22l3.375-3.375-1.438-1.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.094 10.313L.5 11.813 9 26.53v-6L3.094 10.313z"
}));

export default SvgComponent;