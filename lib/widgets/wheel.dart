import 'package:flutter/material.dart';
import 'package:flutter/animation.dart';
import 'package:horoscope/widgets/asyncHoroscope.dart';
import 'dart:math' as math;

class Wheel extends StatefulWidget {
  Wheel({Key key}) : super(key: key);

  @override
  _WheelState createState() => _WheelState();
}

class _WheelState extends State<Wheel> with SingleTickerProviderStateMixin {
  int _counter = 0;
  int _pressed = 0;
  bool _isbuttonDisabled = false;
  String sign;
  final _offset = 15;
  final _angle = 30;
  final _signs = [
    "capricorn",
    "aquarius",
    "pisces",
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius"
  ];
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
          _counter = AnimationStatus.forward == status ? _counter : _pressed;
        });
      });
  }

  // @override
  void wheelNum(int signNum) {
    print("You have chosen ${_signs[signNum]}");
    sign = _signs[signNum];
    controller.forward(from: 0.0);
    this.setState(() {
      this._pressed = signNum;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: <Widget>[
        Positioned(
          top: 15.0,
          height: 260.0,
          left: 30.0,
          width: 260.0,
          child: Transform.rotate(
            //degrees to radians offSet = 13, sign = (0 to 11) *30
            angle: (_offset + _counter * _angle) *
                math.pi /
                180, // 13 offset is capricorn
            child: Stack(
              fit: StackFit.passthrough,
              children: <Widget>[
                FloatingActionButton(
                  onPressed: _isbuttonDisabled
                      ? null
                      : null, //() => controller.forward(from: 0.0),
                  child: Image.asset(
                    "images/zodiacwheel.png",
                    fit: BoxFit.contain,
                  ),
                ),
                Positioned(
                  // capricorn
                  top: 0.0,
                  left: 83.0,
                  child: Opacity(
                    opacity: 0.0,
                    child: FloatingActionButton(
                      onPressed: _isbuttonDisabled ? null : () => wheelNum(0),
                      child: Icon(
                        Icons.star,
                        size: 60.0,
                      ),
                    ),
                  ),
                ),
                Positioned(
                  // aquarius
                  top: 28.0,
                  left: 38.0,
                  child: Opacity(
                    opacity: 0.0,
                    child: FloatingActionButton(
                        onPressed: _isbuttonDisabled ? null : () => wheelNum(1),
                        child: Icon(Icons.star, size: 60.0)),
                  ),
                ),
                Positioned(
                  // pisces
                  top: 76.0,
                  left: 12.0,
                  child: Opacity(
                    opacity: 0.0,
                    child: FloatingActionButton(
                        onPressed: _isbuttonDisabled ? null : () => wheelNum(2),
                        child: Icon(Icons.star, size: 60.0)),
                  ),
                ),
                Positioned(
                  // aries
                  top: 126.0,
                  left: 14.0,
                  child: Opacity(
                    opacity: 0.0,
                    child: FloatingActionButton(
                        onPressed: _isbuttonDisabled ? null : () => wheelNum(3),
                        child: Icon(Icons.star, size: 60.0)),
                  ),
                ),
                Positioned(
                  // taurus
                  top: 169.0,
                  left: 38.0,
                  child: Opacity(
                    opacity: 0.0,
                    child: FloatingActionButton(
                        onPressed: _isbuttonDisabled ? null : () => wheelNum(4),
                        child: Icon(Icons.star, size: 60.0)),
                  ),
                ),
                Positioned(
                  // gemini
                  top: 198.0,
                  left: 85.0,
                  child: Opacity(
                    opacity: 0.0,
                    child: FloatingActionButton(
                        onPressed: _isbuttonDisabled ? null : () => wheelNum(5),
                        child: Icon(Icons.star, size: 60.0)),
                  ),
                ),
                Positioned(
                  // cancer
                  top: 198.0,
                  left: 138.0,
                  child: Opacity(
                    opacity: 0.0,
                    child: FloatingActionButton(
                        onPressed: _isbuttonDisabled ? null : () => wheelNum(6),
                        child: Icon(Icons.star, size: 60.0)),
                  ),
                ),
                Positioned(
                  // leo
                  top: 168.0,
                  left: 185.0,
                  child: Opacity(
                    opacity: 0.0,
                    child: FloatingActionButton(
                        onPressed: _isbuttonDisabled ? null : () => wheelNum(7),
                        child: Icon(Icons.star, size: 60.0)),
                  ),
                ),
                Positioned(
                  // virgo
                  top: 124.0,
                  left: 212.0,
                  child: Opacity(
                    opacity: 0.0,
                    child: FloatingActionButton(
                        onPressed: _isbuttonDisabled ? null : () => wheelNum(8),
                        child: Icon(Icons.star, size: 60.0)),
                  ),
                ),
                Positioned(
                  // libra
                  top: 71.0,
                  left: 205.0,
                  child: Opacity(
                    opacity: 0.0,
                    child: FloatingActionButton(
                        onPressed: _isbuttonDisabled ? null : () => wheelNum(9),
                        child: Icon(Icons.star, size: 60.0)),
                  ),
                ),
                Positioned(
                  // scorpio
                  top: 25.0,
                  left: 183.0,
                  child: Opacity(
                    opacity: 0.0,
                    child: FloatingActionButton(
                        onPressed:
                            _isbuttonDisabled ? null : () => wheelNum(10),
                        child: Icon(Icons.star, size: 60.0)),
                  ),
                ),
                Positioned(
                  // sagittarius
                  top: 0.0,
                  left: 136.0,
                  child: Opacity(
                    opacity: 0.0,
                    child: FloatingActionButton(
                        onPressed:
                            _isbuttonDisabled ? null : () => wheelNum(11),
                        child: Icon(Icons.star, size: 60.0)),
                  ),
                ),
              ],
            ),
          ),
        ),
        Positioned(
          top: 275.0,
          left: 15.0,
          child: Container(
              height: 200.0,
              width: 300.0,
              child: AsyncHoroscope(
                zodiac: fetchPost(sign),
              )),
        )
      ],
    ); // This trailing comma makes auto-formatting nicer for build methods.
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }
}
