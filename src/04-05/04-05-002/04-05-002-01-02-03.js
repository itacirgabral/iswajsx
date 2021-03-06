function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17.5c0 6.155 3.195 11.537 8 14.656 1.562 1.052 3.665 1.524 5.125 2.813.734.648 1.719 2.375 1.719 2.375C15.339 38.319 16.33 39 17.5 39s2.161-.681 2.656-1.656c0 0 .985-1.727 1.719-2.375 1.46-1.29 3.505-1.889 5.125-2.813 4.805-3.12 8-8.5 8-14.656C35 7.835 27.165 0 17.5 0S0 7.835 0 17.5zm2 0C2 8.94 8.94 2 17.5 2 26.06 2 33 8.94 33 17.5c0 5.415-2.792 10.166-7 12.938-1.729.932-3.233 2.21-4.781 3.406-.832.88-1.938 3.062-1.938 3.062A1.993 1.993 0 0117.5 38c-.78 0-1.451-.444-1.781-1.094 0 0-1.106-2.182-1.938-3.062-1.505-1.265-3.085-2.415-4.781-3.407-4.208-2.77-7-7.522-7-12.937z"
}));

export default SvgComponent;