import 'package:flutter_web/widgets/responsive.dart';
import 'package:flutter/material.dart';

class MainHeading                                                                                                extends StatelessWidget {
  const MainHeading({
    Key? key,
    required this.screenSize,
  }) : super(key: key);

  final Size screenSize;

  @override
  Widget build(BuildContext context) {
    return Container(
            padding: EdgeInsets.only(
              top: screenSize.height / 10,
              bottom: screenSize.height / 15,
            ),
            width: screenSize.width,
            child: Text(
              'locations',
              textAlign: TextAlign.center,
              style: TextStyle(
                color:Color(0xFF156eac),
                fontSize: 40,
                fontFamily: 'Syncopate',
                fontWeight: FontWeight.bold,
              ),
            ),
          );
  }
}
