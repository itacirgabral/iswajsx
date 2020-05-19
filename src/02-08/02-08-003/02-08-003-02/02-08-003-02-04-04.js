function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25.406 2.665a6 6 0 00-8.486 0L9.85 9.737.656 18.929l1.414 1.414 6.762-6.762a3.99 3.99 0 001.016 1.812 4 4 0 105.657-5.656 3.99 3.99 0 00-1.812-1.017l4.64-4.64a4 4 0 015.657 0 3 3 0 010 4.242l-2.12 2.122 1.413 1.414 2.122-2.121a5 5 0 000-7.072zm-11.314 8.486a2 2 0 11-2.829 2.828 2 2 0 012.829-2.828z"
}));

export default SvgComponent;