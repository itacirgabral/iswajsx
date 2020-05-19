function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 2.1V12h9.9l-1.415-1.414h-7.07V3.515L0 2.1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.97 2.1C14.238-.632 9.489-.316 6.365 2.809c-.527.527-1.59.883-2.52 1.104L2.829 4.93l4.243 4.243 1.017-1.017c.221-.929.577-1.992 1.104-2.519 2.344-2.343 5.193-3.293 6.364-2.121 1.562 1.562.296 5.36-2.828 8.485l.707.707c3.905-3.905 5.488-8.654 3.536-10.606z"
}));

export default SvgComponent;