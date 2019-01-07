import 'package:flutter/material.dart';
import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart' as http;

Future<Zodiac> fetchPost() async {
  final response = await http.get('https://cyber-side.glitch.me/api/capricorn');
  // print('hello world!!!');
  if (response.statusCode == 200) {
    // If the call to the server was successful, parse the JSON
    // print('${response.body}');
    return Zodiac.fromJson(json.decode(response.body));
  } else {
    // If that call was not successful, throw an error.
    throw Exception('Failed to load post');
  }
}

// Zodiac zodiacFromJson(String str) {
//   final jsonData = json.decode(str);
//   return Zodiac.fromJson(jsonData);
// }

// String zodiacToJson(Zodiac data) {
//   final dyn = data.toJson();
//   return json.encode(dyn);
// }

class Zodiac {
  ZodiacClass zodiac;

  Zodiac({
    this.zodiac,
  });

  factory Zodiac.fromJson(Map<String, dynamic> json) => new Zodiac(
        zodiac: ZodiacClass.fromJson(json["zodiac"]),
      );

  Map<String, dynamic> toJson() => {
        "zodiac": zodiac.toJson(),
      };
}

class ZodiacClass {
  Sign sign;
  Sign compatibleSign;
  String description;
  String date;
  String mood;
  String color;
  String timeOfDay;
  String number;

  ZodiacClass({
    this.sign,
    this.compatibleSign,
    this.description,
    this.date,
    this.mood,
    this.color,
    this.timeOfDay,
    this.number,
  });

  factory ZodiacClass.fromJson(Map<String, dynamic> json) => new ZodiacClass(
        sign: Sign.fromJson(json["sign"]),
        compatibleSign: Sign.fromJson(json["compatibleSign"]),
        description: json["description"],
        date: json["date"],
        mood: json["mood"],
        color: json["color"],
        timeOfDay: json["timeOfDay"],
        number: json["number"],
      );

  Map<String, dynamic> toJson() => {
        "sign": sign.toJson(),
        "compatibleSign": compatibleSign.toJson(),
        "description": description,
        "date": date,
        "mood": mood,
        "color": color,
        "timeOfDay": timeOfDay,
        "number": number,
      };
}

class Sign {
  String name;
  String start;
  String end;

  Sign({
    this.name,
    this.start,
    this.end,
  });

  factory Sign.fromJson(Map<String, dynamic> json) => new Sign(
        name: json["name"],
        start: json["start"],
        end: json["end"],
      );

  Map<String, dynamic> toJson() => {
        "name": name,
        "start": start,
        "end": end,
      };
}

void main() => runApp(AsyncHoroscope(zodiac: fetchPost()));

class AsyncHoroscope extends StatelessWidget {
  final Future<Zodiac> zodiac;
  AsyncHoroscope({Key key, this.zodiac}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // print('zodiac... ${this.zodiac}');
    return Column(
      children: <Widget>[
        Container(
          padding: EdgeInsets.all(20),
          height: 100.0,
          width: 350.00,
          child: FutureBuilder<Zodiac>(
            future: zodiac,
            builder: (context, snapShot) {
              // print('mr Zodiac ${snapShot.data.sign}');
              if (snapShot.hasData) {
                print(
                    'hello are you there??? ${snapShot.data.zodiac.sign.name}');
                return Text("${snapShot.data.zodiac.description}");
              } else if (snapShot.hasError) {
                // print('something happened!');
                return Text("${snapShot.error}");
              }
              return CircularProgressIndicator();
            },
          ),
        ),
      ],
    );
  }
}
