function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7.1V17h9.9l-1.415-1.414h-7.07V8.515L0 7.1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.284 1.444a4 4 0 00-5.657 0l-3.933 3.933c-.176-.66-.498-1.294-1.016-1.812a4 4 0 00-5.657 0L9.192 6.393c-1.795 1.795-7.07 2.829-7.07 2.829l5.656 5.657s1.034-5.276 2.829-7.071l2.828-2.829a2 2 0 012.828 2.829l-2.12 2.12 1.413 1.415 8.486-8.485a2 2 0 012.828 2.828l-3.535 3.536 1.414 1.414 3.535-3.535a4 4 0 000-5.657z"
}));

export default SvgComponent;