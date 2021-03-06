function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 49,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M49 9.686L37.686 21H49V9.686z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.624 1.908C3.576-.045 7.059.272 9.402 2.615l4.42 4.42c.047-1.134.436-2.205 1.237-3.006 1.952-1.952 5.435-1.636 7.778.708l4.42 4.419c.047-1.134.436-2.205 1.237-3.005 1.953-1.953 5.435-1.636 7.778.707l2.121 2.121c2.109 2.108 8.486 2.829 8.486 2.829l-7.071 7.07s-.72-6.376-2.829-8.485l-2.121-2.12c-1.562-1.563-3.778-1.88-4.95-.708-1.171 1.172-.855 3.388.707 4.95l2.829 2.828-1.415 1.414L21.423 6.151c-1.562-1.562-3.778-1.879-4.95-.707-1.171 1.171-.855 3.387.707 4.95l2.829 2.828-1.415 1.414L7.988 4.029c-1.562-1.562-3.778-1.878-4.95-.707-1.172 1.172-.855 3.388.707 4.95l2.829 2.829-1.415 1.414-2.828-2.829c-2.343-2.343-2.66-5.825-.707-7.778z"
}));

export default SvgComponent;