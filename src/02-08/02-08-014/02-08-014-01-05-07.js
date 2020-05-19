function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 13v6.364L21.364 13H15zm.685.685l4 .022-3.978 3.978-.022-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.858 8.05l12.02 12.021c1.172 1.172 2.755 1.488 3.536.707a2 2 0 000-2.828l3.536-3.536a4 4 0 010 5.657l-.707.707a5 5 0 01-7.071 0L.15 8.758l.707-.708zM10 0v6.364L16.364 0H10zm.685.685l4 .022-3.978 3.978-.022-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.828 3.536l9.193 9.192a4 4 0 005.657 0 5 5 0 000-7.071l-3.536 3.535c1.172 1.172 1.647 2.597 1.06 3.182-.585.586-2.01.111-3.181-1.06l-8.485-8.486-.708.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.685 13.685l.022 4 3.978-3.978-4-.022zM10.685.685l.022 4L14.685.707l-4-.022z",
  fill: "#fff"
}));

export default SvgComponent;