import 'package:flutter_web/material.dart';
import 'package:flutter_web/animation.dart';
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
    sign = _signs[signNum];
    controller.forward(from: 0.0);
    this.setState(() {
      this._pressed = signNum;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Flex(
      direction: Axis.vertical,
      mainAxisAlignment: MainAxisAlignment.end,
      mainAxisSize: MainAxisSize.max,
      children: <Widget>[
        Flexible(
          flex: 3,
          child: Container(
            width: double.infinity,
            child: Stack(
              fit: StackFit.expand,
              children: <Widget>[
                Positioned(
                  top: 10.0,
                  height: 300.0,
                  left: (MediaQuery.of(context).size.width - 300) -
                      (MediaQuery.of(context).size.width - 300)/ 2,
                  width: 300,//MediaQuery.of(context).size.width / 1.5,
                  child: Transform.rotate(
                    //degrees to radians offSet = 13, sign = (0 to 11) *30
                    angle: (_offset + _counter * _angle) *
                        math.pi /
                        180, // 13 offset is capricorn
                    child: Stack(
                      fit: StackFit.passthrough,
                      children: <Widget>[
                        Image.asset(
                          "images/zodiacwheel.png",
                          fit: BoxFit.scaleDown,
                        ),
                        Positioned(
                          // capricorn
                          top: 8.0,
                          left: 92.0,
                          child: Opacity(
                            opacity: 0.0,
                            child: FloatingActionButton(
                              onPressed:
                                  _isbuttonDisabled ? null : () => wheelNum(0),
                              child: Icon(
                                Icons.star,
                                size: 80.0,
                              ),
                            ),
                          ),
                        ),
                        Positioned(
                          // aquarius
                          top: 38.0,
                          left: 38.0,
                          child: Opacity(
                            opacity: 0.0,
                            child: FloatingActionButton(
                                onPressed: _isbuttonDisabled
                                    ? null
                                    : () => wheelNum(1),
                                child: Icon(Icons.star, size: 80.0)),
                          ),
                        ),
                        Positioned(
                          // pisces
                          top: 92.0,
                          left: 9.0,
                          child: Opacity(
                            opacity: 0.0,
                            child: FloatingActionButton(
                                onPressed: _isbuttonDisabled
                                    ? null
                                    : () => wheelNum(2),
                                child: Icon(Icons.star, size: 80.0)),
                          ),
                        ),
                        Positioned(
                          // aries
                          bottom: 92.0,
                          left: 9.0,
                          child: Opacity(
                            opacity: 0.0,
                            child: FloatingActionButton(
                                onPressed: _isbuttonDisabled
                                    ? null
                                    : () => wheelNum(3),
                                child: Icon(Icons.star, size: 80.0)),
                          ),
                        ),
                        Positioned(
                          // taurus
                          bottom: 40.0,
                          left: 39.0,
                          child: Opacity(
                            opacity: 0.0,
                            child: FloatingActionButton(
                                onPressed: _isbuttonDisabled
                                    ? null
                                    : () => wheelNum(4),
                                child: Icon(Icons.star, size: 80.0)),
                          ),
                        ),
                        Positioned(
                          // gemini
                          bottom: 10.0,
                          left: 92.0,
                          child: Opacity(
                            opacity: 0.0,
                            child: FloatingActionButton(
                                onPressed: _isbuttonDisabled
                                    ? null
                                    : () => wheelNum(5),
                                child: Icon(Icons.star, size: 80.0)),
                          ),
                        ),
                        Positioned(
                          // cancer
                          top: 232.0,
                          left: 152.0,
                          child: Opacity(
                            opacity: 0.0,
                            child: FloatingActionButton(
                                onPressed: _isbuttonDisabled
                                    ? null
                                    : () => wheelNum(6),
                                child: Icon(Icons.star, size: 80.0)),
                          ),
                        ),
                        Positioned(
                          // leo
                          top: 203.0,
                          left: 204.0,
                          child: Opacity(
                            opacity: 0.0,
                            child: FloatingActionButton(
                                onPressed: _isbuttonDisabled
                                    ? null
                                    : () => wheelNum(7),
                                child: Icon(Icons.star, size: 80.0)),
                          ),
                        ),
                        Positioned(
                          // virgo
                          bottom: 93.0,
                          right: 9.0,
                          child: Opacity(
                            opacity: 0.0,
                            child: FloatingActionButton(
                                onPressed: _isbuttonDisabled
                                    ? null
                                    : () => wheelNum(8),
                                child: Icon(Icons.star, size: 80.0)),
                          ),
                        ),
                        Positioned(
                          // libra
                          top: 92.0,
                          right:10.0,
                          child: Opacity(
                            opacity: 0.0,
                            child: FloatingActionButton(
                                onPressed: _isbuttonDisabled
                                    ? null
                                    : () => wheelNum(9),
                                child: Icon(Icons.star, size: 80.0)),
                          ),
                        ),
                        Positioned(
                          // scorpio
                          top: 39.0,
                          right: 39.0,
                          child: Opacity(
                            opacity: 0.0,
                            child: FloatingActionButton(
                                onPressed: _isbuttonDisabled
                                    ? null
                                    : () => wheelNum(10),
                                child: Icon(Icons.star, size: 80.0)),
                          ),
                        ),
                        Positioned(
                          // sagittarius
                          top: 8.0,
                          right: 92.0,
                          child: Opacity(
                            opacity: 0.0,
                            child: FloatingActionButton(
                                onPressed: _isbuttonDisabled
                                    ? null
                                    : () => wheelNum(11),
                                child: Icon(Icons.star, size: 80.0)),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
        Flexible(
          flex: 2,
          child: Container(
            height: 200.0,
            width: 300,//double.infinity,
            child: AsyncHoroscope(
              zodiac: fetchPost(sign),
            ),
          ),
        )
      ],
    );
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }
}
