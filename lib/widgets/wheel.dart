import 'package:flutter/material.dart';
import 'package:flutter/animation.dart';
import 'dart:math' as math;

class Wheel extends StatefulWidget {
  Wheel({Key key}) : super(key: key);

  @override
  _WheelState createState() => _WheelState();
}

class _WheelState extends State<Wheel> with SingleTickerProviderStateMixin {
  int _counter = 0;
  bool _isbuttonDisabled = false;
  final _offset = 13;
  final _angle = 30;
  Animation<double> animation;
  AnimationController controller;

  @override
  void initState() {
    super.initState();
    controller = new AnimationController(
        duration: Duration(milliseconds: 700), vsync: this)
      ..addListener(() {
        this.setState(() {
          _counter = (_counter + 1) % 12;
        });
      })
      ..addStatusListener((status) {
        this.setState(() {
          _isbuttonDisabled = status == AnimationStatus.forward;
        });
      });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: <Widget>[
        Transform.rotate(
          //degress to radians offSet = 13, sign = (0 to 11) *30
          angle: -(_offset + _counter * _angle) *
              math.pi /
              180, // 13 offset is capricorn
          child: FloatingActionButton(
            onPressed:
                _isbuttonDisabled ? null : () => controller.forward(from: 0.0),
            child: Image.asset("images/zodiacwheel.png"),
          ),
        ),
      ],
    ); // This trailing comma makes auto-formatting nicer for build methods.
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }
}
