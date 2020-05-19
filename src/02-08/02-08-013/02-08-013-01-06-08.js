function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27 7v6.364l-.707-.707v-4.95h-4.95L20.636 7H27z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.172 10.536l-9.193 9.192a4 4 0 01-5.657 0 5 5 0 010-7.071l3.536 3.535c-1.172 1.172-1.647 2.597-1.06 3.182.585.586 2.01.111 3.181-1.06l8.485-8.486.708.708zM20 0v6.364l-.707-.707V.707h-4.95L13.636 0H20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.172 3.536l-9.193 9.192a4 4 0 01-5.657 0 5 5 0 010-7.071l3.536 3.535c-1.172 1.172-1.647 2.597-1.06 3.182.585.586 2.01.111 3.181-1.06l8.485-8.486.708.708z"
}));

export default SvgComponent;