function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 7a7 7 0 000 14c2.31 0 4.407-.882 6-2.313l-1.344-1.5C17.416 18.305 15.8 19 14 19a5 5 0 110-10 3 3 0 010 6 1 1 0 110-2h1v-2h-1a3 3 0 000 6 5 5 0 100-10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 9a5 5 0 100 10c1.8 0 3.416-.696 4.656-1.813l-1.343-1.468A4.947 4.947 0 0114 17a3 3 0 010-6h1v2h-1a1 1 0 100 2 3 3 0 000-6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.732.919L.42 12.232l1.414 1.414L13.146 2.333 11.732.919zM25.167 14.354L13.854 25.667l1.414 1.414L26.58 15.768l-1.414-1.414z"
}));

export default SvgComponent;