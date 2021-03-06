function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 0v22L9 37l-1.406-1.406L22 21.187V5H0V0h24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 0v22.438l-2 2 2 2v.25l-1.375 1.375c1.248 1.973.91 4.745-.969 6.625-1.88 1.879-4.651 2.217-6.625.968L14.656 37h-.312l-1.938-1.969-2 1.969H9l15-15V0h1zM9 37H7.562l-1.406-1.406L21 20.75V6H0V5h22v16.188L7.594 35.593 9 37zm14-11.156l-9.188 9.187.688.719 1.438-1.406c1.562 1.562 4.242 1.382 6-.375 1.757-1.758 1.905-4.438.343-6l1.438-1.407-.719-.718zm-1.781 3.187c.976.977.828 2.735-.344 3.907-1.172 1.171-2.899 1.32-3.875.343l4.219-4.25z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.707 26.56l-1.414 1.414c1.562 1.562 1.404 4.253-.354 6.01-1.757 1.757-4.448 1.916-6.01.354l-1.414 1.414-.707-.707L23 25.852l.707.707zm-2.475 2.474l-4.242 4.243c.976.976 2.717.818 3.889-.354 1.171-1.171 1.33-2.912.353-3.889z"
}));

export default SvgComponent;