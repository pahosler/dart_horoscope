import 'package:flutter/material.dart';
import 'package:horoscope/widgets/wheel.dart';

// import 'dart:math' as math;

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

class HomePage extends StatefulWidget {
  HomePage({Key key, this.title}) : super(key: key);

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
      body: Column(
        children: <Widget>[
          Container(
            padding: EdgeInsets.all(20.0),
            height: 300.0,
            child: Wheel(),
          ),
        ],
      ),
    );
  }
}
