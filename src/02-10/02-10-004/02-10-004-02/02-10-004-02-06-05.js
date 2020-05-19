function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 16h2l3.5 3.5L9 16h2l-5.5 5.5L0 16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 32c-2.402 0-4.425-4.079-4.906-9.5h1.281C6.872 26.942 7.85 30 9 30c1.657 0 3-6.268 3-14S10.657 2 9 2C7.894 2 6.95 4.833 6.437 9H5.095c.385-5.118 2.2-9 4.406-9h2C14.538 0 16 5.82 16 13v7c0 6.627-2.134 12-6 12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 10h2l3.5 3.5L9 10h2l-5.5 5.5L0 10z"
}));

export default SvgComponent;