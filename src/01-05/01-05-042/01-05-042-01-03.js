function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0C6.875 0 6.096 4.602 6 5.75V6c0 6 6 6 6 6H17.938c-1.632 2.497-4.664 2.931-5.625 3H12c-5.519 0-8.484-2.54-10.094-5.281L0 10.813C3.872 16.997 12 17 12 17c9 0 9-9 9-9 0-8-8-8-8-8z"
}));

export default SvgComponent;