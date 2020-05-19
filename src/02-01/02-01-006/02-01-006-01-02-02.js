function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 16v4H6v2h4v4h2v-4h4v-2h-4v-4h-2zM1.5 19.875L.094 21.313l10.594 10.593 1.437-1.406L1.5 19.875zM11.406 10L10 11.406 20.594 22 22 20.594 11.406 10zM21.313.094L19.875 1.5 30.5 12.125l1.406-1.438L21.313.095zM20 6v4h-4v2h4v4h2v-4h4v-2h-4V6h-2z"
}));

export default SvgComponent;