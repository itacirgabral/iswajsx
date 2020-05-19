function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 15h8v15h-8zM11 0h2v15h-2zM6 15c-4 0-4 4-4 4v3h2v-2.25V19c0-2 2-2 2-2h5v-2H7.5 6zM17 4h2v11h-2zM23.938 8.219l1.437 1.406L19 16v-2.813l4.938-4.968z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.094 10.313L.5 11.813 11 30v-6L3.094 10.312z"
}));

export default SvgComponent;