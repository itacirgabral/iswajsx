function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 8v2h-3V8h3zM8 8v2H5V8h3zM3 8v2H0V8h3zM13.518 4.068L13 6l-2.898-.776.518-1.932 2.898.776zm-4.83-1.294L8.17 4.706l-2.897-.777.517-1.931 2.898.776zM3.858 1.48l-.517 1.932-2.898-.777L.961.704l2.897.776zM13 12l.518 1.932-2.898.776-.518-1.932L13 12zm-4.83 1.294l.518 1.932-2.898.776-.517-1.931 2.897-.777zm-4.83 1.294l.518 1.932-2.897.776-.518-1.931 2.898-.777z"
}));

export default SvgComponent;