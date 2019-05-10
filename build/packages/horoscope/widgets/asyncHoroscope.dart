import 'package:flutter_web/material.dart';
import 'dart:async';
import 'dart:convert';
import 'package:intl/intl.dart';
import 'package:http/http.dart' as http;

Future<Zodiac> fetchPost(sign) async {
  final response = await http.get('https://cyber-side.glitch.me/api/$sign');
  if (response.statusCode == 200) {
    // If the call to the server was successful, parse the JSON
    return Zodiac.fromJson(json.decode(response.body));
  } else {
    // If that call was not successful, throw an error.
    throw Exception('Failed to load post');
  }
}

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

class AsyncHoroscope extends StatelessWidget {
  final Future<Zodiac> zodiac;
  AsyncHoroscope({Key key, this.zodiac}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(10),
      height: 200,
      width: double.infinity,
      child: FutureBuilder<Zodiac>(
        future: zodiac,
        builder: (context, snapShot) {
          if (snapShot.hasData) {
            return Container(
              width: double.infinity,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Center(
                    child: Text(
                      "${DateFormat.yMMMd().format(DateTime.now())}",
                      style: TextStyle(fontSize: 18.0),
                    ),
                  ),
                  Center(
                    child: Text(
                      "${snapShot.data.zodiac.sign.name} ${snapShot.data.zodiac.sign.start} thru ${snapShot.data.zodiac.sign.end}",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 18.0,
                      ),
                    ),
                  ),
                  Text(
                    "${snapShot.data.zodiac.description}",
                    style: TextStyle(fontSize: 18.0),
                  ),
                ],
              ),
            );
          } else if (snapShot.hasError) {
            print(snapShot.error);
            return Text(
              "Select a Sign",
              textAlign: TextAlign.center,
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
            );
          } else {
            return Container(
              padding: EdgeInsets.all(20.0),
              height: 20.0,
              width: 20.0,
              child: Center(
                child: CircularProgressIndicator(
                  strokeWidth: 1.0,
                ),
              ),
            );
          }
        },
      ),
    );
  }
}
