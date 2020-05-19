function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 8v2h3V8H1zm5 0v2h3V8H6zm5 0v2h3V8h-3zM.482 4.068L1 6l2.898-.776-.518-1.932-2.898.776zm4.83-1.294l.518 1.932 2.897-.777-.517-1.931-2.898.776zm4.83-1.294l.517 1.932 2.898-.777-.518-1.931-2.897.776zM1 12l-.518 1.932 2.898.776.518-1.932L1 12zm4.83 1.294l-.518 1.932 2.898.776.517-1.931-2.897-.777zm4.83 1.294l-.518 1.932 2.897.776.518-1.931-2.898-.777z"
}));

export default SvgComponent;