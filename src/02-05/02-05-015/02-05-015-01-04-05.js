function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 26V0h-2v26h2zM14.222 23H22v-7.778L14.222 23zM4 26h14l-7 7-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.908 18.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707c-3.905-3.905-10.237-3.905-14.142 0L2.201 20.88l-.707-.707 1.414-1.415zM7.778 13H0V5.222L7.778 13zM19.092 8.757c-4.296-4.295-11.26-4.295-15.556 0l.707.707c3.905-3.905 10.237-3.905 14.142 0l1.414 1.415.707-.707-1.414-1.415z"
}));

export default SvgComponent;