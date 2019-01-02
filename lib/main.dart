import 'package:flutter/material.dart';
import 'package:flutter/animation.dart';
import 'dart:math' as math;

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primaryColor: Colors.pink[100],
        backgroundColor: Colors.pink[200],
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>
    with SingleTickerProviderStateMixin {
  int _counter = 0;
  Animation<double> animation;
  AnimationController controller;

  @override
  void initState() {
    super.initState();
    controller =
        new AnimationController(duration: Duration(seconds: 2), vsync: this)
          ..addListener(() {
            this.setState(() {
              _counter = (_counter + 1) % 12;
            });
          });
    /* ..addStatusListener((status) {
      //   if (status == AnimationStatus.completed) {
      //     _controller.reset();
      //   } else if (status == AnimationStatus.dismissed) {
      //     _controller.forward();
      //   }
      // });
      // _controller.forward();
      //   if(_controller.status == )
      */
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Stack(
        children: <Widget>[
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Transform.rotate(
                //degress to radians offSet = 18, sign = (0 to 11) *30
                angle: -(18 + _counter * 30) *
                    math.pi /
                    180, // 18 offset is capricorn
                child: Container(
                  height: 250.0,
                  width: 250.0,
                  child: FloatingActionButton(
                    onPressed: () => controller.forward(from: 0.0),
                    child: Image.asset("images/zodiacwheel.png"),
                  ),
                ),
              ),
            ],
          ),
        ],
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }
}
