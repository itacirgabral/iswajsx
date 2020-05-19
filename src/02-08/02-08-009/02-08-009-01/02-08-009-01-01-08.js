function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28 9.9V0h-9.9L28 9.9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.757 5.657l-5.656 5.657a3 3 0 01-4.243 0 2.98 2.98 0 01-.862-1.967l-3.38 3.38a4 4 0 01-5.658 0l-.707-.706C.518 9.287.201 5.17 2.544 2.828l4.243 4.243c-1.562 1.562-2.195 3.462-1.414 4.243a2 2 0 002.828 0l6.762-6.762v4.64c0 .256.114.512.31.707a1 1 0 001.413 0l5.657-5.656 1.414 1.414z"
}));

export default SvgComponent;