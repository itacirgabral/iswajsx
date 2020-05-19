function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0a3 3 0 013 3c0 .828-.332 1.582-.875 2.125l-.781.813 2.218 1.187C22.88 7.75 24.611 8 26.5 8 30.642 8 34 6.866 34 3h2c0 4.97-4.253 9-9.5 9-2.164 0-4.316-.44-5.719-1.875l-2.75-2.813-2.406 2.532C14.134 11.413 11.847 12 9.5 12c-2.664 0-5.056-1.046-6.781-2.719L0 7l1.781-1.781L4.75 7.25C6.041 7.806 7.704 8 9.5 8c2.071 0 3.955-.296 5.313-1.063l1.843-1-.781-.812A2.996 2.996 0 0115 3a3 3 0 013-3zm0 1a2 2 0 00-2 2c0 .552.232 1.044.594 1.406L18 5.188l1.406-.782C19.768 4.044 20 3.552 20 3a2 2 0 00-2-2z"
}));

export default SvgComponent;