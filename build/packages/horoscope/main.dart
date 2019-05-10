import 'package:flutter_web/material.dart';
// import 'package:horoscope/widgets/wheel.dart';
// import 'package:horoscope/widgets/asyncHoroscope.dart';
// import 'dart:async';
import 'package:horoscope/widgets/horoscope.dart';

void main() => runApp(Horoscope());

class Horoscope extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Horoscope',
      theme: ThemeData(
          primaryColor: Colors.pink[100],
          backgroundColor: Colors.pink[200],
          scaffoldBackgroundColor: Colors.pink[50]),
      home: HomePage(title: 'Daily Horoscope'),
    );
  }
}