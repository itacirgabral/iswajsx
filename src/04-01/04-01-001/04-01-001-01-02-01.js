function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.344 0C1.65 3.078 0 7.089 0 11.5 0 21.165 7.835 29 17.5 29S35 21.165 35 11.5c0-4.411-1.65-8.422-4.344-11.5l-1.468 1.313A15.456 15.456 0 0133 11.5C33 20.06 26.06 27 17.5 27 8.94 27 2 20.06 2 11.5 2 7.603 3.438 4.036 5.813 1.312L4.343 0z"
}));

export default SvgComponent;