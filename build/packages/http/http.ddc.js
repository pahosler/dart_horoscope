define(['dart_sdk', 'packages/http/src/base_client', 'packages/http_parser/http_parser'], function(dart_sdk, base_client, http_parser) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = base_client.src__utils;
  const src__byte_stream = base_client.src__byte_stream;
  const src__response = base_client.src__response;
  const src__client = base_client.src__client;
  const src__base_request = base_client.src__base_request;
  const src__media_type = http_parser.src__media_type;
  const src__multipart_file_stub = Object.create(dart.library);
  const src__multipart_file = Object.create(dart.library);
  const http = Object.create(dart.library);
  const src__streamed_request = Object.create(dart.library);
  const src__multipart_request = Object.create(dart.library);
  const src__boundary_characters = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $forEach = dartx.forEach;
  const $_set = dartx._set;
  const $replaceAll = dartx.replaceAll;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let FutureOfResponse = () => (FutureOfResponse = dart.constFn(async.Future$(src__response.Response)))();
  let ClientToFutureOfResponse = () => (ClientToFutureOfResponse = dart.constFn(dart.fnType(FutureOfResponse(), [src__client.Client])))();
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  let ClientToFutureOfString = () => (ClientToFutureOfString = dart.constFn(dart.fnType(FutureOfString(), [src__client.Client])))();
  let FutureOfUint8List = () => (FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))();
  let ClientToFutureOfUint8List = () => (ClientToFutureOfUint8List = dart.constFn(dart.fnType(FutureOfUint8List(), [src__client.Client])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamControllerOfListOfint = () => (StreamControllerOfListOfint = dart.constFn(async.StreamController$(ListOfint())))();
  let JSArrayOfMultipartFile = () => (JSArrayOfMultipartFile = dart.constFn(_interceptors.JSArray$(src__multipart_file.MultipartFile)))();
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async.Future, [dart.dynamic])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  src__multipart_file_stub.multipartFileFromPath = function(field, filePath, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    return dart.throw(new core.UnsupportedError.new("MultipartFile is only supported where dart:io is available."));
  };
  const _isFinalized = dart.privateName(src__multipart_file, "_isFinalized");
  const _stream = dart.privateName(src__multipart_file, "_stream");
  src__multipart_file.MultipartFile = class MultipartFile extends core.Object {
    get field() {
      return this[field$];
    }
    set field(value) {
      super.field = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get isFinalized() {
      return this[_isFinalized];
    }
    static fromBytes(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let stream = src__byte_stream.ByteStream.fromBytes(value);
      return new src__multipart_file.MultipartFile.new(field, stream, value[$length], {filename: filename, contentType: contentType});
    }
    static fromString(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      contentType = contentType == null ? new src__media_type.MediaType.new("text", "plain") : contentType;
      let encoding = src__utils.encodingForCharset(contentType.parameters[$_get]("charset"), convert.utf8);
      contentType = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", encoding.name])});
      return src__multipart_file.MultipartFile.fromBytes(field, encoding.encode(value), {filename: filename, contentType: contentType});
    }
    static fromPath(field, filePath, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return src__multipart_file_stub.multipartFileFromPath(field, filePath, {filename: filename, contentType: contentType});
    }
    finalize() {
      if (dart.test(this.isFinalized)) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized] = true;
      return this[_stream];
    }
  };
  (src__multipart_file.MultipartFile.new = function(field, stream, length, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    this[_isFinalized] = false;
    this[field$] = field;
    this[length$] = length;
    this[filename$] = filename;
    this[_stream] = src__utils.toByteStream(stream);
    this[contentType$] = contentType != null ? contentType : new src__media_type.MediaType.new("application", "octet-stream");
    ;
  }).prototype = src__multipart_file.MultipartFile.prototype;
  dart.addTypeTests(src__multipart_file.MultipartFile);
  const field$ = Symbol("MultipartFile.field");
  const length$ = Symbol("MultipartFile.length");
  const filename$ = Symbol("MultipartFile.filename");
  const contentType$ = Symbol("MultipartFile.contentType");
  dart.setMethodSignature(src__multipart_file.MultipartFile, () => ({
    __proto__: dart.getMethods(src__multipart_file.MultipartFile.__proto__),
    finalize: dart.fnType(src__byte_stream.ByteStream, [])
  }));
  dart.setGetterSignature(src__multipart_file.MultipartFile, () => ({
    __proto__: dart.getGetters(src__multipart_file.MultipartFile.__proto__),
    isFinalized: core.bool
  }));
  dart.setFieldSignature(src__multipart_file.MultipartFile, () => ({
    __proto__: dart.getFields(src__multipart_file.MultipartFile.__proto__),
    field: dart.finalFieldType(core.String),
    length: dart.finalFieldType(core.int),
    filename: dart.finalFieldType(core.String),
    contentType: dart.finalFieldType(src__media_type.MediaType),
    [_stream]: dart.finalFieldType(src__byte_stream.ByteStream),
    [_isFinalized]: dart.fieldType(core.bool)
  }));
  http.head = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(src__response.Response, dart.fn(client => client.head(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  http.get = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(src__response.Response, dart.fn(client => client.get(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  http.post = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(src__response.Response, dart.fn(client => client.post(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  http.put = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(src__response.Response, dart.fn(client => client.put(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  http.patch = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(src__response.Response, dart.fn(client => client.patch(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  http.delete = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(src__response.Response, dart.fn(client => client.delete(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  http.read = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(core.String, dart.fn(client => client.read(url, {headers: headers}), ClientToFutureOfString()));
  };
  http.readBytes = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(typed_data.Uint8List, dart.fn(client => client.readBytes(url, {headers: headers}), ClientToFutureOfUint8List()));
  };
  http._withClient = function(T, fn) {
    return async.async(T, function* _withClient() {
      let client = src__client.Client.new();
      try {
        return yield fn(client);
      } finally {
        client.close();
      }
    });
  };
  const _controller = dart.privateName(src__streamed_request, "_controller");
  src__streamed_request.StreamedRequest = class StreamedRequest extends src__base_request.BaseRequest {
    get sink() {
      return this[_controller].sink;
    }
    finalize() {
      super.finalize();
      return new src__byte_stream.ByteStream.new(this[_controller].stream);
    }
  };
  (src__streamed_request.StreamedRequest.new = function(method, url) {
    this[_controller] = StreamControllerOfListOfint().new({sync: true});
    src__streamed_request.StreamedRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = src__streamed_request.StreamedRequest.prototype;
  dart.addTypeTests(src__streamed_request.StreamedRequest);
  dart.setGetterSignature(src__streamed_request.StreamedRequest, () => ({
    __proto__: dart.getGetters(src__streamed_request.StreamedRequest.__proto__),
    sink: async.EventSink$(core.List$(core.int))
  }));
  dart.setFieldSignature(src__streamed_request.StreamedRequest, () => ({
    __proto__: dart.getFields(src__streamed_request.StreamedRequest.__proto__),
    [_controller]: dart.finalFieldType(async.StreamController$(core.List$(core.int)))
  }));
  const _files = dart.privateName(src__multipart_request, "_files");
  const _headerForField = dart.privateName(src__multipart_request, "_headerForField");
  const _headerForFile = dart.privateName(src__multipart_request, "_headerForFile");
  const _boundaryString = dart.privateName(src__multipart_request, "_boundaryString");
  const _browserEncode = dart.privateName(src__multipart_request, "_browserEncode");
  src__multipart_request.MultipartRequest = class MultipartRequest extends src__base_request.BaseRequest {
    get fields() {
      return this[fields];
    }
    set fields(value) {
      super.fields = value;
    }
    get files() {
      return this[_files];
    }
    get contentLength() {
      let length = 0;
      this.fields[$forEach](dart.fn((name, value) => {
        length = length + ("--".length + dart.notNull(src__multipart_request.MultipartRequest._BOUNDARY_LENGTH) + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForField](name, value))[$length]) + dart.notNull(convert.utf8.encode(value)[$length]) + "\r\n".length);
      }, StringAndStringToNull()));
      for (let file of this[_files]) {
        length = length + ("--".length + dart.notNull(src__multipart_request.MultipartRequest._BOUNDARY_LENGTH) + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForFile](file))[$length]) + dart.notNull(file.length) + "\r\n".length);
      }
      return length + "--".length + dart.notNull(src__multipart_request.MultipartRequest._BOUNDARY_LENGTH) + "--\r\n".length;
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "multipart requests."));
    }
    finalize() {
      let boundary = this[_boundaryString]();
      this.headers[$_set]("content-type", "multipart/form-data; boundary=" + dart.str(boundary));
      super.finalize();
      let controller = StreamControllerOfListOfint().new({sync: true});
      function writeAscii(string) {
        controller.add(convert.utf8.encode(string));
      }
      dart.fn(writeAscii, StringTovoid());
      function writeUtf8(string) {
        return controller.add(convert.utf8.encode(string));
      }
      dart.fn(writeUtf8, StringTovoid());
      function writeLine() {
        return controller.add(JSArrayOfint().of([13, 10]));
      }
      dart.fn(writeLine, VoidTovoid());
      this.fields[$forEach](dart.fn((name, value) => {
        writeAscii("--" + dart.str(boundary) + "\r\n");
        writeAscii(this[_headerForField](name, value));
        writeUtf8(value);
        writeLine();
      }, StringAndStringToNull()));
      async.Future.forEach(src__multipart_file.MultipartFile, this[_files], dart.fn(file => {
        writeAscii("--" + dart.str(boundary) + "\r\n");
        writeAscii(this[_headerForFile](src__multipart_file.MultipartFile._check(file)));
        return src__utils.writeStreamToSink(async.Stream._check(dart.dsend(file, 'finalize', [])), controller).then(dart.dynamic, dart.fn(_ => writeLine(), dynamicTovoid()));
      }, dynamicToFuture())).then(dart.dynamic, dart.fn(_ => {
        writeAscii("--" + dart.str(boundary) + "--\r\n");
        controller.close();
      }, dynamicToNull()));
      return new src__byte_stream.ByteStream.new(controller.stream);
    }
    [_headerForField](name, value) {
      let header = "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](name)) + "\"";
      if (!dart.test(src__utils.isPlainAscii(value))) {
        header = header + "\r\n" + "content-type: text/plain; charset=utf-8\r\n" + "content-transfer-encoding: binary";
      }
      return header + "\r\n\r\n";
    }
    [_headerForFile](file) {
      let header = "content-type: " + dart.str(file.contentType) + "\r\n" + "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](file.field)) + "\"";
      if (file.filename != null) {
        header = header + "; filename=\"" + dart.str(this[_browserEncode](file.filename)) + "\"";
      }
      return header + "\r\n\r\n";
    }
    [_browserEncode](value) {
      return value[$replaceAll](src__multipart_request._newlineRegExp, "%0D%0A")[$replaceAll]("\"", "%22");
    }
    [_boundaryString]() {
      let prefix = "dart-http-boundary-";
      let list = ListOfint().generate(dart.notNull(src__multipart_request.MultipartRequest._BOUNDARY_LENGTH) - prefix.length, dart.fn(index => src__boundary_characters.BOUNDARY_CHARACTERS[$_get](src__multipart_request.MultipartRequest._random.nextInt(src__boundary_characters.BOUNDARY_CHARACTERS[$length])), intToint()), {growable: false});
      return prefix + dart.str(core.String.fromCharCodes(list));
    }
  };
  (src__multipart_request.MultipartRequest.new = function(method, url) {
    this[fields] = new (IdentityMapOfString$String()).new();
    this[_files] = JSArrayOfMultipartFile().of([]);
    src__multipart_request.MultipartRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = src__multipart_request.MultipartRequest.prototype;
  dart.addTypeTests(src__multipart_request.MultipartRequest);
  const fields = Symbol("MultipartRequest.fields");
  dart.setMethodSignature(src__multipart_request.MultipartRequest, () => ({
    __proto__: dart.getMethods(src__multipart_request.MultipartRequest.__proto__),
    [_headerForField]: dart.fnType(core.String, [core.String, core.String]),
    [_headerForFile]: dart.fnType(core.String, [src__multipart_file.MultipartFile]),
    [_browserEncode]: dart.fnType(core.String, [core.String]),
    [_boundaryString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__multipart_request.MultipartRequest, () => ({
    __proto__: dart.getGetters(src__multipart_request.MultipartRequest.__proto__),
    files: core.List$(src__multipart_file.MultipartFile)
  }));
  dart.setFieldSignature(src__multipart_request.MultipartRequest, () => ({
    __proto__: dart.getFields(src__multipart_request.MultipartRequest.__proto__),
    fields: dart.finalFieldType(core.Map$(core.String, core.String)),
    [_files]: dart.finalFieldType(core.List$(src__multipart_file.MultipartFile))
  }));
  dart.defineLazy(src__multipart_request.MultipartRequest, {
    /*src__multipart_request.MultipartRequest._BOUNDARY_LENGTH*/get _BOUNDARY_LENGTH() {
      return 70;
    },
    /*src__multipart_request.MultipartRequest._random*/get _random() {
      return math.Random.new();
    }
  });
  dart.defineLazy(src__multipart_request, {
    /*src__multipart_request._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n|\\r|\\n");
    }
  });
  dart.defineLazy(src__boundary_characters, {
    /*src__boundary_characters.BOUNDARY_CHARACTERS*/get BOUNDARY_CHARACTERS() {
      return dart.constList([43, 95, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], core.int);
    }
  });
  dart.trackLibraries("packages/http/http", {
    "package:http/src/multipart_file_stub.dart": src__multipart_file_stub,
    "package:http/src/multipart_file.dart": src__multipart_file,
    "package:http/http.dart": http,
    "package:http/src/streamed_request.dart": src__streamed_request,
    "package:http/src/multipart_request.dart": src__multipart_request,
    "package:http/src/boundary_characters.dart": src__boundary_characters
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/http/src/multipart_file_stub.dart","org-dartlang-app:///packages/http/src/multipart_file.dart","org-dartlang-app:///packages/http/http.dart","org-dartlang-app:///packages/http/src/streamed_request.dart","org-dartlang-app:///packages/http/src/multipart_request.dart","org-dartlang-app:///packages/http/src/boundary_characters.dart"],"names":[],"mappings":"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","file":"http.ddc.js"}');
  // Exports:
  return {
    src__multipart_file_stub: src__multipart_file_stub,
    src__multipart_file: src__multipart_file,
    http: http,
    src__streamed_request: src__streamed_request,
    src__multipart_request: src__multipart_request,
    src__boundary_characters: src__boundary_characters
  };
});

//# sourceMappingURL=http.ddc.js.map
