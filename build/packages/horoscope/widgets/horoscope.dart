import 'package:flutter_web/material.dart';
import 'package:horoscope/widgets/wheel.dart';
import 'package:horoscope/widgets/asyncHoroscope.dart';
import 'dart:async';

class HomePage extends StatefulWidget {
  final Future<Zodiac> zodiac;
  HomePage({Key key, this.zodiac, this.title}) : super(key: key);
  //HomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(widget.title),
      ),
      body: Wheel(),
    );
  }
}
