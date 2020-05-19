function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.344 0C1.65 3.078 0 7.089 0 11.5 0 21.165 7.835 29 17.5 29S35 21.165 35 11.5c0-4.411-1.65-8.422-4.344-11.5l-1.093 1A15.946 15.946 0 0133.5 11.5c0 8.837-7.163 16-16 16s-16-7.163-16-16C1.5 7.482 2.991 3.81 5.438 1L4.343 0z"
}));

export default SvgComponent;