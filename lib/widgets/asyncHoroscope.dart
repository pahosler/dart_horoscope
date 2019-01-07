import 'package:flutter/material.dart';
import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart' as http;

// http://astrology.kudosmedia.net/index.php/m/virgo?day=today
Future<Astro> fetchPost({this.zodiac: 'capricorn'}) async {
  final String zodiac = this.zodiac;
  final response = await http.get('https://cyber-side.glitch.me/api/$zodiac');

  if (response.statusCode == 200) {
    // If the call to the server was successful, parse the JSON
    return Astro.fromJson(json.decode(response.body));
  } else {
    // If that call was not successful, throw an error.
    throw Exception('Failed to load post');
  }
}

class Astro {
  final String sign;
  // final String name;
  // final String start;
  // final String end;
  final String description;
  final String date;
  final String mood;
  final String color;
  final String timeOfDay;
  final String number;
  final String compatibleSign;
  // final String compatName;
  // final String compatStart;
  // final String compatEnd;

  Astro(
      {this.sign,
      this.description,
      this.date,
      this.mood,
      this.color,
      this.timeOfDay,
      this.number,
      this.compatibleSign});

  factory Astro.fromJson(Map<String, dynamic> json) {
    return Astro(
        sign: json['name'],
        description: json['description'],
        date: json['date'],
        compatibleSign: json['name'],
        mood: json['mood'],
        color: json['color'],
        timeOfDay: json['timeOfDay'],
        number: json['number']);
  }
}

void main() => runApp(AsyncHoroscope(astro: fetchPost()));

class AsyncHoroscope extends StatelessWidget {
  final Future<Astro> astro;
  AsyncHoroscope({Key key, this.astro}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Container(
          padding: EdgeInsets.all(20),
          height: 100.0,
          width: 350.00,
          child: FutureBuilder<Astro>(
            future: astro,
            builder: (context, snapShot) {
              if (snapShot.hasData) {
                return Text(snapShot.data.sign);
              } else if (snapShot.hasError) {
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
