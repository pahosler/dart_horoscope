define(['dart_sdk', 'packages/flutter_web/material', 'packages/horoscope/widgets/horoscope', 'packages/flutter_web/animation'], function(dart_sdk, material, horoscope, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__app = material.src__material__app;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__colors = material.src__material__colors;
  const widgets__horoscope = horoscope.widgets__horoscope;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__binding = animation.src__widgets__binding;
  const main = Object.create(dart.library);
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  main.Horoscope = class Horoscope extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({title: "Horoscope", theme: src__material__theme_data.ThemeData.new({primaryColor: src__material__colors.Colors.pink._get(100), backgroundColor: src__material__colors.Colors.pink._get(200), scaffoldBackgroundColor: src__material__colors.Colors.pink._get(50)}), home: new widgets__horoscope.HomePage.new({title: "Daily Horoscope", $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 13, file: "org-dartlang-app:///packages/horoscope/main.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 22, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 12, file: "org-dartlang-app:///packages/horoscope/main.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "title"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 7, name: "theme"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 7, name: "home"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.Horoscope.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.Horoscope.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.Horoscope.prototype;
  dart.addTypeTests(main.Horoscope);
  dart.setMethodSignature(main.Horoscope, () => ({
    __proto__: dart.getMethods(main.Horoscope.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  let const$7;
  let const$8;
  main.main = function() {
    return src__widgets__binding.runApp(new main.Horoscope.new({$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 23, file: "org-dartlang-app:///packages/horoscope/main.dart", parameterLocations: const$7 || (const$7 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/horoscope/main", {
    "package:horoscope/main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/horoscope/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;UAW4B;AACxB,YAAO,gDACE,oBACA,uDACkB,AAAI,uCAAC,uBACF,AAAI,uCAAC,+BACG,AAAI,uCAAC,aACnC,4CAAgB;IAE1B;;;;;;EACF;;;;;;;;;AAfe,wCAAO;EAAY","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
