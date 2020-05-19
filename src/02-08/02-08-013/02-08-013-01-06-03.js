function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7v6.364l.707-.707v-4.95h4.95L6.364 7H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.828 10.536l9.193 9.192a4 4 0 005.657 0 5 5 0 000-7.071l-3.536 3.535c1.172 1.172 1.647 2.597 1.06 3.182-.585.586-2.01.111-3.181-1.06L3.536 9.828l-.708.708zM7 0v6.364l.707-.707V.707h4.95L13.364 0H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.828 3.536l9.193 9.192a4 4 0 005.657 0 5 5 0 000-7.071l-3.536 3.535c1.172 1.172 1.647 2.597 1.06 3.182-.585.586-2.01.111-3.181-1.06l-8.485-8.486-.708.708z"
}));

export default SvgComponent;