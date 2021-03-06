function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35c1.264 0 2.5-.12 3.688-.375.472-.092.936-.257 1.406-.438 1.225-.456 2.929-1.107 4.218-1.187.978-.06 2.875.469 2.875.469 1.04.34 2.237.107 3.063-.719a3.008 3.008 0 00.719-3.063s-.53-1.897-.469-2.875c.08-1.283.703-2.998 1.156-4.218.172-.47.345-.952.469-1.407C34.879 20 35 18.764 35 17.5 35 7.835 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16 0 1.127-.092 2.22-.313 3.281l-.406 1.407c-.462 1.444-1.088 3.373-1.062 4.28.034 1.212.812 3.532.812 3.532.227.693.051 1.48-.5 2.031a1.997 1.997 0 01-2.031.5s-2.32-.778-3.531-.812c-.905-.026-2.807.632-4.25 1.093l-1.438.376c-1.06.22-2.154.312-3.281.312-8.837 0-16-7.163-16-16s7.163-16 16-16z"
}));

export default SvgComponent;