define(['dart_sdk', 'packages/source_span/source_span', 'packages/charcode/ascii'], function(dart_sdk, source_span, ascii) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__file = source_span.src__file;
  const src__span_exception = source_span.src__span_exception;
  const ascii$ = ascii.ascii;
  const src__span_scanner = Object.create(dart.library);
  const src__utils = Object.create(dart.library);
  const src__string_scanner = Object.create(dart.library);
  const src__exception = Object.create(dart.library);
  const src__relative_span_scanner = Object.create(dart.library);
  const src__line_scanner = Object.create(dart.library);
  const src__eager_span_scanner = Object.create(dart.library);
  const string_scanner = Object.create(dart.library);
  const $noSuchMethod = dartx.noSuchMethod;
  const $substring = dartx.substring;
  const $codeUnitAt = dartx.codeUnitAt;
  const $replaceAll = dartx.replaceAll;
  const $toString = dartx.toString;
  const $matchAsPrefix = dartx.matchAsPrefix;
  const $length = dartx.length;
  const $isEmpty = dartx.isEmpty;
  const $last = dartx.last;
  const $removeLast = dartx.removeLast;
  const $lastIndexOf = dartx.lastIndexOf;
  const $toList = dartx.toList;
  let ListOfMatch = () => (ListOfMatch = dart.constFn(core.List$(core.Match)))();
  const _lastSpan = dart.privateName(src__span_scanner, "_lastSpan");
  const _sourceFile = dart.privateName(src__span_scanner, "_sourceFile");
  const _scanner$ = dart.privateName(src__span_scanner, "_scanner");
  const _column = dart.privateName(src__span_scanner, "_column");
  let const$;
  const _column$ = dart.privateName(src__line_scanner, "_column");
  const _adjustLineAndColumn = dart.privateName(src__span_scanner, "_adjustLineAndColumn");
  let const$0;
  const _adjustLineAndColumn$ = dart.privateName(src__line_scanner, "_adjustLineAndColumn");
  const _line = dart.privateName(src__span_scanner, "_line");
  let const$1;
  const _line$ = dart.privateName(src__line_scanner, "_line");
  const _betweenCRLF = dart.privateName(src__span_scanner, "_betweenCRLF");
  let const$2;
  const _betweenCRLF$ = dart.privateName(src__line_scanner, "_betweenCRLF");
  const _newlinesIn = dart.privateName(src__span_scanner, "_newlinesIn");
  let const$3;
  const _newlinesIn$ = dart.privateName(src__line_scanner, "_newlinesIn");
  const _column_ = dart.privateName(src__span_scanner, "_column=");
  let const$4;
  const _line_ = dart.privateName(src__span_scanner, "_line=");
  let const$5;
  const _position = dart.privateName(src__string_scanner, "_position");
  const _lastMatch = dart.privateName(src__string_scanner, "_lastMatch");
  const _lastMatchPosition = dart.privateName(src__string_scanner, "_lastMatchPosition");
  const _fail = dart.privateName(src__string_scanner, "_fail");
  src__string_scanner.StringScanner = class StringScanner extends core.Object {
    get sourceUrl() {
      return this[sourceUrl$];
    }
    set sourceUrl(value) {
      super.sourceUrl = value;
    }
    get string() {
      return this[string$];
    }
    set string(value) {
      super.string = value;
    }
    get position() {
      return this[_position];
    }
    set position(position) {
      if (dart.notNull(position) < 0 || dart.notNull(position) > this.string.length) {
        dart.throw(new core.ArgumentError.new("Invalid position " + dart.str(position)));
      }
      this[_position] = position;
      this[_lastMatch] = null;
    }
    get lastMatch() {
      if (this[_position] != this[_lastMatchPosition]) this[_lastMatch] = null;
      return this[_lastMatch];
    }
    get rest() {
      return this.string[$substring](this.position);
    }
    get isDone() {
      return this.position === this.string.length;
    }
    readChar() {
      let t0;
      if (dart.test(this.isDone)) this[_fail]("more input");
      return this.string[$codeUnitAt]((t0 = this[_position], this[_position] = dart.notNull(t0) + 1, t0));
    }
    peekChar(offset) {
      if (offset === void 0) offset = null;
      if (offset == null) offset = 0;
      let index = dart.notNull(this.position) + dart.notNull(offset);
      if (index < 0 || index >= this.string.length) return null;
      return this.string[$codeUnitAt](index);
    }
    scanChar(character) {
      if (dart.test(this.isDone)) return false;
      if (this.string[$codeUnitAt](this[_position]) !== character) return false;
      this[_position] = dart.notNull(this[_position]) + 1;
      return true;
    }
    expectChar(character, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (dart.test(this.scanChar(character))) return;
      if (name == null) {
        if (character == ascii$.$backslash) {
          name = "\"\\\"";
        } else if (character == ascii$.$double_quote) {
          name = "\"\\\"\"";
        } else {
          name = "\"" + dart.str(core.String.fromCharCode(character)) + "\"";
        }
      }
      this[_fail](name);
    }
    scan(pattern) {
      let success = this.matches(pattern);
      if (dart.test(success)) {
        this[_position] = this[_lastMatch].end;
        this[_lastMatchPosition] = this[_position];
      }
      return success;
    }
    expect(pattern, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (dart.test(this.scan(pattern))) return;
      if (name == null) {
        if (core.RegExp.is(pattern)) {
          let source = pattern.pattern;
          if (!dart.test(src__string_scanner._slashAutoEscape)) source = source[$replaceAll]("/", "\\/");
          name = "/" + dart.str(source) + "/";
        } else {
          name = dart.toString(pattern)[$replaceAll]("\\", "\\\\")[$replaceAll]("\"", "\\\"");
          name = "\"" + dart.str(name) + "\"";
        }
      }
      this[_fail](name);
    }
    expectDone() {
      if (dart.test(this.isDone)) return;
      this[_fail]("no more input");
    }
    matches(pattern) {
      this[_lastMatch] = pattern[$matchAsPrefix](this.string, this.position);
      this[_lastMatchPosition] = this[_position];
      return this[_lastMatch] != null;
    }
    substring(start, end) {
      if (end === void 0) end = null;
      if (end == null) end = this.position;
      return this.string[$substring](start, end);
    }
    error(message, opts) {
      let match = opts && 'match' in opts ? opts.match : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let length = opts && 'length' in opts ? opts.length : null;
      src__utils.validateErrorArgs(this.string, match, position, length);
      if (match == null && position == null && length == null) match = this.lastMatch;
      if (position == null) {
        position = match == null ? this.position : match.start;
      }
      if (length == null) length = match == null ? 0 : dart.notNull(match.end) - dart.notNull(match.start);
      let sourceFile = new src__file.SourceFile.fromString(this.string, {url: this.sourceUrl});
      let span = sourceFile.span(position, dart.notNull(position) + dart.notNull(length));
      dart.throw(new src__exception.StringScannerException.new(message, span, this.string));
    }
    [_fail](name) {
      this.error("expected " + dart.str(name) + ".", {position: this.position, length: 0});
    }
  };
  (src__string_scanner.StringScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_position] = 0;
    this[_lastMatch] = null;
    this[_lastMatchPosition] = null;
    this[string$] = string;
    this[sourceUrl$] = core.Uri._check(typeof sourceUrl == 'string' ? core.Uri.parse(sourceUrl) : sourceUrl);
    if (position != null) this.position = position;
  }).prototype = src__string_scanner.StringScanner.prototype;
  dart.addTypeTests(src__string_scanner.StringScanner);
  const sourceUrl$ = Symbol("StringScanner.sourceUrl");
  const string$ = Symbol("StringScanner.string");
  dart.setMethodSignature(src__string_scanner.StringScanner, () => ({
    __proto__: dart.getMethods(src__string_scanner.StringScanner.__proto__),
    readChar: dart.fnType(core.int, []),
    peekChar: dart.fnType(core.int, [], [core.int]),
    scanChar: dart.fnType(core.bool, [core.int]),
    expectChar: dart.fnType(dart.void, [core.int], {name: core.String}),
    scan: dart.fnType(core.bool, [core.Pattern]),
    expect: dart.fnType(dart.void, [core.Pattern], {name: core.String}),
    expectDone: dart.fnType(dart.void, []),
    matches: dart.fnType(core.bool, [core.Pattern]),
    substring: dart.fnType(core.String, [core.int], [core.int]),
    error: dart.fnType(dart.void, [core.String], {length: core.int, match: core.Match, position: core.int}),
    [_fail]: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(src__string_scanner.StringScanner, () => ({
    __proto__: dart.getGetters(src__string_scanner.StringScanner.__proto__),
    position: core.int,
    lastMatch: core.Match,
    rest: core.String,
    isDone: core.bool
  }));
  dart.setSetterSignature(src__string_scanner.StringScanner, () => ({
    __proto__: dart.getSetters(src__string_scanner.StringScanner.__proto__),
    position: core.int
  }));
  dart.setFieldSignature(src__string_scanner.StringScanner, () => ({
    __proto__: dart.getFields(src__string_scanner.StringScanner.__proto__),
    sourceUrl: dart.finalFieldType(core.Uri),
    string: dart.finalFieldType(core.String),
    [_position]: dart.fieldType(core.int),
    [_lastMatch]: dart.fieldType(core.Match),
    [_lastMatchPosition]: dart.fieldType(core.int)
  }));
  src__span_scanner.SpanScanner = class SpanScanner extends src__string_scanner.StringScanner {
    get line() {
      return this[_sourceFile].getLine(this.position);
    }
    get column() {
      return this[_sourceFile].getColumn(this.position);
    }
    get state() {
      return new src__span_scanner._SpanScannerState.new(this, this.position);
    }
    set state(state) {
      if (!src__span_scanner._SpanScannerState.is(state) || src__span_scanner._SpanScannerState.as(state)[_scanner$] !== this) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      this.position = state.position;
    }
    get lastSpan() {
      if (this.lastMatch == null) this[_lastSpan] = null;
      return this[_lastSpan];
    }
    get location() {
      return this[_sourceFile].location(this.position);
    }
    get emptySpan() {
      return this.location.pointSpan();
    }
    spanFrom(startState, endState) {
      if (endState === void 0) endState = null;
      let endPosition = endState == null ? this.position : endState.position;
      return this[_sourceFile].span(startState.position, endPosition);
    }
    matches(pattern) {
      if (!dart.test(super.matches(pattern))) {
        this[_lastSpan] = null;
        return false;
      }
      this[_lastSpan] = this[_sourceFile].span(this.position, this.lastMatch.end);
      return true;
    }
    error(message, opts) {
      let match = opts && 'match' in opts ? opts.match : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let length = opts && 'length' in opts ? opts.length : null;
      src__utils.validateErrorArgs(this.string, match, position, length);
      if (match == null && position == null && length == null) match = this.lastMatch;
      if (position == null) {
        position = match == null ? this.position : match.start;
      }
      if (length == null) length = match == null ? 0 : dart.notNull(match.end) - dart.notNull(match.start);
      let span = this[_sourceFile].span(position, dart.notNull(position) + dart.notNull(length));
      dart.throw(new src__exception.StringScannerException.new(message, span, this.string));
    }
    get [_column$]() {
      return core.int._check(this[$noSuchMethod](new core._Invocation.getter(const$ || (const$ = dart.const(new _js_helper.PrivateSymbol.new('_column', _column))))));
    }
    [_adjustLineAndColumn$](character) {
      return this[$noSuchMethod](new core._Invocation.method(const$0 || (const$0 = dart.const(new _js_helper.PrivateSymbol.new('_adjustLineAndColumn', _adjustLineAndColumn))), null, [character]));
    }
    get [_line$]() {
      return core.int._check(this[$noSuchMethod](new core._Invocation.getter(const$1 || (const$1 = dart.const(new _js_helper.PrivateSymbol.new('_line', _line))))));
    }
    get [_betweenCRLF$]() {
      return core.bool._check(this[$noSuchMethod](new core._Invocation.getter(const$2 || (const$2 = dart.const(new _js_helper.PrivateSymbol.new('_betweenCRLF', _betweenCRLF))))));
    }
    [_newlinesIn$](text) {
      return ListOfMatch()._check(this[$noSuchMethod](new core._Invocation.method(const$3 || (const$3 = dart.const(new _js_helper.PrivateSymbol.new('_newlinesIn', _newlinesIn))), null, [text])));
    }
    set [_column$](value) {
      return this[$noSuchMethod](new core._Invocation.setter(const$4 || (const$4 = dart.const(new _js_helper.PrivateSymbol.new('_column=', _column_))), value));
    }
    set [_line$](value) {
      return this[$noSuchMethod](new core._Invocation.setter(const$5 || (const$5 = dart.const(new _js_helper.PrivateSymbol.new('_line=', _line_))), value));
    }
  };
  (src__span_scanner.SpanScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_lastSpan] = null;
    this[_sourceFile] = new src__file.SourceFile.fromString(string, {url: sourceUrl});
    src__span_scanner.SpanScanner.__proto__.new.call(this, string, {sourceUrl: sourceUrl, position: position});
    ;
  }).prototype = src__span_scanner.SpanScanner.prototype;
  dart.addTypeTests(src__span_scanner.SpanScanner);
  src__span_scanner.SpanScanner[dart.implements] = () => [src__line_scanner.LineScanner];
  dart.setMethodSignature(src__span_scanner.SpanScanner, () => ({
    __proto__: dart.getMethods(src__span_scanner.SpanScanner.__proto__),
    spanFrom: dart.fnType(src__file.FileSpan, [src__line_scanner.LineScannerState], [src__line_scanner.LineScannerState]),
    [_adjustLineAndColumn$]: dart.fnType(dart.void, [core.int]),
    [_newlinesIn$]: dart.fnType(core.List$(core.Match), [core.String])
  }));
  dart.setGetterSignature(src__span_scanner.SpanScanner, () => ({
    __proto__: dart.getGetters(src__span_scanner.SpanScanner.__proto__),
    line: core.int,
    column: core.int,
    state: src__line_scanner.LineScannerState,
    lastSpan: src__file.FileSpan,
    location: src__file.FileLocation,
    emptySpan: src__file.FileSpan,
    [_column$]: core.int,
    [_line$]: core.int,
    [_betweenCRLF$]: core.bool
  }));
  dart.setSetterSignature(src__span_scanner.SpanScanner, () => ({
    __proto__: dart.getSetters(src__span_scanner.SpanScanner.__proto__),
    state: src__line_scanner.LineScannerState,
    [_column$]: core.int,
    [_line$]: core.int
  }));
  dart.setFieldSignature(src__span_scanner.SpanScanner, () => ({
    __proto__: dart.getFields(src__span_scanner.SpanScanner.__proto__),
    [_sourceFile]: dart.finalFieldType(src__file.SourceFile),
    [_lastSpan]: dart.fieldType(src__file.FileSpan)
  }));
  let const$6;
  const _scanner$0 = dart.privateName(src__line_scanner, "_scanner");
  src__span_scanner._SpanScannerState = class _SpanScannerState extends core.Object {
    get line() {
      return this[_scanner$][_sourceFile].getLine(this.position);
    }
    get column() {
      return this[_scanner$][_sourceFile].getColumn(this.position);
    }
    get [_scanner$0]() {
      return src__line_scanner.LineScanner._check(this[$noSuchMethod](new core._Invocation.getter(const$6 || (const$6 = dart.const(new _js_helper.PrivateSymbol.new('_scanner', _scanner$))))));
    }
  };
  (src__span_scanner._SpanScannerState.new = function(_scanner, position) {
    this[_scanner$] = _scanner;
    this.position = position;
    ;
  }).prototype = src__span_scanner._SpanScannerState.prototype;
  dart.addTypeTests(src__span_scanner._SpanScannerState);
  src__span_scanner._SpanScannerState[dart.implements] = () => [src__line_scanner.LineScannerState];
  dart.setGetterSignature(src__span_scanner._SpanScannerState, () => ({
    __proto__: dart.getGetters(src__span_scanner._SpanScannerState.__proto__),
    line: core.int,
    column: core.int,
    [_scanner$0]: src__line_scanner.LineScanner
  }));
  dart.setFieldSignature(src__span_scanner._SpanScannerState, () => ({
    __proto__: dart.getFields(src__span_scanner._SpanScannerState.__proto__),
    [_scanner$]: dart.finalFieldType(src__span_scanner.SpanScanner),
    position: dart.finalFieldType(core.int)
  }));
  src__utils.validateErrorArgs = function(string, match, position, length) {
    if (match != null && (position != null || length != null)) {
      dart.throw(new core.ArgumentError.new("Can't pass both match and position/length."));
    }
    if (position != null) {
      if (dart.notNull(position) < 0) {
        dart.throw(new core.RangeError.new("position must be greater than or equal to 0."));
      } else if (dart.notNull(position) > string.length) {
        dart.throw(new core.RangeError.new("position must be less than or equal to the " + "string length."));
      }
    }
    if (length != null && dart.notNull(length) < 0) {
      dart.throw(new core.RangeError.new("length must be greater than or equal to 0."));
    }
    if (position != null && length != null && dart.notNull(position) + dart.notNull(length) > string.length) {
      dart.throw(new core.RangeError.new("position plus length must not go beyond the end of " + "the string."));
    }
  };
  dart.defineLazy(src__string_scanner, {
    /*src__string_scanner._slashAutoEscape*/get _slashAutoEscape() {
      return core.RegExp.new("/").pattern === "\\/";
    }
  });
  src__exception.StringScannerException = class StringScannerException extends src__span_exception.SourceSpanFormatException {
    get source() {
      return core.String._check(super.source);
    }
    get sourceUrl() {
      return this.span.sourceUrl;
    }
  };
  (src__exception.StringScannerException.new = function(message, span, source) {
    src__exception.StringScannerException.__proto__.new.call(this, message, span, source);
    ;
  }).prototype = src__exception.StringScannerException.prototype;
  dart.addTypeTests(src__exception.StringScannerException);
  dart.setGetterSignature(src__exception.StringScannerException, () => ({
    __proto__: dart.getGetters(src__exception.StringScannerException.__proto__),
    source: core.String,
    sourceUrl: core.Uri
  }));
  const _lastSpan$ = dart.privateName(src__relative_span_scanner, "_lastSpan");
  const _sourceFile$ = dart.privateName(src__relative_span_scanner, "_sourceFile");
  const _startLocation = dart.privateName(src__relative_span_scanner, "_startLocation");
  const _scanner$1 = dart.privateName(src__relative_span_scanner, "_scanner");
  const _column$0 = dart.privateName(src__relative_span_scanner, "_column");
  let const$7;
  let const$8;
  const _adjustLineAndColumn$0 = dart.privateName(src__relative_span_scanner, "_adjustLineAndColumn");
  let const$9;
  const _line$0 = dart.privateName(src__relative_span_scanner, "_line");
  let const$10;
  const _betweenCRLF$0 = dart.privateName(src__relative_span_scanner, "_betweenCRLF");
  let const$11;
  const _newlinesIn$0 = dart.privateName(src__relative_span_scanner, "_newlinesIn");
  let const$12;
  let const$13;
  const _column_$ = dart.privateName(src__relative_span_scanner, "_column=");
  let const$14;
  const _line_$ = dart.privateName(src__relative_span_scanner, "_line=");
  let const$15;
  const _lastSpan_ = dart.privateName(src__relative_span_scanner, "_lastSpan=");
  let const$16;
  src__relative_span_scanner.RelativeSpanScanner = class RelativeSpanScanner extends src__string_scanner.StringScanner {
    get line() {
      return dart.notNull(this[_sourceFile$].getLine(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position))) - dart.notNull(this[_startLocation].line);
    }
    get column() {
      let line = this[_sourceFile$].getLine(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position));
      let column = this[_sourceFile$].getColumn(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position), {line: line});
      return line == this[_startLocation].line ? dart.notNull(column) - dart.notNull(this[_startLocation].column) : column;
    }
    get state() {
      return new src__relative_span_scanner._SpanScannerState.new(this, this.position);
    }
    set state(state) {
      if (!src__relative_span_scanner._SpanScannerState.is(state) || src__relative_span_scanner._SpanScannerState.as(state)[_scanner$1] !== this) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      this.position = state.position;
    }
    get lastSpan() {
      return this[_lastSpan$];
    }
    get location() {
      return this[_sourceFile$].location(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position));
    }
    get emptySpan() {
      return this.location.pointSpan();
    }
    spanFrom(startState, endState) {
      if (endState === void 0) endState = null;
      let endPosition = endState == null ? this.position : endState.position;
      return this[_sourceFile$].span(dart.notNull(this[_startLocation].offset) + dart.notNull(startState.position), dart.notNull(this[_startLocation].offset) + dart.notNull(endPosition));
    }
    matches(pattern) {
      if (!dart.test(super.matches(pattern))) {
        this[_lastSpan$] = null;
        return false;
      }
      this[_lastSpan$] = this[_sourceFile$].span(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position), dart.notNull(this[_startLocation].offset) + dart.notNull(this.lastMatch.end));
      return true;
    }
    error(message, opts) {
      let match = opts && 'match' in opts ? opts.match : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let length = opts && 'length' in opts ? opts.length : null;
      src__utils.validateErrorArgs(this.string, match, position, length);
      if (match == null && position == null && length == null) match = this.lastMatch;
      if (position == null) {
        position = match == null ? this.position : match.start;
      }
      if (length == null) length = match == null ? 1 : dart.notNull(match.end) - dart.notNull(match.start);
      let span = this[_sourceFile$].span(dart.notNull(this[_startLocation].offset) + dart.notNull(position), dart.notNull(this[_startLocation].offset) + dart.notNull(position) + dart.notNull(length));
      dart.throw(new src__exception.StringScannerException.new(message, span, this.string));
    }
    get [_column$]() {
      return core.int._check(this[$noSuchMethod](new core._Invocation.getter(const$7 || (const$7 = dart.const(new _js_helper.PrivateSymbol.new('_column', _column$0))))));
    }
    get [_sourceFile]() {
      return src__file.SourceFile._check(this[$noSuchMethod](new core._Invocation.getter(const$8 || (const$8 = dart.const(new _js_helper.PrivateSymbol.new('_sourceFile', _sourceFile$))))));
    }
    [_adjustLineAndColumn$](character) {
      return this[$noSuchMethod](new core._Invocation.method(const$9 || (const$9 = dart.const(new _js_helper.PrivateSymbol.new('_adjustLineAndColumn', _adjustLineAndColumn$0))), null, [character]));
    }
    get [_line$]() {
      return core.int._check(this[$noSuchMethod](new core._Invocation.getter(const$10 || (const$10 = dart.const(new _js_helper.PrivateSymbol.new('_line', _line$0))))));
    }
    get [_betweenCRLF$]() {
      return core.bool._check(this[$noSuchMethod](new core._Invocation.getter(const$11 || (const$11 = dart.const(new _js_helper.PrivateSymbol.new('_betweenCRLF', _betweenCRLF$0))))));
    }
    [_newlinesIn$](text) {
      return ListOfMatch()._check(this[$noSuchMethod](new core._Invocation.method(const$12 || (const$12 = dart.const(new _js_helper.PrivateSymbol.new('_newlinesIn', _newlinesIn$0))), null, [text])));
    }
    get [_lastSpan]() {
      return src__file.FileSpan._check(this[$noSuchMethod](new core._Invocation.getter(const$13 || (const$13 = dart.const(new _js_helper.PrivateSymbol.new('_lastSpan', _lastSpan$))))));
    }
    set [_column$](value) {
      return this[$noSuchMethod](new core._Invocation.setter(const$14 || (const$14 = dart.const(new _js_helper.PrivateSymbol.new('_column=', _column_$))), value));
    }
    set [_line$](value) {
      return this[$noSuchMethod](new core._Invocation.setter(const$15 || (const$15 = dart.const(new _js_helper.PrivateSymbol.new('_line=', _line_$))), value));
    }
    set [_lastSpan](value) {
      return this[$noSuchMethod](new core._Invocation.setter(const$16 || (const$16 = dart.const(new _js_helper.PrivateSymbol.new('_lastSpan=', _lastSpan_))), value));
    }
  };
  (src__relative_span_scanner.RelativeSpanScanner.new = function(span) {
    this[_lastSpan$] = null;
    this[_sourceFile$] = span.file;
    this[_startLocation] = span.start;
    src__relative_span_scanner.RelativeSpanScanner.__proto__.new.call(this, span.text, {sourceUrl: span.sourceUrl});
    ;
  }).prototype = src__relative_span_scanner.RelativeSpanScanner.prototype;
  dart.addTypeTests(src__relative_span_scanner.RelativeSpanScanner);
  src__relative_span_scanner.RelativeSpanScanner[dart.implements] = () => [src__span_scanner.SpanScanner];
  dart.setMethodSignature(src__relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getMethods(src__relative_span_scanner.RelativeSpanScanner.__proto__),
    spanFrom: dart.fnType(src__file.FileSpan, [src__line_scanner.LineScannerState], [src__line_scanner.LineScannerState]),
    [_adjustLineAndColumn$]: dart.fnType(dart.void, [core.int]),
    [_newlinesIn$]: dart.fnType(core.List$(core.Match), [core.String])
  }));
  dart.setGetterSignature(src__relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getGetters(src__relative_span_scanner.RelativeSpanScanner.__proto__),
    line: core.int,
    column: core.int,
    state: src__line_scanner.LineScannerState,
    lastSpan: src__file.FileSpan,
    location: src__file.FileLocation,
    emptySpan: src__file.FileSpan,
    [_column$]: core.int,
    [_sourceFile]: src__file.SourceFile,
    [_line$]: core.int,
    [_betweenCRLF$]: core.bool,
    [_lastSpan]: src__file.FileSpan
  }));
  dart.setSetterSignature(src__relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getSetters(src__relative_span_scanner.RelativeSpanScanner.__proto__),
    state: src__line_scanner.LineScannerState,
    [_column$]: core.int,
    [_line$]: core.int,
    [_lastSpan]: src__file.FileSpan
  }));
  dart.setFieldSignature(src__relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getFields(src__relative_span_scanner.RelativeSpanScanner.__proto__),
    [_sourceFile$]: dart.finalFieldType(src__file.SourceFile),
    [_startLocation]: dart.finalFieldType(src__file.FileLocation),
    [_lastSpan$]: dart.fieldType(src__file.FileSpan)
  }));
  let const$17;
  src__relative_span_scanner._SpanScannerState = class _SpanScannerState extends core.Object {
    get line() {
      return this[_scanner$1][_sourceFile$].getLine(this.position);
    }
    get column() {
      return this[_scanner$1][_sourceFile$].getColumn(this.position);
    }
    get [_scanner$0]() {
      return src__line_scanner.LineScanner._check(this[$noSuchMethod](new core._Invocation.getter(const$17 || (const$17 = dart.const(new _js_helper.PrivateSymbol.new('_scanner', _scanner$1))))));
    }
  };
  (src__relative_span_scanner._SpanScannerState.new = function(_scanner, position) {
    this[_scanner$1] = _scanner;
    this.position = position;
    ;
  }).prototype = src__relative_span_scanner._SpanScannerState.prototype;
  dart.addTypeTests(src__relative_span_scanner._SpanScannerState);
  src__relative_span_scanner._SpanScannerState[dart.implements] = () => [src__line_scanner.LineScannerState];
  dart.setGetterSignature(src__relative_span_scanner._SpanScannerState, () => ({
    __proto__: dart.getGetters(src__relative_span_scanner._SpanScannerState.__proto__),
    line: core.int,
    column: core.int,
    [_scanner$0]: src__line_scanner.LineScanner
  }));
  dart.setFieldSignature(src__relative_span_scanner._SpanScannerState, () => ({
    __proto__: dart.getFields(src__relative_span_scanner._SpanScannerState.__proto__),
    [_scanner$1]: dart.finalFieldType(src__relative_span_scanner.RelativeSpanScanner),
    position: dart.finalFieldType(core.int)
  }));
  src__line_scanner.LineScanner = class LineScanner extends src__string_scanner.StringScanner {
    get line() {
      return this[_line$];
    }
    get column() {
      return this[_column$];
    }
    get state() {
      return new src__line_scanner.LineScannerState.__(this, this.position, this.line, this.column);
    }
    get [_betweenCRLF$]() {
      return this.peekChar(-1) == ascii$.$cr && this.peekChar() == ascii$.$lf;
    }
    set state(state) {
      if (state[_scanner$0] !== this) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      super.position = state.position;
      this[_line$] = state.line;
      this[_column$] = state.column;
    }
    set position(newPosition) {
      let oldPosition = this.position;
      super.position = newPosition;
      if (dart.notNull(newPosition) > dart.notNull(oldPosition)) {
        let newlines = this[_newlinesIn$](this.string[$substring](oldPosition, newPosition));
        this[_line$] = dart.notNull(this[_line$]) + dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column$] = dart.notNull(this[_column$]) + (dart.notNull(newPosition) - dart.notNull(oldPosition));
        } else {
          this[_column$] = dart.notNull(newPosition) - dart.notNull(newlines[$last].end);
        }
      } else {
        let newlines = this[_newlinesIn$](this.string[$substring](newPosition, oldPosition));
        if (dart.test(this[_betweenCRLF$])) newlines[$removeLast]();
        this[_line$] = dart.notNull(this[_line$]) - dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column$] = dart.notNull(this[_column$]) - (dart.notNull(oldPosition) - dart.notNull(newPosition));
        } else {
          this[_column$] = dart.notNull(newPosition) - this.string[$lastIndexOf](src__line_scanner._newlineRegExp, newPosition) - 1;
        }
      }
    }
    get position() {
      return super.position;
    }
    scanChar(character) {
      if (!dart.test(super.scanChar(character))) return false;
      this[_adjustLineAndColumn$](character);
      return true;
    }
    readChar() {
      let character = super.readChar();
      this[_adjustLineAndColumn$](character);
      return character;
    }
    [_adjustLineAndColumn$](character) {
      if (character == ascii$.$lf || character == ascii$.$cr && this.peekChar() != ascii$.$lf) {
        this[_line$] = dart.notNull(this[_line$]) + 1;
        this[_column$] = 0;
      } else {
        this[_column$] = dart.notNull(this[_column$]) + 1;
      }
    }
    scan(pattern) {
      if (!dart.test(super.scan(pattern))) return false;
      let newlines = this[_newlinesIn$](this.lastMatch._get(0));
      this[_line$] = dart.notNull(this[_line$]) + dart.notNull(newlines[$length]);
      if (dart.test(newlines[$isEmpty])) {
        this[_column$] = dart.notNull(this[_column$]) + this.lastMatch._get(0).length;
      } else {
        this[_column$] = this.lastMatch._get(0).length - dart.notNull(newlines[$last].end);
      }
      return true;
    }
    [_newlinesIn$](text) {
      let newlines = src__line_scanner._newlineRegExp.allMatches(text)[$toList]();
      if (dart.test(this[_betweenCRLF$])) newlines[$removeLast]();
      return newlines;
    }
  };
  (src__line_scanner.LineScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_line$] = 0;
    this[_column$] = 0;
    src__line_scanner.LineScanner.__proto__.new.call(this, string, {sourceUrl: sourceUrl, position: position});
    ;
  }).prototype = src__line_scanner.LineScanner.prototype;
  dart.addTypeTests(src__line_scanner.LineScanner);
  dart.setMethodSignature(src__line_scanner.LineScanner, () => ({
    __proto__: dart.getMethods(src__line_scanner.LineScanner.__proto__),
    [_adjustLineAndColumn$]: dart.fnType(dart.void, [core.int]),
    [_newlinesIn$]: dart.fnType(core.List$(core.Match), [core.String])
  }));
  dart.setGetterSignature(src__line_scanner.LineScanner, () => ({
    __proto__: dart.getGetters(src__line_scanner.LineScanner.__proto__),
    line: core.int,
    column: core.int,
    state: src__line_scanner.LineScannerState,
    [_betweenCRLF$]: core.bool
  }));
  dart.setSetterSignature(src__line_scanner.LineScanner, () => ({
    __proto__: dart.getSetters(src__line_scanner.LineScanner.__proto__),
    state: src__line_scanner.LineScannerState
  }));
  dart.setFieldSignature(src__line_scanner.LineScanner, () => ({
    __proto__: dart.getFields(src__line_scanner.LineScanner.__proto__),
    [_line$]: dart.fieldType(core.int),
    [_column$]: dart.fieldType(core.int)
  }));
  src__line_scanner.LineScannerState = class LineScannerState extends core.Object {
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
  };
  (src__line_scanner.LineScannerState.__ = function(_scanner, position, line, column) {
    this[_scanner$0] = _scanner;
    this[position$] = position;
    this[line$] = line;
    this[column$] = column;
    ;
  }).prototype = src__line_scanner.LineScannerState.prototype;
  dart.addTypeTests(src__line_scanner.LineScannerState);
  const position$ = Symbol("LineScannerState.position");
  const line$ = Symbol("LineScannerState.line");
  const column$ = Symbol("LineScannerState.column");
  dart.setFieldSignature(src__line_scanner.LineScannerState, () => ({
    __proto__: dart.getFields(src__line_scanner.LineScannerState.__proto__),
    [_scanner$0]: dart.finalFieldType(src__line_scanner.LineScanner),
    position: dart.finalFieldType(core.int),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__line_scanner, {
    /*src__line_scanner._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n?|\\n");
    }
  });
  const _line$1 = dart.privateName(src__eager_span_scanner, "_line");
  const _column$1 = dart.privateName(src__eager_span_scanner, "_column");
  const _betweenCRLF$1 = dart.privateName(src__eager_span_scanner, "_betweenCRLF");
  const _scanner$2 = dart.privateName(src__eager_span_scanner, "_scanner");
  const _newlinesIn$1 = dart.privateName(src__eager_span_scanner, "_newlinesIn");
  const _adjustLineAndColumn$1 = dart.privateName(src__eager_span_scanner, "_adjustLineAndColumn");
  src__eager_span_scanner.EagerSpanScanner = class EagerSpanScanner extends src__span_scanner.SpanScanner {
    get line() {
      return this[_line$1];
    }
    get column() {
      return this[_column$1];
    }
    get state() {
      return new src__eager_span_scanner._EagerSpanScannerState.new(this, this.position, this.line, this.column);
    }
    get [_betweenCRLF$1]() {
      return this.peekChar(-1) == ascii$.$cr && this.peekChar() == ascii$.$lf;
    }
    set state(state) {
      if (!src__eager_span_scanner._EagerSpanScannerState.is(state) || src__eager_span_scanner._EagerSpanScannerState.as(state)[_scanner$2] !== this) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      super.position = state.position;
      this[_line$1] = state.line;
      this[_column$1] = state.column;
    }
    set position(newPosition) {
      let oldPosition = this.position;
      super.position = newPosition;
      if (dart.notNull(newPosition) > dart.notNull(oldPosition)) {
        let newlines = this[_newlinesIn$1](this.string[$substring](oldPosition, newPosition));
        this[_line$1] = dart.notNull(this[_line$1]) + dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column$1] = dart.notNull(this[_column$1]) + (dart.notNull(newPosition) - dart.notNull(oldPosition));
        } else {
          this[_column$1] = dart.notNull(newPosition) - dart.notNull(newlines[$last].end);
        }
      } else {
        let newlines = this[_newlinesIn$1](this.string[$substring](newPosition, oldPosition));
        if (dart.test(this[_betweenCRLF$1])) newlines[$removeLast]();
        this[_line$1] = dart.notNull(this[_line$1]) - dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column$1] = dart.notNull(this[_column$1]) - (dart.notNull(oldPosition) - dart.notNull(newPosition));
        } else {
          this[_column$1] = dart.notNull(newPosition) - this.string[$lastIndexOf](src__eager_span_scanner._newlineRegExp, newPosition) - 1;
        }
      }
    }
    get position() {
      return super.position;
    }
    scanChar(character) {
      if (!dart.test(super.scanChar(character))) return false;
      this[_adjustLineAndColumn$1](character);
      return true;
    }
    readChar() {
      let character = super.readChar();
      this[_adjustLineAndColumn$1](character);
      return character;
    }
    [_adjustLineAndColumn$1](character) {
      if (character == ascii$.$lf || character == ascii$.$cr && this.peekChar() != ascii$.$lf) {
        this[_line$1] = dart.notNull(this[_line$1]) + 1;
        this[_column$1] = 0;
      } else {
        this[_column$1] = dart.notNull(this[_column$1]) + 1;
      }
    }
    scan(pattern) {
      if (!dart.test(super.scan(pattern))) return false;
      let newlines = this[_newlinesIn$1](this.lastMatch._get(0));
      this[_line$1] = dart.notNull(this[_line$1]) + dart.notNull(newlines[$length]);
      if (dart.test(newlines[$isEmpty])) {
        this[_column$1] = dart.notNull(this[_column$1]) + this.lastMatch._get(0).length;
      } else {
        this[_column$1] = this.lastMatch._get(0).length - dart.notNull(newlines[$last].end);
      }
      return true;
    }
    [_newlinesIn$1](text) {
      let newlines = src__eager_span_scanner._newlineRegExp.allMatches(text)[$toList]();
      if (dart.test(this[_betweenCRLF$1])) newlines[$removeLast]();
      return newlines;
    }
  };
  (src__eager_span_scanner.EagerSpanScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_line$1] = 0;
    this[_column$1] = 0;
    src__eager_span_scanner.EagerSpanScanner.__proto__.new.call(this, string, {sourceUrl: sourceUrl, position: position});
    ;
  }).prototype = src__eager_span_scanner.EagerSpanScanner.prototype;
  dart.addTypeTests(src__eager_span_scanner.EagerSpanScanner);
  dart.setMethodSignature(src__eager_span_scanner.EagerSpanScanner, () => ({
    __proto__: dart.getMethods(src__eager_span_scanner.EagerSpanScanner.__proto__),
    [_adjustLineAndColumn$1]: dart.fnType(dart.void, [core.int]),
    [_newlinesIn$1]: dart.fnType(core.List$(core.Match), [core.String])
  }));
  dart.setGetterSignature(src__eager_span_scanner.EagerSpanScanner, () => ({
    __proto__: dart.getGetters(src__eager_span_scanner.EagerSpanScanner.__proto__),
    [_betweenCRLF$1]: core.bool
  }));
  dart.setFieldSignature(src__eager_span_scanner.EagerSpanScanner, () => ({
    __proto__: dart.getFields(src__eager_span_scanner.EagerSpanScanner.__proto__),
    [_line$1]: dart.fieldType(core.int),
    [_column$1]: dart.fieldType(core.int)
  }));
  let const$18;
  src__eager_span_scanner._EagerSpanScannerState = class _EagerSpanScannerState extends core.Object {
    get [_scanner$0]() {
      return src__line_scanner.LineScanner._check(this[$noSuchMethod](new core._Invocation.getter(const$18 || (const$18 = dart.const(new _js_helper.PrivateSymbol.new('_scanner', _scanner$2))))));
    }
  };
  (src__eager_span_scanner._EagerSpanScannerState.new = function(_scanner, position, line, column) {
    this[_scanner$2] = _scanner;
    this.position = position;
    this.line = line;
    this.column = column;
    ;
  }).prototype = src__eager_span_scanner._EagerSpanScannerState.prototype;
  dart.addTypeTests(src__eager_span_scanner._EagerSpanScannerState);
  src__eager_span_scanner._EagerSpanScannerState[dart.implements] = () => [src__line_scanner.LineScannerState];
  dart.setGetterSignature(src__eager_span_scanner._EagerSpanScannerState, () => ({
    __proto__: dart.getGetters(src__eager_span_scanner._EagerSpanScannerState.__proto__),
    [_scanner$0]: src__line_scanner.LineScanner
  }));
  dart.setFieldSignature(src__eager_span_scanner._EagerSpanScannerState, () => ({
    __proto__: dart.getFields(src__eager_span_scanner._EagerSpanScannerState.__proto__),
    [_scanner$2]: dart.finalFieldType(src__eager_span_scanner.EagerSpanScanner),
    position: dart.finalFieldType(core.int),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__eager_span_scanner, {
    /*src__eager_span_scanner._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n?|\\n");
    }
  });
  dart.trackLibraries("packages/string_scanner/src/eager_span_scanner", {
    "package:string_scanner/src/span_scanner.dart": src__span_scanner,
    "package:string_scanner/src/utils.dart": src__utils,
    "package:string_scanner/src/string_scanner.dart": src__string_scanner,
    "package:string_scanner/src/exception.dart": src__exception,
    "package:string_scanner/src/relative_span_scanner.dart": src__relative_span_scanner,
    "package:string_scanner/src/line_scanner.dart": src__line_scanner,
    "package:string_scanner/src/eager_span_scanner.dart": src__eager_span_scanner,
    "package:string_scanner/string_scanner.dart": string_scanner
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/string_scanner/src/string_scanner.dart","org-dartlang-app:///packages/string_scanner/src/span_scanner.dart","org-dartlang-app:///packages/string_scanner/src/utils.dart","org-dartlang-app:///packages/string_scanner/src/exception.dart","org-dartlang-app:///packages/string_scanner/src/relative_span_scanner.dart","org-dartlang-app:///packages/string_scanner/src/line_scanner.dart","org-dartlang-app:///packages/string_scanner/src/eager_span_scanner.dart"],"names":[],"mappings":"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","file":"eager_span_scanner.ddc.js"}');
  // Exports:
  return {
    src__span_scanner: src__span_scanner,
    src__utils: src__utils,
    src__string_scanner: src__string_scanner,
    src__exception: src__exception,
    src__relative_span_scanner: src__relative_span_scanner,
    src__line_scanner: src__line_scanner,
    src__eager_span_scanner: src__eager_span_scanner,
    string_scanner: string_scanner
  };
});

//# sourceMappingURL=eager_span_scanner.ddc.js.map
