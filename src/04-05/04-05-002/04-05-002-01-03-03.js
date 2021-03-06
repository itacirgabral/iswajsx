function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6.156C1.562 7.208 3.665 7.68 5.125 8.97c.734.648 1.719 2.375 1.719 2.375C7.339 12.319 8.33 13 9.5 13s2.161-.681 2.656-1.656c0 0 .985-1.727 1.719-2.375C15.335 7.679 17.38 7.08 19 6.156 17.34 2.542 13.737 0 9.5 0S1.66 2.542 0 6.156zm2.594-.593C4.138 3.41 6.649 2 9.5 2s5.362 1.41 6.906 3.563c-1.066.651-2.291 1.333-3.187 2.28-.832.881-1.938 3.063-1.938 3.063A1.993 1.993 0 019.5 12c-.78 0-1.451-.444-1.781-1.094 0 0-1.106-2.182-1.938-3.062-.896-.948-2.128-1.62-3.187-2.282z"
}));

export default SvgComponent;