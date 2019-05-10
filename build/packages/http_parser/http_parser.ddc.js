define(['dart_sdk', 'packages/string_scanner/src/eager_span_scanner', 'packages/source_span/source_span', 'packages/collection/src/canonicalized_map', 'packages/typed_data/typed_buffers', 'packages/charcode/ascii'], function(dart_sdk, eager_span_scanner, source_span, canonicalized_map, typed_buffers, ascii) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__string_scanner = eager_span_scanner.src__string_scanner;
  const src__span_exception = source_span.src__span_exception;
  const src__canonicalized_map = canonicalized_map.src__canonicalized_map;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const ascii$ = ascii.ascii;
  const src__scan = Object.create(dart.library);
  const src__authentication_challenge = Object.create(dart.library);
  const src__utils = Object.create(dart.library);
  const src__case_insensitive_map = Object.create(dart.library);
  const src__media_type = Object.create(dart.library);
  const src__http_date = Object.create(dart.library);
  const src__chunked_coding = Object.create(dart.library);
  const src__chunked_coding__decoder = Object.create(dart.library);
  const src__chunked_coding__encoder = Object.create(dart.library);
  const http_parser = Object.create(dart.library);
  const $add = dartx.add;
  const $substring = dartx.substring;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $_set = dartx._set;
  const $toLowerCase = dartx.toLowerCase;
  const $contains = dartx.contains;
  const $split = dartx.split;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $forEach = dartx.forEach;
  const $toString = dartx.toString;
  const $indexOf = dartx.indexOf;
  const $isNotEmpty = dartx.isNotEmpty;
  const $asUint8List = dartx.asUint8List;
  const $toRadixString = dartx.toRadixString;
  const $toUpperCase = dartx.toUpperCase;
  const $codeUnits = dartx.codeUnits;
  const $setRange = dartx.setRange;
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let UnmodifiableMapViewOfString$String = () => (UnmodifiableMapViewOfString$String = dart.constFn(collection.UnmodifiableMapView$(core.String, core.String)))();
  let CaseInsensitiveMapOfString = () => (CaseInsensitiveMapOfString = dart.constFn(src__case_insensitive_map.CaseInsensitiveMap$(core.String)))();
  let ListOfAuthenticationChallenge = () => (ListOfAuthenticationChallenge = dart.constFn(core.List$(src__authentication_challenge.AuthenticationChallenge)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidToAuthenticationChallenge = () => (VoidToAuthenticationChallenge = dart.constFn(dart.fnType(src__authentication_challenge.AuthenticationChallenge, [])))();
  let VoidToListOfAuthenticationChallenge = () => (VoidToListOfAuthenticationChallenge = dart.constFn(dart.fnType(ListOfAuthenticationChallenge(), [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let VoidToMediaType = () => (VoidToMediaType = dart.constFn(dart.fnType(src__media_type.MediaType, [])))();
  let LinkedHashMapOfString$String = () => (LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))();
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  let intAndStringToNull = () => (intAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.int, core.String])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  src__scan.parseList = function(T, scanner, parseElement) {
    let result = _interceptors.JSArray$(T).of([]);
    while (dart.test(scanner.scan(","))) {
      scanner.scan(src__scan.whitespace);
    }
    result[$add](parseElement());
    scanner.scan(src__scan.whitespace);
    while (dart.test(scanner.scan(","))) {
      scanner.scan(src__scan.whitespace);
      if (dart.test(scanner.matches(",")) || dart.test(scanner.isDone)) continue;
      result[$add](parseElement());
      scanner.scan(src__scan.whitespace);
    }
    return result;
  };
  src__scan.expectQuotedString = function(scanner, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    if (name == null) name = "quoted string";
    scanner.expect(src__scan._quotedString, {name: name});
    let string = scanner.lastMatch._get(0);
    return string[$substring](1, string.length - 1)[$replaceAllMapped](src__scan._quotedPair, dart.fn(match => match._get(1), MatchToString()));
  };
  dart.defineLazy(src__scan, {
    /*src__scan.token*/get token() {
      return core.RegExp.new("[^()<>@,;:\"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+");
    },
    /*src__scan._lws*/get _lws() {
      return core.RegExp.new("(?:\\r\\n)?[ \\t]+");
    },
    /*src__scan._quotedString*/get _quotedString() {
      return core.RegExp.new("\"(?:[^\"\\x00-\\x1F\\x7F]|\\\\.)*\"");
    },
    /*src__scan._quotedPair*/get _quotedPair() {
      return core.RegExp.new("\\\\(.)");
    },
    /*src__scan.nonToken*/get nonToken() {
      return core.RegExp.new("[()<>@,;:\"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]");
    },
    /*src__scan.whitespace*/get whitespace() {
      return core.RegExp.new("(?:" + dart.str(src__scan._lws.pattern) + ")*");
    }
  });
  src__authentication_challenge.AuthenticationChallenge = class AuthenticationChallenge extends core.Object {
    get scheme() {
      return this[scheme$];
    }
    set scheme(value) {
      super.scheme = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    static parseHeader(header) {
      return src__utils.wrapFormatException(ListOfAuthenticationChallenge(), "authentication header", header, dart.fn(() => {
        let scanner = new src__string_scanner.StringScanner.new(header);
        scanner.scan(src__scan.whitespace);
        let challenges = src__scan.parseList(src__authentication_challenge.AuthenticationChallenge, scanner, dart.fn(() => {
          let scheme = src__authentication_challenge.AuthenticationChallenge._scanScheme(scanner, {whitespaceName: "\" \" or \"=\""});
          let params = new (IdentityMapOfString$String()).new();
          while (dart.test(scanner.scan(","))) {
            scanner.scan(src__scan.whitespace);
          }
          src__authentication_challenge.AuthenticationChallenge._scanAuthParam(scanner, params);
          let beforeComma = scanner.position;
          while (dart.test(scanner.scan(","))) {
            scanner.scan(src__scan.whitespace);
            if (dart.test(scanner.matches(",")) || dart.test(scanner.isDone)) continue;
            scanner.expect(src__scan.token, {name: "a token"});
            let name = scanner.lastMatch._get(0);
            scanner.scan(src__scan.whitespace);
            if (!dart.test(scanner.scan("="))) {
              scanner.position = beforeComma;
              break;
            }
            scanner.scan(src__scan.whitespace);
            if (dart.test(scanner.scan(src__scan.token))) {
              params[$_set](name, scanner.lastMatch._get(0));
            } else {
              params[$_set](name, src__scan.expectQuotedString(scanner, {name: "a token or a quoted string"}));
            }
            scanner.scan(src__scan.whitespace);
            beforeComma = scanner.position;
          }
          return new src__authentication_challenge.AuthenticationChallenge.new(scheme, params);
        }, VoidToAuthenticationChallenge()));
        scanner.expectDone();
        return challenges;
      }, VoidToListOfAuthenticationChallenge()));
    }
    static parse(challenge) {
      return src__utils.wrapFormatException(src__authentication_challenge.AuthenticationChallenge, "authentication challenge", challenge, dart.fn(() => {
        let scanner = new src__string_scanner.StringScanner.new(challenge);
        scanner.scan(src__scan.whitespace);
        let scheme = src__authentication_challenge.AuthenticationChallenge._scanScheme(scanner);
        let params = new (IdentityMapOfString$String()).new();
        src__scan.parseList(dart.void, scanner, dart.fn(() => src__authentication_challenge.AuthenticationChallenge._scanAuthParam(scanner, params), VoidTovoid()));
        scanner.expectDone();
        return new src__authentication_challenge.AuthenticationChallenge.new(scheme, params);
      }, VoidToAuthenticationChallenge()));
    }
    static _scanScheme(scanner, opts) {
      let whitespaceName = opts && 'whitespaceName' in opts ? opts.whitespaceName : null;
      scanner.expect(src__scan.token, {name: "a token"});
      let scheme = scanner.lastMatch._get(0)[$toLowerCase]();
      scanner.scan(src__scan.whitespace);
      if (scanner.lastMatch == null || !scanner.lastMatch._get(0)[$contains](" ")) {
        scanner.expect(" ", {name: whitespaceName});
      }
      return scheme;
    }
    static _scanAuthParam(scanner, params) {
      scanner.expect(src__scan.token, {name: "a token"});
      let name = scanner.lastMatch._get(0);
      scanner.scan(src__scan.whitespace);
      scanner.expect("=");
      scanner.scan(src__scan.whitespace);
      if (dart.test(scanner.scan(src__scan.token))) {
        params[$_set](name, scanner.lastMatch._get(0));
      } else {
        params[$_set](name, src__scan.expectQuotedString(scanner, {name: "a token or a quoted string"}));
      }
      scanner.scan(src__scan.whitespace);
    }
  };
  (src__authentication_challenge.AuthenticationChallenge.new = function(scheme, parameters) {
    this[scheme$] = scheme;
    this[parameters$] = new (UnmodifiableMapViewOfString$String()).new(new (CaseInsensitiveMapOfString()).from(parameters));
    ;
  }).prototype = src__authentication_challenge.AuthenticationChallenge.prototype;
  dart.addTypeTests(src__authentication_challenge.AuthenticationChallenge);
  const scheme$ = Symbol("AuthenticationChallenge.scheme");
  const parameters$ = Symbol("AuthenticationChallenge.parameters");
  dart.setFieldSignature(src__authentication_challenge.AuthenticationChallenge, () => ({
    __proto__: dart.getFields(src__authentication_challenge.AuthenticationChallenge.__proto__),
    scheme: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  src__utils.wrapFormatException = function(T, name, value, body) {
    try {
      return body();
    } catch (e) {
      let ex = dart.getThrown(e);
      if (src__span_exception.SourceSpanFormatException.is(ex)) {
        let error = ex;
        dart.throw(new src__span_exception.SourceSpanFormatException.new("Invalid " + dart.str(name) + ": " + dart.str(error.message), error.span, error.source));
      } else if (core.FormatException.is(ex)) {
        let error = ex;
        dart.throw(new core.FormatException.new("Invalid " + dart.str(name) + " \"" + dart.str(value) + "\": " + dart.str(error.message), error.source, error.offset));
      } else
        throw e;
    }
  };
  const _is_CaseInsensitiveMap_default = Symbol('_is_CaseInsensitiveMap_default');
  src__case_insensitive_map.CaseInsensitiveMap$ = dart.generic(V => {
    class CaseInsensitiveMap extends src__canonicalized_map.CanonicalizedMap$(core.String, core.String, V) {}
    (CaseInsensitiveMap.new = function() {
      CaseInsensitiveMap.__proto__.new.call(this, dart.fn(key => key[$toLowerCase](), StringToString()), {isValidKey: dart.fn(key => key != null, ObjectTobool())});
      ;
    }).prototype = CaseInsensitiveMap.prototype;
    (CaseInsensitiveMap.from = function(other) {
      CaseInsensitiveMap.__proto__.from.call(this, other, dart.fn(key => key[$toLowerCase](), StringToString()), {isValidKey: dart.fn(key => key != null, ObjectTobool())});
      ;
    }).prototype = CaseInsensitiveMap.prototype;
    dart.addTypeTests(CaseInsensitiveMap);
    CaseInsensitiveMap.prototype[_is_CaseInsensitiveMap_default] = true;
    return CaseInsensitiveMap;
  });
  src__case_insensitive_map.CaseInsensitiveMap = src__case_insensitive_map.CaseInsensitiveMap$();
  dart.addTypeTests(src__case_insensitive_map.CaseInsensitiveMap, _is_CaseInsensitiveMap_default);
  src__media_type.MediaType = class MediaType extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get subtype() {
      return this[subtype$];
    }
    set subtype(value) {
      super.subtype = value;
    }
    get parameters() {
      return this[parameters$0];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get mimeType() {
      return dart.str(this.type) + "/" + dart.str(this.subtype);
    }
    static parse(mediaType) {
      return src__utils.wrapFormatException(src__media_type.MediaType, "media type", mediaType, dart.fn(() => {
        let scanner = new src__string_scanner.StringScanner.new(mediaType);
        scanner.scan(src__scan.whitespace);
        scanner.expect(src__scan.token);
        let type = scanner.lastMatch._get(0);
        scanner.expect("/");
        scanner.expect(src__scan.token);
        let subtype = scanner.lastMatch._get(0);
        scanner.scan(src__scan.whitespace);
        let parameters = new (IdentityMapOfString$String()).new();
        while (dart.test(scanner.scan(";"))) {
          scanner.scan(src__scan.whitespace);
          scanner.expect(src__scan.token);
          let attribute = scanner.lastMatch._get(0);
          scanner.expect("=");
          let value = null;
          if (dart.test(scanner.scan(src__scan.token))) {
            value = scanner.lastMatch._get(0);
          } else {
            value = src__scan.expectQuotedString(scanner);
          }
          scanner.scan(src__scan.whitespace);
          parameters[$_set](attribute, value);
        }
        scanner.expectDone();
        return new src__media_type.MediaType.new(type, subtype, parameters);
      }, VoidToMediaType()));
    }
    change(opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      let subtype = opts && 'subtype' in opts ? opts.subtype : null;
      let mimeType = opts && 'mimeType' in opts ? opts.mimeType : null;
      let parameters = opts && 'parameters' in opts ? opts.parameters : null;
      let clearParameters = opts && 'clearParameters' in opts ? opts.clearParameters : false;
      if (mimeType != null) {
        if (type != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [type] and [mimeType]."));
        } else if (subtype != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [subtype] and " + "[mimeType]."));
        }
        let segments = mimeType[$split]("/");
        if (segments[$length] !== 2) {
          dart.throw(new core.FormatException.new("Invalid mime type \"" + dart.str(mimeType) + "\"."));
        }
        type = segments[$_get](0);
        subtype = segments[$_get](1);
      }
      if (type == null) type = this.type;
      if (subtype == null) subtype = this.subtype;
      if (parameters == null) parameters = new (IdentityMapOfString$String()).new();
      if (!dart.test(clearParameters)) {
        let newParameters = parameters;
        parameters = LinkedHashMapOfString$String().from(this.parameters);
        parameters[$addAll](newParameters);
      }
      return new src__media_type.MediaType.new(type, subtype, parameters);
    }
    toString() {
      let t2;
      let buffer = (t2 = new core.StringBuffer.new(), t2.write(this.type), t2.write("/"), t2.write(this.subtype), t2);
      this.parameters[$forEach](dart.fn((attribute, value) => {
        let t2;
        buffer.write("; " + dart.str(attribute) + "=");
        if (dart.test(src__scan.nonToken.hasMatch(value))) {
          t2 = buffer;
          t2.write("\"");
          t2.write(value[$replaceAllMapped](src__media_type._escapedChar, dart.fn(match => "\\" + dart.notNull(match._get(0)), MatchToString())));
          t2.write("\"");
          t2;
        } else {
          buffer.write(value);
        }
      }, StringAndStringToNull()));
      return dart.toString(buffer);
    }
  };
  (src__media_type.MediaType.new = function(type, subtype, parameters) {
    if (parameters === void 0) parameters = null;
    this[type$] = type[$toLowerCase]();
    this[subtype$] = subtype[$toLowerCase]();
    this[parameters$0] = new (UnmodifiableMapViewOfString$String()).new(parameters == null ? new (IdentityMapOfString$String()).new() : new (CaseInsensitiveMapOfString()).from(parameters));
    ;
  }).prototype = src__media_type.MediaType.prototype;
  dart.addTypeTests(src__media_type.MediaType);
  const type$ = Symbol("MediaType.type");
  const subtype$ = Symbol("MediaType.subtype");
  const parameters$0 = Symbol("MediaType.parameters");
  dart.setMethodSignature(src__media_type.MediaType, () => ({
    __proto__: dart.getMethods(src__media_type.MediaType.__proto__),
    change: dart.fnType(src__media_type.MediaType, [], {clearParameters: core.bool, mimeType: core.String, parameters: core.Map$(core.String, core.String), subtype: core.String, type: core.String})
  }));
  dart.setGetterSignature(src__media_type.MediaType, () => ({
    __proto__: dart.getGetters(src__media_type.MediaType.__proto__),
    mimeType: core.String
  }));
  dart.setFieldSignature(src__media_type.MediaType, () => ({
    __proto__: dart.getFields(src__media_type.MediaType.__proto__),
    type: dart.finalFieldType(core.String),
    subtype: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  dart.defineExtensionMethods(src__media_type.MediaType, ['toString']);
  dart.defineLazy(src__media_type, {
    /*src__media_type._escapedChar*/get _escapedChar() {
      return core.RegExp.new("[\"\\x00-\\x1F\\x7F]");
    }
  });
  src__http_date.formatHttpDate = function(date) {
    let t2;
    date = date.toUtc();
    let buffer = (t2 = new core.StringBuffer.new(), t2.write(src__http_date._WEEKDAYS[$_get](dart.notNull(date.weekday) - 1)), t2.write(", "), t2.write(dart.notNull(date.day) <= 9 ? "0" : ""), t2.write(dart.toString(date.day)), t2.write(" "), t2.write(src__http_date._MONTHS[$_get](dart.notNull(date.month) - 1)), t2.write(" "), t2.write(dart.toString(date.year)), t2.write(dart.notNull(date.hour) <= 9 ? " 0" : " "), t2.write(dart.toString(date.hour)), t2.write(dart.notNull(date.minute) <= 9 ? ":0" : ":"), t2.write(dart.toString(date.minute)), t2.write(dart.notNull(date.second) <= 9 ? ":0" : ":"), t2.write(dart.toString(date.second)), t2.write(" GMT"), t2);
    return dart.toString(buffer);
  };
  src__http_date.parseHttpDate = function(date) {
    return src__utils.wrapFormatException(core.DateTime, "HTTP date", date, dart.fn(() => {
      let scanner = new src__string_scanner.StringScanner.new(date);
      if (dart.test(scanner.scan(src__http_date._longWeekdayRegExp))) {
        scanner.expect(", ");
        let day = src__http_date._parseInt(scanner, 2);
        scanner.expect("-");
        let month = src__http_date._parseMonth(scanner);
        scanner.expect("-");
        let year = 1900 + dart.notNull(src__http_date._parseInt(scanner, 2));
        scanner.expect(" ");
        let time = src__http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return src__http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(src__http_date._shortWeekdayRegExp);
      if (dart.test(scanner.scan(", "))) {
        let day = src__http_date._parseInt(scanner, 2);
        scanner.expect(" ");
        let month = src__http_date._parseMonth(scanner);
        scanner.expect(" ");
        let year = src__http_date._parseInt(scanner, 4);
        scanner.expect(" ");
        let time = src__http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return src__http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(" ");
      let month = src__http_date._parseMonth(scanner);
      scanner.expect(" ");
      let day = dart.test(scanner.scan(" ")) ? src__http_date._parseInt(scanner, 1) : src__http_date._parseInt(scanner, 2);
      scanner.expect(" ");
      let time = src__http_date._parseTime(scanner);
      scanner.expect(" ");
      let year = src__http_date._parseInt(scanner, 4);
      scanner.expectDone();
      return src__http_date._makeDateTime(year, month, day, time);
    }, VoidToDateTime()));
  };
  src__http_date._parseMonth = function(scanner) {
    scanner.expect(src__http_date._monthRegExp);
    return dart.notNull(src__http_date._MONTHS[$indexOf](scanner.lastMatch._get(0))) + 1;
  };
  src__http_date._parseInt = function(scanner, digits) {
    scanner.expect(src__http_date._digitRegExp);
    if (scanner.lastMatch._get(0).length !== digits) {
      scanner.error("expected a " + dart.str(digits) + "-digit number.");
    }
    return core.int.parse(scanner.lastMatch._get(0));
  };
  src__http_date._parseTime = function(scanner) {
    let hours = src__http_date._parseInt(scanner, 2);
    if (dart.notNull(hours) >= 24) scanner.error("hours may not be greater than 24.");
    scanner.expect(":");
    let minutes = src__http_date._parseInt(scanner, 2);
    if (dart.notNull(minutes) >= 60) scanner.error("minutes may not be greater than 60.");
    scanner.expect(":");
    let seconds = src__http_date._parseInt(scanner, 2);
    if (dart.notNull(seconds) >= 60) scanner.error("seconds may not be greater than 60.");
    return new core.DateTime.new(1, 1, 1, hours, minutes, seconds);
  };
  src__http_date._makeDateTime = function(year, month, day, time) {
    let dateTime = new core.DateTime.utc(year, month, day, time.hour, time.minute, time.second);
    if (dateTime.month != month) {
      dart.throw(new core.FormatException.new("invalid day '" + dart.str(day) + "' for month '" + dart.str(month) + "'."));
    }
    return dateTime;
  };
  dart.defineLazy(src__http_date, {
    /*src__http_date._WEEKDAYS*/get _WEEKDAYS() {
      return dart.constList(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], core.String);
    },
    /*src__http_date._MONTHS*/get _MONTHS() {
      return dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], core.String);
    },
    /*src__http_date._shortWeekdayRegExp*/get _shortWeekdayRegExp() {
      return core.RegExp.new("Mon|Tue|Wed|Thu|Fri|Sat|Sun");
    },
    /*src__http_date._longWeekdayRegExp*/get _longWeekdayRegExp() {
      return core.RegExp.new("Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday");
    },
    /*src__http_date._monthRegExp*/get _monthRegExp() {
      return core.RegExp.new("Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec");
    },
    /*src__http_date._digitRegExp*/get _digitRegExp() {
      return core.RegExp.new("\\d+");
    }
  });
  src__chunked_coding.ChunkedCodingCodec = class ChunkedCodingCodec extends convert.Codec$(core.List$(core.int), core.List$(core.int)) {
    get encoder() {
      return src__chunked_coding__encoder.chunkedCodingEncoder;
    }
    get decoder() {
      return src__chunked_coding__decoder.chunkedCodingDecoder;
    }
  };
  (src__chunked_coding.ChunkedCodingCodec.__ = function() {
    src__chunked_coding.ChunkedCodingCodec.__proto__.new.call(this);
    ;
  }).prototype = src__chunked_coding.ChunkedCodingCodec.prototype;
  dart.addTypeTests(src__chunked_coding.ChunkedCodingCodec);
  dart.setGetterSignature(src__chunked_coding.ChunkedCodingCodec, () => ({
    __proto__: dart.getGetters(src__chunked_coding.ChunkedCodingCodec.__proto__),
    encoder: src__chunked_coding__encoder.ChunkedCodingEncoder,
    decoder: src__chunked_coding__decoder.ChunkedCodingDecoder
  }));
  dart.defineLazy(src__chunked_coding, {
    /*src__chunked_coding.chunkedCoding*/get chunkedCoding() {
      return dart.const(new src__chunked_coding.ChunkedCodingCodec.__());
    }
  });
  const _decode = dart.privateName(src__chunked_coding__decoder, "_decode");
  const _state = dart.privateName(src__chunked_coding__decoder, "_state");
  src__chunked_coding__decoder.ChunkedCodingDecoder = class ChunkedCodingDecoder extends convert.Converter$(core.List$(core.int), core.List$(core.int)) {
    convert(bytes) {
      ListOfint()._check(bytes);
      let sink = new src__chunked_coding__decoder._Sink.new(null);
      let output = sink[_decode](bytes, 0, bytes[$length]);
      if (dart.equals(sink[_state], src__chunked_coding__decoder._State.end)) return output;
      dart.throw(new core.FormatException.new("Input ended unexpectedly.", bytes, bytes[$length]));
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new src__chunked_coding__decoder._Sink.new(sink);
    }
  };
  (src__chunked_coding__decoder.ChunkedCodingDecoder.__ = function() {
    src__chunked_coding__decoder.ChunkedCodingDecoder.__proto__.new.call(this);
    ;
  }).prototype = src__chunked_coding__decoder.ChunkedCodingDecoder.prototype;
  dart.addTypeTests(src__chunked_coding__decoder.ChunkedCodingDecoder);
  dart.setMethodSignature(src__chunked_coding__decoder.ChunkedCodingDecoder, () => ({
    __proto__: dart.getMethods(src__chunked_coding__decoder.ChunkedCodingDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  const _size = dart.privateName(src__chunked_coding__decoder, "_size");
  const _sink$ = dart.privateName(src__chunked_coding__decoder, "_sink");
  const _close = dart.privateName(src__chunked_coding__decoder, "_close");
  const _digitForByte = dart.privateName(src__chunked_coding__decoder, "_digitForByte");
  src__chunked_coding__decoder._Sink = class _Sink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      let output = this[_decode](chunk, start, end);
      if (dart.test(output[$isNotEmpty])) this[_sink$].add(output);
      if (dart.test(isLast)) this[_close](chunk, end);
    }
    close() {
      return this[_close]();
    }
    [_close](chunk, index) {
      if (chunk === void 0) chunk = null;
      if (index === void 0) index = null;
      if (!dart.equals(this[_state], src__chunked_coding__decoder._State.end)) {
        dart.throw(new core.FormatException.new("Input ended unexpectedly.", chunk, index));
      }
      this[_sink$].close();
    }
    [_decode](bytes, start, end) {
      function assertCurrentChar(char, name) {
        if (bytes[$_get](start) != char) {
          dart.throw(new core.FormatException.new("Expected " + dart.str(name) + ".", bytes, start));
        }
      }
      dart.fn(assertCurrentChar, intAndStringToNull());
      let buffer = new typed_buffers$.Uint8Buffer.new();
      while (start != end) {
        switch (this[_state]) {
          case src__chunked_coding__decoder._State.boundary:
          {
            this[_size] = this[_digitForByte](bytes, start);
            this[_state] = src__chunked_coding__decoder._State.size;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.size:
          {
            if (bytes[$_get](start) == ascii$.$cr) {
              this[_state] = src__chunked_coding__decoder._State.sizeBeforeLF;
            } else {
              this[_size] = (dart.notNull(this[_size]) << 4 >>> 0) + dart.notNull(this[_digitForByte](bytes, start));
            }
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.sizeBeforeLF:
          {
            assertCurrentChar(ascii$.$lf, "LF");
            this[_state] = this[_size] === 0 ? src__chunked_coding__decoder._State.endBeforeCR : src__chunked_coding__decoder._State.body;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.body:
          {
            let chunkEnd = math.min(core.int, end, dart.notNull(start) + dart.notNull(this[_size]));
            buffer.addAll(bytes, start, chunkEnd);
            this[_size] = dart.notNull(this[_size]) - (chunkEnd - dart.notNull(start));
            start = chunkEnd;
            if (this[_size] === 0) this[_state] = src__chunked_coding__decoder._State.bodyBeforeCR;
            break;
          }
          case src__chunked_coding__decoder._State.bodyBeforeCR:
          {
            assertCurrentChar(ascii$.$cr, "CR");
            this[_state] = src__chunked_coding__decoder._State.bodyBeforeLF;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.bodyBeforeLF:
          {
            assertCurrentChar(ascii$.$lf, "LF");
            this[_state] = src__chunked_coding__decoder._State.boundary;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.endBeforeCR:
          {
            assertCurrentChar(ascii$.$cr, "CR");
            this[_state] = src__chunked_coding__decoder._State.endBeforeLF;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.endBeforeLF:
          {
            assertCurrentChar(ascii$.$lf, "LF");
            this[_state] = src__chunked_coding__decoder._State.end;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.end:
          {
            dart.throw(new core.FormatException.new("Expected no more data.", bytes, start));
          }
        }
      }
      return buffer.buffer[$asUint8List](0, buffer.length);
    }
    [_digitForByte](bytes, index) {
      let byte = bytes[$_get](index);
      let digit = (dart.notNull(ascii$.$0) ^ dart.notNull(byte)) >>> 0;
      if (digit <= 9) {
        if (digit >= 0) return digit;
      } else {
        let letter = (32 | dart.notNull(byte)) >>> 0;
        if (dart.notNull(ascii$.$a) <= letter && letter <= dart.notNull(ascii$.$f)) return letter - dart.notNull(ascii$.$a) + 10;
      }
      dart.throw(new core.FormatException.new("Invalid hexadecimal byte 0x" + byte[$toRadixString](16)[$toUpperCase]() + ".", bytes, index));
    }
  };
  (src__chunked_coding__decoder._Sink.new = function(_sink) {
    this[_state] = src__chunked_coding__decoder._State.boundary;
    this[_size] = null;
    this[_sink$] = _sink;
    src__chunked_coding__decoder._Sink.__proto__.new.call(this);
    ;
  }).prototype = src__chunked_coding__decoder._Sink.prototype;
  dart.addTypeTests(src__chunked_coding__decoder._Sink);
  dart.setMethodSignature(src__chunked_coding__decoder._Sink, () => ({
    __proto__: dart.getMethods(src__chunked_coding__decoder._Sink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [core.List$(core.int), core.int]),
    [_decode]: dart.fnType(typed_data.Uint8List, [core.List$(core.int), core.int, core.int]),
    [_digitForByte]: dart.fnType(core.int, [core.List$(core.int), core.int])
  }));
  dart.setFieldSignature(src__chunked_coding__decoder._Sink, () => ({
    __proto__: dart.getFields(src__chunked_coding__decoder._Sink.__proto__),
    [_sink$]: dart.finalFieldType(core.Sink$(core.List$(core.int))),
    [_state]: dart.fieldType(src__chunked_coding__decoder._State),
    [_size]: dart.fieldType(core.int)
  }));
  const _name$ = dart.privateName(src__chunked_coding__decoder, "_name");
  src__chunked_coding__decoder._State = class _State extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__chunked_coding__decoder._State.__ = function(_name) {
    this[_name$] = _name;
    ;
  }).prototype = src__chunked_coding__decoder._State.prototype;
  dart.addTypeTests(src__chunked_coding__decoder._State);
  dart.setFieldSignature(src__chunked_coding__decoder._State, () => ({
    __proto__: dart.getFields(src__chunked_coding__decoder._State.__proto__),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__chunked_coding__decoder._State, ['toString']);
  dart.defineLazy(src__chunked_coding__decoder._State, {
    /*src__chunked_coding__decoder._State.boundary*/get boundary() {
      return dart.const(new src__chunked_coding__decoder._State.__("boundary"));
    },
    /*src__chunked_coding__decoder._State.size*/get size() {
      return dart.const(new src__chunked_coding__decoder._State.__("size"));
    },
    /*src__chunked_coding__decoder._State.sizeBeforeLF*/get sizeBeforeLF() {
      return dart.const(new src__chunked_coding__decoder._State.__("size before LF"));
    },
    /*src__chunked_coding__decoder._State.body*/get body() {
      return dart.const(new src__chunked_coding__decoder._State.__("body"));
    },
    /*src__chunked_coding__decoder._State.bodyBeforeCR*/get bodyBeforeCR() {
      return dart.const(new src__chunked_coding__decoder._State.__("body before CR"));
    },
    /*src__chunked_coding__decoder._State.bodyBeforeLF*/get bodyBeforeLF() {
      return dart.const(new src__chunked_coding__decoder._State.__("body before LF"));
    },
    /*src__chunked_coding__decoder._State.endBeforeCR*/get endBeforeCR() {
      return dart.const(new src__chunked_coding__decoder._State.__("end before CR"));
    },
    /*src__chunked_coding__decoder._State.endBeforeLF*/get endBeforeLF() {
      return dart.const(new src__chunked_coding__decoder._State.__("end before LF"));
    },
    /*src__chunked_coding__decoder._State.end*/get end() {
      return dart.const(new src__chunked_coding__decoder._State.__("end"));
    }
  });
  dart.defineLazy(src__chunked_coding__decoder, {
    /*src__chunked_coding__decoder.chunkedCodingDecoder*/get chunkedCodingDecoder() {
      return dart.const(new src__chunked_coding__decoder.ChunkedCodingDecoder.__());
    }
  });
  src__chunked_coding__encoder.ChunkedCodingEncoder = class ChunkedCodingEncoder extends convert.Converter$(core.List$(core.int), core.List$(core.int)) {
    convert(bytes) {
      ListOfint()._check(bytes);
      return src__chunked_coding__encoder._convert(bytes, 0, bytes[$length], {isLast: true});
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new src__chunked_coding__encoder._Sink.new(sink);
    }
  };
  (src__chunked_coding__encoder.ChunkedCodingEncoder.__ = function() {
    src__chunked_coding__encoder.ChunkedCodingEncoder.__proto__.new.call(this);
    ;
  }).prototype = src__chunked_coding__encoder.ChunkedCodingEncoder.prototype;
  dart.addTypeTests(src__chunked_coding__encoder.ChunkedCodingEncoder);
  dart.setMethodSignature(src__chunked_coding__encoder.ChunkedCodingEncoder, () => ({
    __proto__: dart.getMethods(src__chunked_coding__encoder.ChunkedCodingEncoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  const _sink$0 = dart.privateName(src__chunked_coding__encoder, "_sink");
  src__chunked_coding__encoder._Sink = class _Sink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      this[_sink$0].add(src__chunked_coding__encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink$0].add(src__chunked_coding__encoder._convert(chunk, start, end, {isLast: isLast}));
      if (dart.test(isLast)) this[_sink$0].close();
    }
    close() {
      this[_sink$0].add(src__chunked_coding__encoder._doneChunk);
      this[_sink$0].close();
    }
  };
  (src__chunked_coding__encoder._Sink.new = function(_sink) {
    this[_sink$0] = _sink;
    src__chunked_coding__encoder._Sink.__proto__.new.call(this);
    ;
  }).prototype = src__chunked_coding__encoder._Sink.prototype;
  dart.addTypeTests(src__chunked_coding__encoder._Sink);
  dart.setMethodSignature(src__chunked_coding__encoder._Sink, () => ({
    __proto__: dart.getMethods(src__chunked_coding__encoder._Sink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__chunked_coding__encoder._Sink, () => ({
    __proto__: dart.getFields(src__chunked_coding__encoder._Sink.__proto__),
    [_sink$0]: dart.finalFieldType(core.Sink$(core.List$(core.int)))
  }));
  let const$;
  src__chunked_coding__encoder._convert = function(bytes, start, end, opts) {
    let t2, t2$, t2$0, t2$1;
    let isLast = opts && 'isLast' in opts ? opts.isLast : false;
    if (end == start) return dart.test(isLast) ? src__chunked_coding__encoder._doneChunk : const$ || (const$ = dart.constList([], core.int));
    let size = dart.notNull(end) - dart.notNull(start);
    let sizeInHex = size[$toRadixString](16);
    let footerSize = dart.test(isLast) ? src__chunked_coding__encoder._doneChunk[$length] : 0;
    let list = _native_typed_data.NativeUint8List.new(sizeInHex.length + 4 + size + dart.notNull(footerSize));
    list[$setRange](0, sizeInHex.length, sizeInHex[$codeUnits]);
    let cursor = sizeInHex.length;
    list[$_set]((t2 = cursor, cursor = t2 + 1, t2), ascii$.$cr);
    list[$_set]((t2$ = cursor, cursor = t2$ + 1, t2$), ascii$.$lf);
    list[$setRange](cursor, cursor + dart.notNull(end) - dart.notNull(start), bytes, start);
    cursor = cursor + (dart.notNull(end) - dart.notNull(start));
    list[$_set]((t2$0 = cursor, cursor = t2$0 + 1, t2$0), ascii$.$cr);
    list[$_set]((t2$1 = cursor, cursor = t2$1 + 1, t2$1), ascii$.$lf);
    if (dart.test(isLast)) {
      list[$setRange](dart.notNull(list[$length]) - dart.notNull(footerSize), list[$length], src__chunked_coding__encoder._doneChunk);
    }
    return list;
  };
  dart.defineLazy(src__chunked_coding__encoder, {
    /*src__chunked_coding__encoder.chunkedCodingEncoder*/get chunkedCodingEncoder() {
      return dart.const(new src__chunked_coding__encoder.ChunkedCodingEncoder.__());
    },
    /*src__chunked_coding__encoder._doneChunk*/get _doneChunk() {
      return _native_typed_data.NativeUint8List.fromList(JSArrayOfint().of([ascii$.$0, ascii$.$cr, ascii$.$lf, ascii$.$cr, ascii$.$lf]));
    }
  });
  dart.trackLibraries("packages/http_parser/http_parser", {
    "package:http_parser/src/scan.dart": src__scan,
    "package:http_parser/src/authentication_challenge.dart": src__authentication_challenge,
    "package:http_parser/src/utils.dart": src__utils,
    "package:http_parser/src/case_insensitive_map.dart": src__case_insensitive_map,
    "package:http_parser/src/media_type.dart": src__media_type,
    "package:http_parser/src/http_date.dart": src__http_date,
    "package:http_parser/src/chunked_coding.dart": src__chunked_coding,
    "package:http_parser/src/chunked_coding/decoder.dart": src__chunked_coding__decoder,
    "package:http_parser/src/chunked_coding/encoder.dart": src__chunked_coding__encoder,
    "package:http_parser/http_parser.dart": http_parser
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/http_parser/src/scan.dart","org-dartlang-app:///packages/http_parser/src/authentication_challenge.dart","org-dartlang-app:///packages/http_parser/src/utils.dart","org-dartlang-app:///packages/http_parser/src/case_insensitive_map.dart","org-dartlang-app:///packages/http_parser/src/media_type.dart","org-dartlang-app:///packages/http_parser/src/http_date.dart","org-dartlang-app:///packages/http_parser/src/chunked_coding.dart","org-dartlang-app:///packages/http_parser/src/chunked_coding/decoder.dart","org-dartlang-app:///packages/http_parser/src/chunked_coding/encoder.dart"],"names":[],"mappings":"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","file":"http_parser.ddc.js"}');
  // Exports:
  return {
    src__scan: src__scan,
    src__authentication_challenge: src__authentication_challenge,
    src__utils: src__utils,
    src__case_insensitive_map: src__case_insensitive_map,
    src__media_type: src__media_type,
    src__http_date: src__http_date,
    src__chunked_coding: src__chunked_coding,
    src__chunked_coding__decoder: src__chunked_coding__decoder,
    src__chunked_coding__encoder: src__chunked_coding__encoder,
    http_parser: http_parser
  };
});

//# sourceMappingURL=http_parser.ddc.js.map
