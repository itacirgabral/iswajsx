function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 9.515V18h8.485l-1.414-1.414h-5.657v-5.657L9 9.515z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.575 19.06c-1.757-1.757-.49-5.872 2.829-9.192l5.657-5.657c3.32-3.319 7.435-4.585 9.192-2.828l1.414 1.414c1.43 1.43.836 4.417-1.215 7.27l-2.784-2.784c1.806-2.295 2.645-4.425 1.878-5.193-.976-.976-4.142.607-7.071 3.536l-5.657 5.656c-2.929 2.93-4.512 6.095-3.536 7.072.678.677 2.4.102 4.376-1.282l2.762 2.762c-2.578 1.58-5.143 1.928-6.43.64l-1.415-1.413z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.243 5.272v8.485h8.485l-1.414-1.414h-5.657V6.686l-1.414-1.414z"
}));

export default SvgComponent;