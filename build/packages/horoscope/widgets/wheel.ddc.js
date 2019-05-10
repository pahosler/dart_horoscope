define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/horoscope/widgets/asyncHoroscope'], function(dart_sdk, animation, animation$, material, asyncHoroscope) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__animation__animation_controller = animation.src__animation__animation_controller;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__container = animation.src__widgets__container;
  const src__rendering__stack = animation.src__rendering__stack;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__icon = animation.src__widgets__icon;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const src__animation__animation = animation$.src__animation__animation;
  const src__painting__basic_types = animation$.src__painting__basic_types;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const src__material__floating_action_button = material.src__material__floating_action_button;
  const src__material__icons = material.src__material__icons;
  const widgets__asyncHoroscope = asyncHoroscope.widgets__asyncHoroscope;
  const widgets__wheel = Object.create(dart.library);
  const $modulo = dartx['%'];
  const $_get = dartx._get;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let AnimationStatusToNull = () => (AnimationStatusToNull = dart.constFn(dart.fnType(core.Null, [src__animation__animation.AnimationStatus])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  widgets__wheel.Wheel = class Wheel extends src__widgets__framework.StatefulWidget {
    createState() {
      return new widgets__wheel._WheelState.new();
    }
  };
  (widgets__wheel.Wheel.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    widgets__wheel.Wheel.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = widgets__wheel.Wheel.prototype;
  dart.addTypeTests(widgets__wheel.Wheel);
  dart.setMethodSignature(widgets__wheel.Wheel, () => ({
    __proto__: dart.getMethods(widgets__wheel.Wheel.__proto__),
    createState: dart.fnType(widgets__wheel._WheelState, [])
  }));
  const _counter = dart.privateName(widgets__wheel, "_counter");
  const _pressed = dart.privateName(widgets__wheel, "_pressed");
  const _isbuttonDisabled = dart.privateName(widgets__wheel, "_isbuttonDisabled");
  const _offset = dart.privateName(widgets__wheel, "_offset");
  const _angle = dart.privateName(widgets__wheel, "_angle");
  const _signs = dart.privateName(widgets__wheel, "_signs");
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
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  let const$84;
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  let const$95;
  let const$96;
  let const$97;
  let const$98;
  let const$99;
  let const$100;
  let const$101;
  let const$102;
  let const$103;
  let const$104;
  let const$105;
  let const$106;
  let const$107;
  let const$108;
  let const$109;
  let const$110;
  let const$111;
  let const$112;
  let const$113;
  let const$114;
  let const$115;
  let const$116;
  let const$117;
  let const$118;
  let const$119;
  let const$120;
  let const$121;
  let const$122;
  let const$123;
  let const$124;
  let const$125;
  let const$126;
  let const$127;
  let const$128;
  let const$129;
  let const$130;
  let const$131;
  let const$132;
  let const$133;
  let const$134;
  let const$135;
  let const$136;
  let const$137;
  let const$138;
  let const$139;
  let const$140;
  let const$141;
  let const$142;
  let const$143;
  let const$144;
  let const$145;
  let const$146;
  let const$147;
  let const$148;
  let const$149;
  let const$150;
  let const$151;
  let const$152;
  let const$153;
  let const$154;
  let const$155;
  let const$156;
  let const$157;
  let const$158;
  let const$159;
  let const$160;
  let const$161;
  let const$162;
  let const$163;
  let const$164;
  let const$165;
  let const$166;
  let const$167;
  let const$168;
  let const$169;
  let const$170;
  let const$171;
  let const$172;
  let const$173;
  let const$174;
  let const$175;
  let const$176;
  let const$177;
  let const$178;
  let const$179;
  let const$180;
  let const$181;
  let const$182;
  let const$183;
  let const$184;
  let const$185;
  let const$186;
  let const$187;
  let const$188;
  let const$189;
  let const$190;
  let const$191;
  let const$192;
  let const$193;
  let const$194;
  let const$195;
  let const$196;
  let const$197;
  let const$198;
  let const$199;
  let const$200;
  let const$201;
  let const$202;
  let const$203;
  let const$204;
  let const$205;
  let const$206;
  let const$207;
  let const$208;
  let const$209;
  let const$210;
  let const$211;
  let const$212;
  let const$213;
  let const$214;
  let const$215;
  let const$216;
  let const$217;
  let const$218;
  let const$219;
  let const$220;
  let const$221;
  let const$222;
  let const$223;
  let const$224;
  let const$225;
  let const$226;
  let const$227;
  let const$228;
  let const$229;
  let const$230;
  let const$231;
  let const$232;
  let const$233;
  let const$234;
  let const$235;
  let const$236;
  let const$237;
  let const$238;
  let const$239;
  let const$240;
  let const$241;
  let const$242;
  let const$243;
  let const$244;
  let const$245;
  let const$246;
  let const$247;
  let const$248;
  let const$249;
  let const$250;
  let const$251;
  const State_SingleTickerProviderStateMixin$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(widgets__wheel.Wheel) {};
  (State_SingleTickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.SingleTickerProviderStateMixin$(widgets__wheel.Wheel)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(widgets__wheel.Wheel));
  widgets__wheel._WheelState = class _WheelState extends State_SingleTickerProviderStateMixin$ {
    initState() {
      let t0;
      super.initState();
      this.controller = (t0 = new src__animation__animation_controller.AnimationController.new({duration: new core.Duration.new({milliseconds: 700}), vsync: this}), t0.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          this[_counter] = (dart.notNull(this[_counter]) + 1)[$modulo](12);
        }, VoidToNull()));
      }, VoidToNull())), t0.addStatusListener(dart.fn(status => {
        this.setState(dart.fn(() => {
          this[_isbuttonDisabled] = dart.equals(status, src__animation__animation.AnimationStatus.forward);
          this[_counter] = dart.equals(src__animation__animation.AnimationStatus.forward, status) ? this[_counter] : this[_pressed];
        }, VoidToNull()));
      }, AnimationStatusToNull())), t0);
    }
    wheelNum(signNum) {
      this.sign = this[_signs][$_get](signNum);
      this.controller.forward({from: 0.0});
      this.setState(dart.fn(() => {
        this[_pressed] = signNum;
      }, VoidToNull()));
    }
    build(context) {
      return new src__widgets__basic.Flex.new({direction: src__painting__basic_types.Axis.vertical, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.end, mainAxisSize: src__rendering__flex.MainAxisSize.max, children: JSArrayOfWidget().of([new src__widgets__basic.Flexible.new({flex: 3, child: new src__widgets__container.Container.new({width: core.double.infinity, child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: JSArrayOfWidget().of([new src__widgets__basic.Positioned.new({top: 10.0, height: 300.0, left: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) - 300 - (dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) - 300) / 2, width: 300.0, child: new src__widgets__basic.Transform.rotate({angle: (dart.notNull(this[_offset]) + dart.notNull(this[_counter]) * dart.notNull(this[_angle])) * dart.notNull(math.pi) / 180, child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.passthrough, children: JSArrayOfWidget().of([new src__widgets__image.Image.asset("images/zodiacwheel.png", {fit: src__painting__box_fit.BoxFit.scaleDown, $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 31, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 27, name: "name"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 27, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({top: 8.0, left: 92.0, child: new src__widgets__basic.Opacity.new({opacity: 0.0, child: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.test(this[_isbuttonDisabled]) ? null : dart.fn(() => this.wheelNum(0), VoidTovoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.star, {size: 80.0, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 38, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 39, name: "icon"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 33, name: "size"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 31, name: "onPressed"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 31, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 34, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 29, name: "opacity"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 25, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 27, name: "top"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 27, name: "left"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({top: 38.0, left: 38.0, child: new src__widgets__basic.Opacity.new({opacity: 0.0, child: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.test(this[_isbuttonDisabled]) ? null : dart.fn(() => this.wheelNum(1), VoidTovoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.star, {size: 80.0, $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 40, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 51, name: "icon"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 57, name: "size"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 118, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$26 || (const$26 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 119, column: 33, name: "onPressed"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 34, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 29, name: "opacity"}))), const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 118, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 112, column: 25, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 114, column: 27, name: "top"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 115, column: 27, name: "left"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({top: 92.0, left: 9.0, child: new src__widgets__basic.Opacity.new({opacity: 0.0, child: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.test(this[_isbuttonDisabled]) ? null : dart.fn(() => this.wheelNum(2), VoidTovoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.star, {size: 80.0, $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 40, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 51, name: "icon"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 57, name: "size"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$43 || (const$43 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 132, column: 33, name: "onPressed"}))), const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 34, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 130, column: 29, name: "opacity"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 25, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$52 || (const$52 = dart.constList([const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 27, name: "top"}))), const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 27, name: "left"}))), const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({bottom: 92.0, left: 9.0, child: new src__widgets__basic.Opacity.new({opacity: 0.0, child: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.test(this[_isbuttonDisabled]) ? null : dart.fn(() => this.wheelNum(3), VoidTovoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.star, {size: 80.0, $creationLocationd_0dea112b090073317d4: const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 148, column: 40, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$56 || (const$56 = dart.constList([const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 148, column: 51, name: "icon"}))), const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 148, column: 57, name: "size"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$60 || (const$60 = dart.constList([const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 33, name: "onPressed"}))), const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 148, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 142, column: 34, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$64 || (const$64 = dart.constList([const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 29, name: "opacity"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 138, column: 25, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$69 || (const$69 = dart.constList([const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 140, column: 27, name: "bottom"}))), const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 141, column: 27, name: "left"}))), const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 142, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({bottom: 40.0, left: 39.0, child: new src__widgets__basic.Opacity.new({opacity: 0.0, child: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.test(this[_isbuttonDisabled]) ? null : dart.fn(() => this.wheelNum(4), VoidTovoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.star, {size: 80.0, $creationLocationd_0dea112b090073317d4: const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 161, column: 40, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$73 || (const$73 = dart.constList([const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 161, column: 51, name: "icon"}))), const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 161, column: 57, name: "size"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 157, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$77 || (const$77 = dart.constList([const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 158, column: 33, name: "onPressed"}))), const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 161, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 155, column: 34, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$81 || (const$81 = dart.constList([const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 156, column: 29, name: "opacity"}))), const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 157, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$87 || (const$87 = dart.const(new src__widgets__widget_inspector._Location.new({line: 151, column: 25, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$86 || (const$86 = dart.constList([const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 153, column: 27, name: "bottom"}))), const$84 || (const$84 = dart.const(new src__widgets__widget_inspector._Location.new({line: 154, column: 27, name: "left"}))), const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 155, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({bottom: 10.0, left: 92.0, child: new src__widgets__basic.Opacity.new({opacity: 0.0, child: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.test(this[_isbuttonDisabled]) ? null : dart.fn(() => this.wheelNum(5), VoidTovoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.star, {size: 80.0, $creationLocationd_0dea112b090073317d4: const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 174, column: 40, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$90 || (const$90 = dart.constList([const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 174, column: 51, name: "icon"}))), const$89 || (const$89 = dart.const(new src__widgets__widget_inspector._Location.new({line: 174, column: 57, name: "size"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 170, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$94 || (const$94 = dart.constList([const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 33, name: "onPressed"}))), const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 174, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 34, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$98 || (const$98 = dart.constList([const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 169, column: 29, name: "opacity"}))), const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 170, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 164, column: 25, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$103 || (const$103 = dart.constList([const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 166, column: 27, name: "bottom"}))), const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 167, column: 27, name: "left"}))), const$102 || (const$102 = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({top: 232.0, left: 152.0, child: new src__widgets__basic.Opacity.new({opacity: 0.0, child: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.test(this[_isbuttonDisabled]) ? null : dart.fn(() => this.wheelNum(6), VoidTovoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.star, {size: 80.0, $creationLocationd_0dea112b090073317d4: const$108 || (const$108 = dart.const(new src__widgets__widget_inspector._Location.new({line: 187, column: 40, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$107 || (const$107 = dart.constList([const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 187, column: 51, name: "icon"}))), const$106 || (const$106 = dart.const(new src__widgets__widget_inspector._Location.new({line: 187, column: 57, name: "size"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$112 || (const$112 = dart.const(new src__widgets__widget_inspector._Location.new({line: 183, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$111 || (const$111 = dart.constList([const$109 || (const$109 = dart.const(new src__widgets__widget_inspector._Location.new({line: 184, column: 33, name: "onPressed"}))), const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 187, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$116 || (const$116 = dart.const(new src__widgets__widget_inspector._Location.new({line: 181, column: 34, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$115 || (const$115 = dart.constList([const$113 || (const$113 = dart.const(new src__widgets__widget_inspector._Location.new({line: 182, column: 29, name: "opacity"}))), const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 183, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$121 || (const$121 = dart.const(new src__widgets__widget_inspector._Location.new({line: 177, column: 25, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$120 || (const$120 = dart.constList([const$117 || (const$117 = dart.const(new src__widgets__widget_inspector._Location.new({line: 179, column: 27, name: "top"}))), const$118 || (const$118 = dart.const(new src__widgets__widget_inspector._Location.new({line: 180, column: 27, name: "left"}))), const$119 || (const$119 = dart.const(new src__widgets__widget_inspector._Location.new({line: 181, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({top: 203.0, left: 204.0, child: new src__widgets__basic.Opacity.new({opacity: 0.0, child: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.test(this[_isbuttonDisabled]) ? null : dart.fn(() => this.wheelNum(7), VoidTovoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.star, {size: 80.0, $creationLocationd_0dea112b090073317d4: const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 200, column: 40, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$124 || (const$124 = dart.constList([const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 200, column: 51, name: "icon"}))), const$123 || (const$123 = dart.const(new src__widgets__widget_inspector._Location.new({line: 200, column: 57, name: "size"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$129 || (const$129 = dart.const(new src__widgets__widget_inspector._Location.new({line: 196, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$128 || (const$128 = dart.constList([const$126 || (const$126 = dart.const(new src__widgets__widget_inspector._Location.new({line: 197, column: 33, name: "onPressed"}))), const$127 || (const$127 = dart.const(new src__widgets__widget_inspector._Location.new({line: 200, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$133 || (const$133 = dart.const(new src__widgets__widget_inspector._Location.new({line: 194, column: 34, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$132 || (const$132 = dart.constList([const$130 || (const$130 = dart.const(new src__widgets__widget_inspector._Location.new({line: 195, column: 29, name: "opacity"}))), const$131 || (const$131 = dart.const(new src__widgets__widget_inspector._Location.new({line: 196, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$138 || (const$138 = dart.const(new src__widgets__widget_inspector._Location.new({line: 190, column: 25, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$137 || (const$137 = dart.constList([const$134 || (const$134 = dart.const(new src__widgets__widget_inspector._Location.new({line: 192, column: 27, name: "top"}))), const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 193, column: 27, name: "left"}))), const$136 || (const$136 = dart.const(new src__widgets__widget_inspector._Location.new({line: 194, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({bottom: 93.0, right: 9.0, child: new src__widgets__basic.Opacity.new({opacity: 0.0, child: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.test(this[_isbuttonDisabled]) ? null : dart.fn(() => this.wheelNum(8), VoidTovoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.star, {size: 80.0, $creationLocationd_0dea112b090073317d4: const$142 || (const$142 = dart.const(new src__widgets__widget_inspector._Location.new({line: 213, column: 40, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$141 || (const$141 = dart.constList([const$139 || (const$139 = dart.const(new src__widgets__widget_inspector._Location.new({line: 213, column: 51, name: "icon"}))), const$140 || (const$140 = dart.const(new src__widgets__widget_inspector._Location.new({line: 213, column: 57, name: "size"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$146 || (const$146 = dart.const(new src__widgets__widget_inspector._Location.new({line: 209, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$145 || (const$145 = dart.constList([const$143 || (const$143 = dart.const(new src__widgets__widget_inspector._Location.new({line: 210, column: 33, name: "onPressed"}))), const$144 || (const$144 = dart.const(new src__widgets__widget_inspector._Location.new({line: 213, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$150 || (const$150 = dart.const(new src__widgets__widget_inspector._Location.new({line: 207, column: 34, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$149 || (const$149 = dart.constList([const$147 || (const$147 = dart.const(new src__widgets__widget_inspector._Location.new({line: 208, column: 29, name: "opacity"}))), const$148 || (const$148 = dart.const(new src__widgets__widget_inspector._Location.new({line: 209, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$155 || (const$155 = dart.const(new src__widgets__widget_inspector._Location.new({line: 203, column: 25, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$154 || (const$154 = dart.constList([const$151 || (const$151 = dart.const(new src__widgets__widget_inspector._Location.new({line: 205, column: 27, name: "bottom"}))), const$152 || (const$152 = dart.const(new src__widgets__widget_inspector._Location.new({line: 206, column: 27, name: "right"}))), const$153 || (const$153 = dart.const(new src__widgets__widget_inspector._Location.new({line: 207, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({top: 92.0, right: 10.0, child: new src__widgets__basic.Opacity.new({opacity: 0.0, child: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.test(this[_isbuttonDisabled]) ? null : dart.fn(() => this.wheelNum(9), VoidTovoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.star, {size: 80.0, $creationLocationd_0dea112b090073317d4: const$159 || (const$159 = dart.const(new src__widgets__widget_inspector._Location.new({line: 226, column: 40, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$158 || (const$158 = dart.constList([const$156 || (const$156 = dart.const(new src__widgets__widget_inspector._Location.new({line: 226, column: 51, name: "icon"}))), const$157 || (const$157 = dart.const(new src__widgets__widget_inspector._Location.new({line: 226, column: 57, name: "size"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$163 || (const$163 = dart.const(new src__widgets__widget_inspector._Location.new({line: 222, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$162 || (const$162 = dart.constList([const$160 || (const$160 = dart.const(new src__widgets__widget_inspector._Location.new({line: 223, column: 33, name: "onPressed"}))), const$161 || (const$161 = dart.const(new src__widgets__widget_inspector._Location.new({line: 226, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$167 || (const$167 = dart.const(new src__widgets__widget_inspector._Location.new({line: 220, column: 34, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$166 || (const$166 = dart.constList([const$164 || (const$164 = dart.const(new src__widgets__widget_inspector._Location.new({line: 221, column: 29, name: "opacity"}))), const$165 || (const$165 = dart.const(new src__widgets__widget_inspector._Location.new({line: 222, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$172 || (const$172 = dart.const(new src__widgets__widget_inspector._Location.new({line: 216, column: 25, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$171 || (const$171 = dart.constList([const$168 || (const$168 = dart.const(new src__widgets__widget_inspector._Location.new({line: 218, column: 27, name: "top"}))), const$169 || (const$169 = dart.const(new src__widgets__widget_inspector._Location.new({line: 219, column: 27, name: "right"}))), const$170 || (const$170 = dart.const(new src__widgets__widget_inspector._Location.new({line: 220, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({top: 39.0, right: 39.0, child: new src__widgets__basic.Opacity.new({opacity: 0.0, child: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.test(this[_isbuttonDisabled]) ? null : dart.fn(() => this.wheelNum(10), VoidTovoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.star, {size: 80.0, $creationLocationd_0dea112b090073317d4: const$176 || (const$176 = dart.const(new src__widgets__widget_inspector._Location.new({line: 239, column: 40, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$175 || (const$175 = dart.constList([const$173 || (const$173 = dart.const(new src__widgets__widget_inspector._Location.new({line: 239, column: 51, name: "icon"}))), const$174 || (const$174 = dart.const(new src__widgets__widget_inspector._Location.new({line: 239, column: 57, name: "size"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$180 || (const$180 = dart.const(new src__widgets__widget_inspector._Location.new({line: 235, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$179 || (const$179 = dart.constList([const$177 || (const$177 = dart.const(new src__widgets__widget_inspector._Location.new({line: 236, column: 33, name: "onPressed"}))), const$178 || (const$178 = dart.const(new src__widgets__widget_inspector._Location.new({line: 239, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$184 || (const$184 = dart.const(new src__widgets__widget_inspector._Location.new({line: 233, column: 34, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$183 || (const$183 = dart.constList([const$181 || (const$181 = dart.const(new src__widgets__widget_inspector._Location.new({line: 234, column: 29, name: "opacity"}))), const$182 || (const$182 = dart.const(new src__widgets__widget_inspector._Location.new({line: 235, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$189 || (const$189 = dart.const(new src__widgets__widget_inspector._Location.new({line: 229, column: 25, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$188 || (const$188 = dart.constList([const$185 || (const$185 = dart.const(new src__widgets__widget_inspector._Location.new({line: 231, column: 27, name: "top"}))), const$186 || (const$186 = dart.const(new src__widgets__widget_inspector._Location.new({line: 232, column: 27, name: "right"}))), const$187 || (const$187 = dart.const(new src__widgets__widget_inspector._Location.new({line: 233, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({top: 8.0, right: 92.0, child: new src__widgets__basic.Opacity.new({opacity: 0.0, child: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.test(this[_isbuttonDisabled]) ? null : dart.fn(() => this.wheelNum(11), VoidTovoid()), child: new src__widgets__icon.Icon.new(src__material__icons.Icons.star, {size: 80.0, $creationLocationd_0dea112b090073317d4: const$193 || (const$193 = dart.const(new src__widgets__widget_inspector._Location.new({line: 252, column: 40, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$192 || (const$192 = dart.constList([const$190 || (const$190 = dart.const(new src__widgets__widget_inspector._Location.new({line: 252, column: 51, name: "icon"}))), const$191 || (const$191 = dart.const(new src__widgets__widget_inspector._Location.new({line: 252, column: 57, name: "size"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$197 || (const$197 = dart.const(new src__widgets__widget_inspector._Location.new({line: 248, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$196 || (const$196 = dart.constList([const$194 || (const$194 = dart.const(new src__widgets__widget_inspector._Location.new({line: 249, column: 33, name: "onPressed"}))), const$195 || (const$195 = dart.const(new src__widgets__widget_inspector._Location.new({line: 252, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$201 || (const$201 = dart.const(new src__widgets__widget_inspector._Location.new({line: 246, column: 34, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$200 || (const$200 = dart.constList([const$198 || (const$198 = dart.const(new src__widgets__widget_inspector._Location.new({line: 247, column: 29, name: "opacity"}))), const$199 || (const$199 = dart.const(new src__widgets__widget_inspector._Location.new({line: 248, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$206 || (const$206 = dart.const(new src__widgets__widget_inspector._Location.new({line: 242, column: 25, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$205 || (const$205 = dart.constList([const$202 || (const$202 = dart.const(new src__widgets__widget_inspector._Location.new({line: 244, column: 27, name: "top"}))), const$203 || (const$203 = dart.const(new src__widgets__widget_inspector._Location.new({line: 245, column: 27, name: "right"}))), const$204 || (const$204 = dart.const(new src__widgets__widget_inspector._Location.new({line: 246, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$210 || (const$210 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 28, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$209 || (const$209 = dart.constList([const$207 || (const$207 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 23, name: "fit"}))), const$208 || (const$208 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 23, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$214 || (const$214 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 36, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$213 || (const$213 = dart.constList([const$211 || (const$211 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 21, name: "angle"}))), const$212 || (const$212 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$221 || (const$221 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 17, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$220 || (const$220 = dart.constList([const$215 || (const$215 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 19, name: "top"}))), const$216 || (const$216 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 19, name: "height"}))), const$217 || (const$217 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 19, name: "left"}))), const$218 || (const$218 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 19, name: "width"}))), const$219 || (const$219 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$225 || (const$225 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 20, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$224 || (const$224 = dart.constList([const$222 || (const$222 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 15, name: "fit"}))), const$223 || (const$223 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$229 || (const$229 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 18, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$228 || (const$228 = dart.constList([const$226 || (const$226 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 13, name: "width"}))), const$227 || (const$227 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$233 || (const$233 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 9, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$232 || (const$232 = dart.constList([const$230 || (const$230 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 11, name: "flex"}))), const$231 || (const$231 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Flexible.new({flex: 2, child: new src__widgets__container.Container.new({height: 200.0, width: 300.0, child: new widgets__asyncHoroscope.AsyncHoroscope.new({zodiac: widgets__asyncHoroscope.fetchPost(this.sign), $creationLocationd_0dea112b090073317d4: const$236 || (const$236 = dart.const(new src__widgets__widget_inspector._Location.new({line: 268, column: 20, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$235 || (const$235 = dart.constList([const$234 || (const$234 = dart.const(new src__widgets__widget_inspector._Location.new({line: 269, column: 15, name: "zodiac"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$241 || (const$241 = dart.const(new src__widgets__widget_inspector._Location.new({line: 265, column: 18, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$240 || (const$240 = dart.constList([const$237 || (const$237 = dart.const(new src__widgets__widget_inspector._Location.new({line: 266, column: 13, name: "height"}))), const$238 || (const$238 = dart.const(new src__widgets__widget_inspector._Location.new({line: 267, column: 13, name: "width"}))), const$239 || (const$239 = dart.const(new src__widgets__widget_inspector._Location.new({line: 268, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$245 || (const$245 = dart.const(new src__widgets__widget_inspector._Location.new({line: 263, column: 9, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$244 || (const$244 = dart.constList([const$242 || (const$242 = dart.const(new src__widgets__widget_inspector._Location.new({line: 264, column: 11, name: "flex"}))), const$243 || (const$243 = dart.const(new src__widgets__widget_inspector._Location.new({line: 265, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$251 || (const$251 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 12, file: "org-dartlang-app:///packages/horoscope/widgets/wheel.dart", parameterLocations: const$250 || (const$250 = dart.constList([const$246 || (const$246 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 7, name: "direction"}))), const$247 || (const$247 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 7, name: "mainAxisAlignment"}))), const$248 || (const$248 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 7, name: "mainAxisSize"}))), const$249 || (const$249 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
    dispose() {
      this.controller.dispose();
      super.dispose();
    }
  };
  (widgets__wheel._WheelState.new = function() {
    this[_counter] = 0;
    this[_pressed] = 0;
    this[_isbuttonDisabled] = false;
    this.sign = null;
    this[_offset] = 15;
    this[_angle] = 30;
    this[_signs] = JSArrayOfString().of(["capricorn", "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius"]);
    this.animation = null;
    this.controller = null;
    widgets__wheel._WheelState.__proto__.new.call(this);
    ;
  }).prototype = widgets__wheel._WheelState.prototype;
  dart.addTypeTests(widgets__wheel._WheelState);
  dart.setMethodSignature(widgets__wheel._WheelState, () => ({
    __proto__: dart.getMethods(widgets__wheel._WheelState.__proto__),
    wheelNum: dart.fnType(dart.void, [core.int]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(widgets__wheel._WheelState, () => ({
    __proto__: dart.getFields(widgets__wheel._WheelState.__proto__),
    [_counter]: dart.fieldType(core.int),
    [_pressed]: dart.fieldType(core.int),
    [_isbuttonDisabled]: dart.fieldType(core.bool),
    sign: dart.fieldType(core.String),
    [_offset]: dart.finalFieldType(core.int),
    [_angle]: dart.finalFieldType(core.int),
    [_signs]: dart.finalFieldType(core.List$(core.String)),
    animation: dart.fieldType(src__animation__animation.Animation$(core.double)),
    controller: dart.fieldType(src__animation__animation_controller.AnimationController)
  }));
  dart.trackLibraries("packages/horoscope/widgets/wheel", {
    "package:horoscope/widgets/wheel.dart": widgets__wheel
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/horoscope/widgets/wheel.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAS+B;IAAa;;;QAH/B;;AAAQ,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAgC1B;MACN,wBAAiB,4EACH,qCAAuB,cAAa,QAC9C,eAAY;QACP,cAAS;UACZ,iBAA0B,CAAL,aAAT,kBAAW,YAAK;;yBAG9B,qBAAkB,QAAC;QACd,cAAS;UACZ,0BAA2B,YAAP,MAAM,EAAoB;UAC9C,iBAAmC,YAAR,mDAAW,MAAM,IAAG,iBAAW;;;IAGlE;aAGkB;MAChB,YAAO,AAAM,oBAAC,OAAO;MACrB,AAAW,+BAAc;MACpB,cAAS;QACP,iBAAW,OAAO;;IAE3B;UAG0B;AACxB,YAAO,8CACW,6DACqB,0DACV,iDACT,sBAChB,4CACQ,UACC,kDACS,6BACP,wCACS,iDACI,sBAChB,6CACO,cACG,aACiC,AAAO,aAA9B,AAAY,AAAK,wCAAd,OAAO,gBAAe,MACE,CAAN,aAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe,OAAM,UACxC,cACU,iDAEsB,AACzB,CADI,aAAR,iBAAmB,aAAT,+BAAW,8BACpB,WACL,YACG,wCACS,sDACI,sBACV,oCACJ,gCACY,6lBAEd,6CAEO,WACC,aACC,8CACI,YACF,yFAED,2BAAoB,OAAO,cAAM,cAAS,0BACvC,gCACC,wCACA,q4EAKd,6CAEO,YACC,aACC,8CACI,YACF,yFACQ,2BACL,OACA,cAAM,cAAS,0BACd,gCAAW,wCAAY,s5EAGtC,6CAEO,YACC,YACC,8CACI,YACF,yFACQ,2BACL,OACA,cAAM,cAAS,0BACd,gCAAW,wCAAY,s5EAGtC,gDAEU,YACF,YACC,8CACI,YACF,yFACQ,2BACL,OACA,cAAM,cAAS,0BACd,gCAAW,wCAAY,y5EAGtC,gDAEU,YACF,aACC,8CACI,YACF,yFACQ,2BACL,OACA,cAAM,cAAS,0BACd,gCAAW,wCAAY,y5EAGtC,gDAEU,YACF,aACC,8CACI,YACF,yFACQ,2BACL,OACA,cAAM,cAAS,0BACd,gCAAW,wCAAY,m6EAGtC,6CAEO,aACC,cACC,8CACI,YACF,yFACQ,2BACL,OACA,cAAM,cAAS,0BACd,gCAAW,wCAAY,w7EAGtC,6CAEO,aACC,cACC,8CACI,YACF,yFACQ,2BACL,OACA,cAAM,cAAS,0BACd,gCAAW,wCAAY,w7EAGtC,gDAEU,aACD,YACA,8CACI,YACF,yFACQ,2BACL,OACA,cAAM,cAAS,0BACd,gCAAW,wCAAY,47EAGtC,6CAEO,aACC,aACC,8CACI,YACF,yFACQ,2BACL,OACA,cAAM,cAAS,0BACd,gCAAW,wCAAY,y7EAGtC,6CAEO,aACE,aACA,8CACI,YACF,yFACQ,2BACL,OACA,cAAM,cAAS,2BACd,gCAAW,wCAAY,y7EAGtC,6CAEO,YACE,aACA,8CACI,YACF,yFACQ,2BACL,OACA,cAAM,cAAS,2BACd,gCAAW,wCAAY,ivMAWtD,4CACQ,UACC,mDACG,cACD,cACA,wDACG,kCAAU;IAM9B;;MAIE,AAAW;MACL;IACR;;;IA3QI,iBAAW;IACX,iBAAW;IACV,0BAAoB;IAClB;IACD,gBAAU;IACV,eAAS;IACT,eAAS,sBACb,aACA,YACA,UACA,SACA,UACA,UACA,UACA,OACA,SACA,SACA,WACA;IAEgB;IACE;;;EAuPtB","file":"wheel.ddc.js"}');
  // Exports:
  return {
    widgets__wheel: widgets__wheel
  };
});

//# sourceMappingURL=wheel.ddc.js.map
