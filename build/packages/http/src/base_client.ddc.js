define(['dart_sdk', 'packages/http_parser/http_parser', 'packages/pedantic/pedantic'], function(dart_sdk, http_parser, pedantic) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__media_type = http_parser.src__media_type;
  const pedantic$ = pedantic.pedantic;
  const src__request = Object.create(dart.library);
  const src__utils = Object.create(dart.library);
  const src__byte_stream = Object.create(dart.library);
  const src__base_request = Object.create(dart.library);
  const src__streamed_response = Object.create(dart.library);
  const src__base_response = Object.create(dart.library);
  const src__client = Object.create(dart.library);
  const src__response = Object.create(dart.library);
  const src__browser_client = Object.create(dart.library);
  const src__exception = Object.create(dart.library);
  const src__base_client = Object.create(dart.library);
  const $length = dartx.length;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $toLowerCase = dartx.toLowerCase;
  const $hashCode = dartx.hashCode;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $map = dartx.map;
  const $join = dartx.join;
  const $isEmpty = dartx.isEmpty;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $buffer = dartx.buffer;
  const $onLoad = dartx.onLoad;
  const $response = dartx.response;
  const $result = dartx.result;
  const $responseHeaders = dartx.responseHeaders;
  const $onError = dartx.onError;
  const $toString = dartx.toString;
  const $addAll = dartx.addAll;
  const $cast = dartx.cast;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let LinkedHashMapOfString$String = () => (LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))();
  let StringAndStringTobool = () => (StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let JSArrayOfListOfString = () => (JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(ListOfString())))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringAndStringTovoid = () => (StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))();
  let ListOfStringToString = () => (ListOfStringToString = dart.constFn(dart.fnType(core.String, [ListOfString()])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StreamOfListOfint = () => (StreamOfListOfint = dart.constFn(async.Stream$(ListOfint())))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let CompleterOfUint8List = () => (CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))();
  let ListOfintTovoid = () => (ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [ListOfint()])))();
  let Uint8ListToResponse = () => (Uint8ListToResponse = dart.constFn(dart.fnType(src__response.Response, [typed_data.Uint8List])))();
  let _HashSetOfHttpRequest = () => (_HashSetOfHttpRequest = dart.constFn(collection._HashSet$(html.HttpRequest)))();
  let CompleterOfStreamedResponse = () => (CompleterOfStreamedResponse = dart.constFn(async.Completer$(src__streamed_response.StreamedResponse)))();
  let ProgressEventToNull = () => (ProgressEventToNull = dart.constFn(dart.fnType(core.Null, [html.ProgressEvent])))();
  let ResponseToString = () => (ResponseToString = dart.constFn(dart.fnType(core.String, [src__response.Response])))();
  let ResponseToUint8List = () => (ResponseToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [src__response.Response])))();
  const _defaultEncoding = dart.privateName(src__request, "_defaultEncoding");
  const _bodyBytes = dart.privateName(src__request, "_bodyBytes");
  const _contentType = dart.privateName(src__request, "_contentType");
  const _checkFinalized = dart.privateName(src__request, "_checkFinalized");
  const _contentLength = dart.privateName(src__base_request, "_contentLength");
  const _persistentConnection = dart.privateName(src__base_request, "_persistentConnection");
  const _followRedirects = dart.privateName(src__base_request, "_followRedirects");
  const _maxRedirects = dart.privateName(src__base_request, "_maxRedirects");
  const _finalized = dart.privateName(src__base_request, "_finalized");
  const _checkFinalized$ = dart.privateName(src__base_request, "_checkFinalized");
  src__base_request.BaseRequest = class BaseRequest extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get headers() {
      return this[headers];
    }
    set headers(value) {
      super.headers = value;
    }
    get contentLength() {
      return this[_contentLength];
    }
    set contentLength(value) {
      if (value != null && dart.notNull(value) < 0) {
        dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(value) + "."));
      }
      this[_checkFinalized$]();
      this[_contentLength] = value;
    }
    get persistentConnection() {
      return this[_persistentConnection];
    }
    set persistentConnection(value) {
      this[_checkFinalized$]();
      this[_persistentConnection] = value;
    }
    get followRedirects() {
      return this[_followRedirects];
    }
    set followRedirects(value) {
      this[_checkFinalized$]();
      this[_followRedirects] = value;
    }
    get maxRedirects() {
      return this[_maxRedirects];
    }
    set maxRedirects(value) {
      this[_checkFinalized$]();
      this[_maxRedirects] = value;
    }
    get finalized() {
      return this[_finalized];
    }
    finalize() {
      if (dart.test(this.finalized)) dart.throw(new core.StateError.new("Can't finalize a finalized Request."));
      this[_finalized] = true;
      return null;
    }
    send() {
      return async.async(src__streamed_response.StreamedResponse, (function* send() {
        let client = src__client.Client.new();
        try {
          let response = (yield client.send(this));
          let stream = src__utils.onDone(ListOfint(), response.stream, dart.bind(client, 'close'));
          return new src__streamed_response.StreamedResponse.new(new src__byte_stream.ByteStream.new(stream), response.statusCode, {contentLength: response.contentLength, request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
        } catch (e) {
          let _ = dart.getThrown(e);
          client.close();
          dart.rethrow(e);
        }
      }).bind(this));
    }
    [_checkFinalized$]() {
      if (!dart.test(this.finalized)) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
    toString() {
      return dart.str(this.method) + " " + dart.str(this.url);
    }
  };
  (src__base_request.BaseRequest.new = function(method, url) {
    this[_contentLength] = null;
    this[_persistentConnection] = true;
    this[_followRedirects] = true;
    this[_maxRedirects] = 5;
    this[_finalized] = false;
    this[method$] = method;
    this[url$] = url;
    this[headers] = LinkedHashMapOfString$String().new({equals: dart.fn((key1, key2) => key1[$toLowerCase]() === key2[$toLowerCase](), StringAndStringTobool()), hashCode: dart.fn(key => key[$toLowerCase]()[$hashCode], StringToint())});
    ;
  }).prototype = src__base_request.BaseRequest.prototype;
  dart.addTypeTests(src__base_request.BaseRequest);
  const method$ = Symbol("BaseRequest.method");
  const url$ = Symbol("BaseRequest.url");
  const headers = Symbol("BaseRequest.headers");
  dart.setMethodSignature(src__base_request.BaseRequest, () => ({
    __proto__: dart.getMethods(src__base_request.BaseRequest.__proto__),
    finalize: dart.fnType(src__byte_stream.ByteStream, []),
    send: dart.fnType(async.Future$(src__streamed_response.StreamedResponse), []),
    [_checkFinalized$]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__base_request.BaseRequest, () => ({
    __proto__: dart.getGetters(src__base_request.BaseRequest.__proto__),
    contentLength: core.int,
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int,
    finalized: core.bool
  }));
  dart.setSetterSignature(src__base_request.BaseRequest, () => ({
    __proto__: dart.getSetters(src__base_request.BaseRequest.__proto__),
    contentLength: core.int,
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int
  }));
  dart.setFieldSignature(src__base_request.BaseRequest, () => ({
    __proto__: dart.getFields(src__base_request.BaseRequest.__proto__),
    method: dart.finalFieldType(core.String),
    url: dart.finalFieldType(core.Uri),
    [_contentLength]: dart.fieldType(core.int),
    [_persistentConnection]: dart.fieldType(core.bool),
    [_followRedirects]: dart.fieldType(core.bool),
    [_maxRedirects]: dart.fieldType(core.int),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    [_finalized]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__base_request.BaseRequest, ['toString']);
  src__request.Request = class Request extends src__base_request.BaseRequest {
    get contentLength() {
      return this.bodyBytes[$length];
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "non-streaming Request objects."));
    }
    get encoding() {
      if (this[_contentType] == null || !dart.test(this[_contentType].parameters[$containsKey]("charset"))) {
        return this[_defaultEncoding];
      }
      return src__utils.requiredEncodingForCharset(this[_contentType].parameters[$_get]("charset"));
    }
    set encoding(value) {
      this[_checkFinalized]();
      this[_defaultEncoding] = value;
      let contentType = this[_contentType];
      if (contentType == null) return;
      this[_contentType] = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", value.name])});
    }
    get bodyBytes() {
      return this[_bodyBytes];
    }
    set bodyBytes(value) {
      this[_checkFinalized]();
      this[_bodyBytes] = src__utils.toUint8List(value);
    }
    get body() {
      return this.encoding.decode(this.bodyBytes);
    }
    set body(value) {
      this.bodyBytes = this.encoding.encode(value);
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new src__media_type.MediaType.new("text", "plain", new (IdentityMapOfString$String()).from(["charset", this.encoding.name]));
      } else if (!dart.test(contentType.parameters[$containsKey]("charset"))) {
        this[_contentType] = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", this.encoding.name])});
      }
    }
    get bodyFields() {
      let contentType = this[_contentType];
      if (contentType == null || contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot access the body fields of a Request without " + "content-type \"application/x-www-form-urlencoded\"."));
      }
      return core.Uri.splitQueryString(this.body, {encoding: this.encoding});
    }
    set bodyFields(fields) {
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new src__media_type.MediaType.new("application", "x-www-form-urlencoded");
      } else if (contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot set the body fields of a Request with " + "content-type \"" + dart.str(contentType.mimeType) + "\"."));
      }
      this.body = src__utils.mapToQuery(fields, {encoding: this.encoding});
    }
    finalize() {
      super.finalize();
      return src__byte_stream.ByteStream.fromBytes(this.bodyBytes);
    }
    get [_contentType]() {
      let contentType = this.headers[$_get]("content-type");
      if (contentType == null) return null;
      return src__media_type.MediaType.parse(contentType);
    }
    set [_contentType](value) {
      this.headers[$_set]("content-type", dart.toString(value));
    }
    [_checkFinalized]() {
      if (!dart.test(this.finalized)) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
  };
  (src__request.Request.new = function(method, url) {
    this[_defaultEncoding] = convert.utf8;
    this[_bodyBytes] = _native_typed_data.NativeUint8List.new(0);
    src__request.Request.__proto__.new.call(this, method, url);
    ;
  }).prototype = src__request.Request.prototype;
  dart.addTypeTests(src__request.Request);
  dart.setMethodSignature(src__request.Request, () => ({
    __proto__: dart.getMethods(src__request.Request.__proto__),
    [_checkFinalized]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__request.Request, () => ({
    __proto__: dart.getGetters(src__request.Request.__proto__),
    encoding: convert.Encoding,
    bodyBytes: typed_data.Uint8List,
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: src__media_type.MediaType
  }));
  dart.setSetterSignature(src__request.Request, () => ({
    __proto__: dart.getSetters(src__request.Request.__proto__),
    encoding: convert.Encoding,
    bodyBytes: core.List$(core.int),
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: src__media_type.MediaType
  }));
  dart.setFieldSignature(src__request.Request, () => ({
    __proto__: dart.getFields(src__request.Request.__proto__),
    [_defaultEncoding]: dart.fieldType(convert.Encoding),
    [_bodyBytes]: dart.fieldType(typed_data.Uint8List)
  }));
  const _is_Pair_default = Symbol('_is_Pair_default');
  src__utils.Pair$ = dart.generic((E, F) => {
    class Pair extends core.Object {
      get first() {
        return this[first$];
      }
      set first(value) {
        this[first$] = E._check(value);
      }
      get last() {
        return this[last$];
      }
      set last(value) {
        this[last$] = F._check(value);
      }
      toString() {
        return "(" + dart.str(this.first) + ", " + dart.str(this.last) + ")";
      }
      _equals(other) {
        if (other == null) return false;
        if (!src__utils.Pair.is(other)) return false;
        return dart.equals(dart.dload(other, 'first'), this.first) && dart.equals(dart.dload(other, 'last'), this.last);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.first)) ^ dart.notNull(dart.hashCode(this.last))) >>> 0;
      }
    }
    (Pair.new = function(first, last) {
      this[first$] = first;
      this[last$] = last;
      ;
    }).prototype = Pair.prototype;
    dart.addTypeTests(Pair);
    Pair.prototype[_is_Pair_default] = true;
    const first$ = Symbol("Pair.first");
    const last$ = Symbol("Pair.last");
    dart.setFieldSignature(Pair, () => ({
      __proto__: dart.getFields(Pair.__proto__),
      first: dart.fieldType(E),
      last: dart.fieldType(F)
    }));
    dart.defineExtensionMethods(Pair, ['toString', '_equals']);
    dart.defineExtensionAccessors(Pair, ['hashCode']);
    return Pair;
  });
  src__utils.Pair = src__utils.Pair$();
  dart.addTypeTests(src__utils.Pair, _is_Pair_default);
  src__utils.mapToQuery = function(map, opts) {
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    let pairs = JSArrayOfListOfString().of([]);
    map[$forEach](dart.fn((key, value) => pairs[$add](JSArrayOfString().of([core.Uri.encodeQueryComponent(key, {encoding: encoding}), core.Uri.encodeQueryComponent(value, {encoding: encoding})])), StringAndStringTovoid()));
    return pairs[$map](core.String, dart.fn(pair => dart.str(pair[$_get](0)) + "=" + dart.str(pair[$_get](1)), ListOfStringToString()))[$join]("&");
  };
  src__utils.split1 = function(toSplit, pattern) {
    if (toSplit[$isEmpty]) return JSArrayOfString().of([]);
    let index = toSplit[$indexOf](pattern);
    if (index === -1) return JSArrayOfString().of([toSplit]);
    return JSArrayOfString().of([toSplit[$substring](0, index), toSplit[$substring](index + pattern.length)]);
  };
  src__utils.encodingForCharset = function(charset, fallback) {
    if (fallback === void 0) fallback = convert.latin1;
    if (charset == null) return fallback;
    let encoding = convert.Encoding.getByName(charset);
    return encoding == null ? fallback : encoding;
  };
  src__utils.requiredEncodingForCharset = function(charset) {
    let encoding = convert.Encoding.getByName(charset);
    if (encoding != null) return encoding;
    dart.throw(new core.FormatException.new("Unsupported encoding \"" + dart.str(charset) + "\"."));
  };
  src__utils.isPlainAscii = function(string) {
    return src__utils._ASCII_ONLY.hasMatch(string);
  };
  src__utils.toUint8List = function(input) {
    if (typed_data.Uint8List.is(input)) return input;
    if (typed_data.TypedData.is(input)) {
      return typed_data.Uint8List.view(typed_data.TypedData.as(input)[$buffer]);
    }
    return _native_typed_data.NativeUint8List.fromList(input);
  };
  src__utils.toByteStream = function(stream) {
    if (src__byte_stream.ByteStream.is(stream)) return stream;
    return new src__byte_stream.ByteStream.new(stream);
  };
  src__utils.onDone = function(T, stream, onDone) {
    return stream.transform(T, new (async._StreamHandlerTransformer$(T, T)).new({handleDone: dart.fn(sink => {
        sink.close();
        onDone();
      }, dart.fnType(core.Null, [async.EventSink$(T)]))}));
  };
  src__utils.store = function(stream, sink) {
    let completer = async.Completer.new();
    stream.listen(dart.bind(sink, 'add'), {onError: dart.bind(sink, 'addError'), onDone: dart.fn(() => {
        sink.close();
        completer.complete();
      }, VoidToNull())});
    return completer.future;
  };
  src__utils.writeStreamToSink = function(stream, sink) {
    let completer = async.Completer.new();
    stream.listen(dart.bind(sink, 'add'), {onError: dart.bind(sink, 'addError'), onDone: dart.fn(() => completer.complete(), VoidTovoid())});
    return completer.future;
  };
  src__utils.chainToCompleter = function(future, completer) {
    future.then(dart.void, dart.bind(completer, 'complete'), {onError: dart.bind(completer, 'completeError')});
  };
  dart.defineLazy(src__utils, {
    /*src__utils._ASCII_ONLY*/get _ASCII_ONLY() {
      return core.RegExp.new("^[\\x00-\\x7F]+$");
    }
  });
  src__byte_stream.ByteStream = class ByteStream extends async.StreamView$(core.List$(core.int)) {
    static fromBytes(bytes) {
      return new src__byte_stream.ByteStream.new(StreamOfListOfint().fromIterable(JSArrayOfListOfint().of([bytes])));
    }
    toBytes() {
      let completer = CompleterOfUint8List().new();
      let sink = new convert._ByteCallbackSink.new(dart.fn(bytes => completer.complete(_native_typed_data.NativeUint8List.fromList(bytes)), ListOfintTovoid()));
      this.listen(dart.bind(sink, 'add'), {onError: dart.bind(completer, 'completeError'), onDone: dart.bind(sink, 'close'), cancelOnError: true});
      return completer.future;
    }
    bytesToString(encoding) {
      if (encoding === void 0) encoding = convert.utf8;
      return encoding.decodeStream(this);
    }
    toStringStream(encoding) {
      if (encoding === void 0) encoding = convert.utf8;
      return encoding.decoder.bind(this);
    }
  };
  (src__byte_stream.ByteStream.new = function(stream) {
    src__byte_stream.ByteStream.__proto__.new.call(this, stream);
    ;
  }).prototype = src__byte_stream.ByteStream.prototype;
  dart.addTypeTests(src__byte_stream.ByteStream);
  dart.setMethodSignature(src__byte_stream.ByteStream, () => ({
    __proto__: dart.getMethods(src__byte_stream.ByteStream.__proto__),
    toBytes: dart.fnType(async.Future$(typed_data.Uint8List), []),
    bytesToString: dart.fnType(async.Future$(core.String), [], [convert.Encoding]),
    toStringStream: dart.fnType(async.Stream$(core.String), [], [convert.Encoding])
  }));
  let const$;
  let const$0;
  src__base_response.BaseResponse = class BaseResponse extends core.Object {
    get request() {
      return this[request$];
    }
    set request(value) {
      super.request = value;
    }
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get reasonPhrase() {
      return this[reasonPhrase$];
    }
    set reasonPhrase(value) {
      super.reasonPhrase = value;
    }
    get contentLength() {
      return this[contentLength$];
    }
    set contentLength(value) {
      super.contentLength = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    get isRedirect() {
      return this[isRedirect$];
    }
    set isRedirect(value) {
      super.isRedirect = value;
    }
    get persistentConnection() {
      return this[persistentConnection$];
    }
    set persistentConnection(value) {
      super.persistentConnection = value;
    }
  };
  (src__base_response.BaseResponse.new = function(statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : const$0 || (const$0 = dart.constMap(core.String, core.String, []));
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[statusCode$] = statusCode;
    this[contentLength$] = contentLength;
    this[request$] = request;
    this[headers$] = headers;
    this[isRedirect$] = isRedirect;
    this[persistentConnection$] = persistentConnection;
    this[reasonPhrase$] = reasonPhrase;
    if (dart.notNull(this.statusCode) < 100) {
      dart.throw(new core.ArgumentError.new("Invalid status code " + dart.str(this.statusCode) + "."));
    } else if (this.contentLength != null && dart.notNull(this.contentLength) < 0) {
      dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(this.contentLength) + "."));
    }
  }).prototype = src__base_response.BaseResponse.prototype;
  dart.addTypeTests(src__base_response.BaseResponse);
  const request$ = Symbol("BaseResponse.request");
  const statusCode$ = Symbol("BaseResponse.statusCode");
  const reasonPhrase$ = Symbol("BaseResponse.reasonPhrase");
  const contentLength$ = Symbol("BaseResponse.contentLength");
  const headers$ = Symbol("BaseResponse.headers");
  const isRedirect$ = Symbol("BaseResponse.isRedirect");
  const persistentConnection$ = Symbol("BaseResponse.persistentConnection");
  dart.setFieldSignature(src__base_response.BaseResponse, () => ({
    __proto__: dart.getFields(src__base_response.BaseResponse.__proto__),
    request: dart.finalFieldType(src__base_request.BaseRequest),
    statusCode: dart.finalFieldType(core.int),
    reasonPhrase: dart.finalFieldType(core.String),
    contentLength: dart.finalFieldType(core.int),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    isRedirect: dart.finalFieldType(core.bool),
    persistentConnection: dart.finalFieldType(core.bool)
  }));
  src__streamed_response.StreamedResponse = class StreamedResponse extends src__base_response.BaseResponse {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      super.stream = value;
    }
  };
  (src__streamed_response.StreamedResponse.new = function(stream, statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : const$ || (const$ = dart.constMap(core.String, core.String, []));
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[stream$] = src__utils.toByteStream(stream);
    src__streamed_response.StreamedResponse.__proto__.new.call(this, statusCode, {contentLength: contentLength, request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = src__streamed_response.StreamedResponse.prototype;
  dart.addTypeTests(src__streamed_response.StreamedResponse);
  const stream$ = Symbol("StreamedResponse.stream");
  dart.setFieldSignature(src__streamed_response.StreamedResponse, () => ({
    __proto__: dart.getFields(src__streamed_response.StreamedResponse.__proto__),
    stream: dart.finalFieldType(src__byte_stream.ByteStream)
  }));
  src__client.Client = class Client extends core.Object {
    static new() {
      return src__browser_client.createClient();
    }
  };
  (src__client.Client[dart.mixinNew] = function() {
  }).prototype = src__client.Client.prototype;
  dart.addTypeTests(src__client.Client);
  let const$1;
  let const$2;
  src__response.Response = class Response extends src__base_response.BaseResponse {
    get bodyBytes() {
      return this[bodyBytes$];
    }
    set bodyBytes(value) {
      super.bodyBytes = value;
    }
    get body() {
      return src__response._encodingForHeaders(this.headers).decode(this.bodyBytes);
    }
    static fromStream(response) {
      return response.stream.toBytes().then(src__response.Response, dart.fn(body => new src__response.Response.bytes(body, response.statusCode, {request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase}), Uint8ListToResponse()));
    }
  };
  (src__response.Response.new = function(body, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : const$1 || (const$1 = dart.constMap(core.String, core.String, []));
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    src__response.Response.bytes.call(this, src__response._encodingForHeaders(headers).encode(body), statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = src__response.Response.prototype;
  (src__response.Response.bytes = function(bodyBytes, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : const$2 || (const$2 = dart.constMap(core.String, core.String, []));
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[bodyBytes$] = src__utils.toUint8List(bodyBytes);
    src__response.Response.__proto__.new.call(this, statusCode, {contentLength: bodyBytes[$length], request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = src__response.Response.prototype;
  dart.addTypeTests(src__response.Response);
  const bodyBytes$ = Symbol("Response.bodyBytes");
  dart.setGetterSignature(src__response.Response, () => ({
    __proto__: dart.getGetters(src__response.Response.__proto__),
    body: core.String
  }));
  dart.setFieldSignature(src__response.Response, () => ({
    __proto__: dart.getFields(src__response.Response.__proto__),
    bodyBytes: dart.finalFieldType(typed_data.Uint8List)
  }));
  src__response._encodingForHeaders = function(headers) {
    return src__utils.encodingForCharset(src__response._contentTypeForHeaders(headers).parameters[$_get]("charset"));
  };
  src__response._contentTypeForHeaders = function(headers) {
    let contentType = headers[$_get]("content-type");
    if (contentType != null) return src__media_type.MediaType.parse(contentType);
    return new src__media_type.MediaType.new("application", "octet-stream");
  };
  const _xhrs = dart.privateName(src__browser_client, "_xhrs");
  const _openHttpRequest = dart.privateName(src__browser_client, "_openHttpRequest");
  const _sendUnstreamed = dart.privateName(src__base_client, "_sendUnstreamed");
  const _checkResponseSuccess = dart.privateName(src__base_client, "_checkResponseSuccess");
  src__base_client.BaseClient = class BaseClient extends core.Object {
    head(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("HEAD", url, headers);
    }
    get(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("GET", url, headers);
    }
    post(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("POST", url, headers, body, encoding);
    }
    put(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PUT", url, headers, body, encoding);
    }
    patch(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PATCH", url, headers, body, encoding);
    }
    delete(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("DELETE", url, headers);
    }
    read(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this.get(url, {headers: headers}).then(core.String, dart.fn(response => {
        this[_checkResponseSuccess](url, response);
        return response.body;
      }, ResponseToString()));
    }
    readBytes(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this.get(url, {headers: headers}).then(typed_data.Uint8List, dart.fn(response => {
        this[_checkResponseSuccess](url, response);
        return response.bodyBytes;
      }, ResponseToUint8List()));
    }
    [_sendUnstreamed](method, url, headers, body, encoding) {
      if (body === void 0) body = null;
      if (encoding === void 0) encoding = null;
      return async.async(src__response.Response, (function* _sendUnstreamed() {
        if (typeof url == 'string') url = core.Uri.parse(core.String._check(url));
        let request = new src__request.Request.new(method, core.Uri._check(url));
        if (headers != null) request.headers[$addAll](headers);
        if (encoding != null) request.encoding = encoding;
        if (body != null) {
          if (typeof body == 'string') {
            request.body = body;
          } else if (core.List.is(body)) {
            request.bodyBytes = body[$cast](core.int);
          } else if (core.Map.is(body)) {
            request.bodyFields = body[$cast](core.String, core.String);
          } else {
            dart.throw(new core.ArgumentError.new("Invalid request body \"" + dart.str(body) + "\"."));
          }
        }
        return src__response.Response.fromStream(yield this.send(request));
      }).bind(this));
    }
    [_checkResponseSuccess](url, response) {
      if (dart.notNull(response.statusCode) < 400) return;
      let message = "Request to " + dart.str(url) + " failed with status " + dart.str(response.statusCode);
      if (response.reasonPhrase != null) {
        message = message + ": " + dart.str(response.reasonPhrase);
      }
      if (typeof url == 'string') url = core.Uri.parse(core.String._check(url));
      dart.throw(new src__exception.ClientException.new(message + ".", core.Uri._check(url)));
    }
    close() {
    }
  };
  (src__base_client.BaseClient.new = function() {
    ;
  }).prototype = src__base_client.BaseClient.prototype;
  dart.addTypeTests(src__base_client.BaseClient);
  src__base_client.BaseClient[dart.implements] = () => [src__client.Client];
  dart.setMethodSignature(src__base_client.BaseClient, () => ({
    __proto__: dart.getMethods(src__base_client.BaseClient.__proto__),
    head: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String)}),
    get: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String)}),
    post: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {body: dart.dynamic, encoding: convert.Encoding, headers: core.Map$(core.String, core.String)}),
    put: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {body: dart.dynamic, encoding: convert.Encoding, headers: core.Map$(core.String, core.String)}),
    patch: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {body: dart.dynamic, encoding: convert.Encoding, headers: core.Map$(core.String, core.String)}),
    delete: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String)}),
    read: dart.fnType(async.Future$(core.String), [dart.dynamic], {headers: core.Map$(core.String, core.String)}),
    readBytes: dart.fnType(async.Future$(typed_data.Uint8List), [dart.dynamic], {headers: core.Map$(core.String, core.String)}),
    [_sendUnstreamed]: dart.fnType(async.Future$(src__response.Response), [core.String, dart.dynamic, core.Map$(core.String, core.String)], [dart.dynamic, convert.Encoding]),
    [_checkResponseSuccess]: dart.fnType(dart.void, [dart.dynamic, src__response.Response]),
    close: dart.fnType(dart.void, [])
  }));
  src__browser_client.BrowserClient = class BrowserClient extends src__base_client.BaseClient {
    get withCredentials() {
      return this[withCredentials];
    }
    set withCredentials(value) {
      this[withCredentials] = value;
    }
    send(request) {
      return async.async(src__streamed_response.StreamedResponse, (function* send() {
        let bytes = (yield request.finalize().toBytes());
        let xhr = html.HttpRequest.new();
        this[_xhrs].add(xhr);
        this[_openHttpRequest](xhr, request.method, dart.toString(request.url), {asynch: true});
        xhr.responseType = "blob";
        xhr.withCredentials = this.withCredentials;
        request.headers[$forEach](dart.bind(xhr, 'setRequestHeader'));
        let completer = CompleterOfStreamedResponse().new();
        pedantic$.unawaited(xhr[$onLoad].first.then(dart.void, dart.fn(_ => {
          let blob = xhr[$response] == null ? html.Blob.new([]) : xhr[$response];
          let reader = html.FileReader.new();
          reader[$onLoad].first.then(dart.dynamic, dart.fn(_ => {
            let body = typed_data.Uint8List.as(reader[$result]);
            completer.complete(new src__streamed_response.StreamedResponse.new(src__byte_stream.ByteStream.fromBytes(body), xhr.status, {contentLength: body[$length], request: request, headers: xhr[$responseHeaders], reasonPhrase: xhr.statusText}));
          }, ProgressEventToNull()));
          reader[$onError].first.then(dart.dynamic, dart.fn(error => {
            completer.completeError(new src__exception.ClientException.new(dart.toString(error), request.url), core.StackTrace.current);
          }, ProgressEventToNull()));
          reader.readAsArrayBuffer(html.Blob._check(blob));
        }, ProgressEventToNull())));
        pedantic$.unawaited(xhr[$onError].first.then(dart.void, dart.fn(_ => {
          completer.completeError(new src__exception.ClientException.new("XMLHttpRequest error.", request.url), core.StackTrace.current);
        }, ProgressEventToNull())));
        xhr.send(bytes);
        try {
          return yield completer.future;
        } finally {
          this[_xhrs].remove(xhr);
        }
      }).bind(this));
    }
    [_openHttpRequest](request, method, url, opts) {
      let asynch = opts && 'asynch' in opts ? opts.asynch : null;
      let user = opts && 'user' in opts ? opts.user : null;
      let password = opts && 'password' in opts ? opts.password : null;
      request.open(method, url, {async: asynch, user: user, password: password});
    }
    close() {
      for (let xhr of this[_xhrs]) {
        xhr.abort();
      }
    }
  };
  (src__browser_client.BrowserClient.new = function() {
    this[_xhrs] = new (_HashSetOfHttpRequest()).new();
    this[withCredentials] = false;
    ;
  }).prototype = src__browser_client.BrowserClient.prototype;
  dart.addTypeTests(src__browser_client.BrowserClient);
  const withCredentials = Symbol("BrowserClient.withCredentials");
  dart.setMethodSignature(src__browser_client.BrowserClient, () => ({
    __proto__: dart.getMethods(src__browser_client.BrowserClient.__proto__),
    send: dart.fnType(async.Future$(src__streamed_response.StreamedResponse), [src__base_request.BaseRequest]),
    [_openHttpRequest]: dart.fnType(dart.void, [html.HttpRequest, core.String, core.String], {asynch: core.bool, password: core.String, user: core.String})
  }));
  dart.setFieldSignature(src__browser_client.BrowserClient, () => ({
    __proto__: dart.getFields(src__browser_client.BrowserClient.__proto__),
    [_xhrs]: dart.finalFieldType(core.Set$(html.HttpRequest)),
    withCredentials: dart.fieldType(core.bool)
  }));
  src__browser_client.createClient = function() {
    return new src__browser_client.BrowserClient.new();
  };
  src__exception.ClientException = class ClientException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    toString() {
      return this.message;
    }
  };
  (src__exception.ClientException.new = function(message, uri) {
    if (uri === void 0) uri = null;
    this[message$] = message;
    this[uri$] = uri;
    ;
  }).prototype = src__exception.ClientException.prototype;
  dart.addTypeTests(src__exception.ClientException);
  const message$ = Symbol("ClientException.message");
  const uri$ = Symbol("ClientException.uri");
  src__exception.ClientException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__exception.ClientException, () => ({
    __proto__: dart.getFields(src__exception.ClientException.__proto__),
    message: dart.finalFieldType(core.String),
    uri: dart.finalFieldType(core.Uri)
  }));
  dart.defineExtensionMethods(src__exception.ClientException, ['toString']);
  dart.trackLibraries("packages/http/src/base_client", {
    "package:http/src/request.dart": src__request,
    "package:http/src/utils.dart": src__utils,
    "package:http/src/byte_stream.dart": src__byte_stream,
    "package:http/src/base_request.dart": src__base_request,
    "package:http/src/streamed_response.dart": src__streamed_response,
    "package:http/src/base_response.dart": src__base_response,
    "package:http/src/client.dart": src__client,
    "package:http/src/response.dart": src__response,
    "package:http/src/browser_client.dart": src__browser_client,
    "package:http/src/exception.dart": src__exception,
    "package:http/src/base_client.dart": src__base_client
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/http/src/base_request.dart","org-dartlang-app:///packages/http/src/request.dart","org-dartlang-app:///packages/http/src/utils.dart","org-dartlang-app:///packages/http/src/byte_stream.dart","org-dartlang-app:///packages/http/src/base_response.dart","org-dartlang-app:///packages/http/src/streamed_response.dart","org-dartlang-app:///packages/http/src/client.dart","org-dartlang-app:///packages/http/src/response.dart","org-dartlang-app:///packages/http/src/base_client.dart","org-dartlang-app:///packages/http/src/browser_client.dart","org-dartlang-app:///packages/http/src/exception.dart"],"names":[],"mappings":"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","file":"base_client.ddc.js"}');
  // Exports:
  return {
    src__request: src__request,
    src__utils: src__utils,
    src__byte_stream: src__byte_stream,
    src__base_request: src__base_request,
    src__streamed_response: src__streamed_response,
    src__base_response: src__base_response,
    src__client: src__client,
    src__response: src__response,
    src__browser_client: src__browser_client,
    src__exception: src__exception,
    src__base_client: src__base_client
  };
});

//# sourceMappingURL=base_client.ddc.js.map
