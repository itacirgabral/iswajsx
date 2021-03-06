function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.222 2.565a5 5 0 000 7.071l2.121 2.121 1.414-1.414-2.121-2.121a3 3 0 010-4.243l.707-.707a4 4 0 015.657 0l6.055 6.055a3.99 3.99 0 00-1.812 1.016A4 4 0 0019.899 16a3.99 3.99 0 001.017-1.812l7.469 7.469 1.414-1.414-9.9-9.9-8.485-8.485a6 6 0 00-8.485 0l-.707.707zm13.435 9.192a2 2 0 112.828 2.829 2 2 0 01-2.828-2.829z"
}));

export default SvgComponent;