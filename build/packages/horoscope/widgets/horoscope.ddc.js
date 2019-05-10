define(['dart_sdk', 'packages/flutter_web/animation', 'packages/horoscope/widgets/asyncHoroscope', 'packages/flutter_web/material', 'packages/horoscope/widgets/wheel'], function(dart_sdk, animation, asyncHoroscope, material, wheel) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const widgets__asyncHoroscope = asyncHoroscope.widgets__asyncHoroscope;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const widgets__wheel = wheel.widgets__wheel;
  const widgets__horoscope = Object.create(dart.library);
  widgets__horoscope.HomePage = class HomePage extends src__widgets__framework.StatefulWidget {
    get zodiac() {
      return this[zodiac$];
    }
    set zodiac(value) {
      super.zodiac = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new widgets__horoscope._HomePageState.new();
    }
  };
  (widgets__horoscope.HomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let zodiac = opts && 'zodiac' in opts ? opts.zodiac : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[zodiac$] = zodiac;
    this[title$] = title;
    widgets__horoscope.HomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = widgets__horoscope.HomePage.prototype;
  dart.addTypeTests(widgets__horoscope.HomePage);
  const zodiac$ = Symbol("HomePage.zodiac");
  const title$ = Symbol("HomePage.title");
  dart.setMethodSignature(widgets__horoscope.HomePage, () => ({
    __proto__: dart.getMethods(widgets__horoscope.HomePage.__proto__),
    createState: dart.fnType(widgets__horoscope._HomePageState, [])
  }));
  dart.setFieldSignature(widgets__horoscope.HomePage, () => ({
    __proto__: dart.getFields(widgets__horoscope.HomePage.__proto__),
    zodiac: dart.finalFieldType(async.Future$(widgets__asyncHoroscope.Zodiac)),
    title: dart.finalFieldType(core.String)
  }));
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  widgets__horoscope._HomePageState = class _HomePageState extends src__widgets__framework.State$(widgets__horoscope.HomePage) {
    initState() {
      super.initState();
    }
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({centerTitle: true, title: new src__widgets__text.Text.new(this.widget.title, {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 16, file: "org-dartlang-app:///packages/horoscope/widgets/horoscope.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 28, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 15, file: "org-dartlang-app:///packages/horoscope/widgets/horoscope.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 9, name: "centerTitle"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 9, name: "title"})))], src__widgets__widget_inspector._Location))})))}), body: new widgets__wheel.Wheel.new({$creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 13, file: "org-dartlang-app:///packages/horoscope/widgets/horoscope.dart", parameterLocations: const$6 || (const$6 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 12, file: "org-dartlang-app:///packages/horoscope/widgets/horoscope.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 7, name: "appBar"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (widgets__horoscope._HomePageState.new = function() {
    widgets__horoscope._HomePageState.__proto__.new.call(this);
    ;
  }).prototype = widgets__horoscope._HomePageState.prototype;
  dart.addTypeTests(widgets__horoscope._HomePageState);
  dart.setMethodSignature(widgets__horoscope._HomePageState, () => ({
    __proto__: dart.getMethods(widgets__horoscope._HomePageState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.trackLibraries("packages/horoscope/widgets/horoscope", {
    "package:horoscope/widgets/horoscope.dart": widgets__horoscope
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/horoscope/widgets/horoscope.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAMuB;;;;;;IAIR;;;;;;;AAGmB;IAAgB;;;QANlC;QAAU;QAAa;;IAAb;IAAa;AAAU,+DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAYtD;IACR;UAG0B;AACxB,YAAO,mDACG,oDACO,aACN,gCAAK,AAAO,yhCAEf;IAEV;;;;;EACF","file":"horoscope.ddc.js"}');
  // Exports:
  return {
    widgets__horoscope: widgets__horoscope
  };
});

//# sourceMappingURL=horoscope.ddc.js.map
