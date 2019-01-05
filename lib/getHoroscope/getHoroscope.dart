import 'dart:io';
import 'dart:convert';

void main() async {
  String horoscope;
  horoscope = null;
  RegExp exp = RegExp(
    r"horoscope\s=?\s(.*)?;",
    caseSensitive: false,
    multiLine: false,
  );
  // produces a request object
  var request = await HttpClient().getUrl(
      Uri.parse('http://astrology.kudosmedia.net/index.php/m/virgo?day=today'));
  // sends the request
  var response = await request.close();

  // transforms and prints the response
  await for (var contents in response.transform(Utf8Decoder())) {
    var scope = exp.firstMatch(contents);
    horoscope = scope[1];
    if (scope[1] != null) {
      break;
    }
  }
  print(horoscope);
}
