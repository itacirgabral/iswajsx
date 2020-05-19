function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 5v5H9V6H5V5h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 10c1.38 0 2.626-.564 3.531-1.469l-.687-.687A4.01 4.01 0 015 9a4 4 0 110-8c1.568 0 2.907.905 3.563 2.219l.874-.438C8.616 1.147 6.954 0 5 0a5 5 0 000 10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 8c.828 0 1.582-.332 2.125-.875l-.719-.719A1.982 1.982 0 015 7a2 2 0 111.781-2.906l.875-.438C7.161 2.681 6.17 2 5 2a3 3 0 000 6z"
}));

export default SvgComponent;