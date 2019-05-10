define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const pedantic = Object.create(dart.library);
  pedantic.unawaited = function(future) {
  };
  dart.trackLibraries("packages/pedantic/pedantic", {
    "package:pedantic/pedantic.dart": pedantic
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/pedantic/pedantic.dart"],"names":[],"mappings":";;;;;;gCAwB4B;EAAS","file":"pedantic.ddc.js"}');
  // Exports:
  return {
    pedantic: pedantic
  };
});

//# sourceMappingURL=pedantic.ddc.js.map
