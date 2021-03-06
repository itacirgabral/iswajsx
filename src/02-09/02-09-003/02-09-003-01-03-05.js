function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M40 1v10l-1.5-1.5v-7h-7L30 1h10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 0a3 3 0 00-3 3c0 .828.332 1.582.875 2.125l.781.813-2.218 1.187C13.12 7.75 11.389 8 9.5 8 5.358 8 2 6.866 2 3H0c0 4.97 4.253 9 9.5 9 2.164 0 4.316-.44 5.719-1.875l2.75-2.813 2.406 2.532C21.866 11.413 24.153 12 26.5 12c2.664 0 5.056-1.046 6.781-2.719L36 7l-1.781-1.781L31.25 7.25c-1.291.556-2.954.75-4.75.75-2.071 0-3.955-.296-5.313-1.063l-1.843-1 .781-.812A2.996 2.996 0 0021 3a3 3 0 00-3-3zm0 1a2 2 0 012 2c0 .552-.232 1.044-.594 1.406L18 5.188l-1.406-.782A1.982 1.982 0 0116 3a2 2 0 012-2z"
}));

export default SvgComponent;