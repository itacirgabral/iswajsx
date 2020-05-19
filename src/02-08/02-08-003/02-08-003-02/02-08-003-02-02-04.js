function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M30.406 2.665a6 6 0 00-8.486 0l-7.07 7.072-3.536 3.535c-2.108 2.108-8.486 2.829-8.486 2.829L9.9 23.17s.72-6.377 2.829-8.485l1.105-1.105a3.99 3.99 0 001.016 1.812 4 4 0 105.657-5.656 3.99 3.99 0 00-1.812-1.017l4.64-4.64a4 4 0 015.657 0 3 3 0 010 4.242l-2.12 2.122 1.413 1.414 2.122-2.121a5 5 0 000-7.072zm-11.314 8.486a2 2 0 11-2.829 2.828 2 2 0 012.829-2.828z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 13.272V26h12.728L0 13.272zm1.016 2.43l9.281 9.282-9.303.022.022-9.303z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.016 15.703l-.022 9.303 9.303-.022-9.28-9.281z",
  fill: "#fff"
}));

export default SvgComponent;