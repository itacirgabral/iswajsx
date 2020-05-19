function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v4.031c.161-.02.332-.031.5-.031.168 0 .339.012.5.031V0H7zM2.906 1.688l-.719.718 2.657 2.656c.238-.24.497-.458.812-.625l-2.75-2.75zm9.188 0l-2.75 2.75c.315.166.574.384.812.625l2.656-2.657-.718-.719zM.5 6.5v1h3.563A2.48 2.48 0 014 7c0-.175.029-.333.063-.5H.5zm10.438 0c.033.167.062.325.062.5s-.029.333-.063.5H14.5v-1h-3.563zM4.843 8.938l-2.657 2.656.72.719 2.75-2.75a3.333 3.333 0 01-.813-.626zm5.312 0c-.238.24-.497.458-.812.624l2.75 2.75.719-.718-2.657-2.656zM7 9.967V14h1V9.969c-.161.02-.332.031-.5.031-.168 0-.339-.012-.5-.031z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 4C5.567 4 4 5.343 4 7s1.567 3 3.5 3S11 8.657 11 7 9.433 4 7.5 4zm0 1c1.38 0 2.5.895 2.5 2S8.88 9 7.5 9 5 8.105 5 7s1.12-2 2.5-2z"
}));

export default SvgComponent;