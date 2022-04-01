import 'package:flutter_web/widgets/responsive.dart';
import 'package:flutter/material.dart';

class FeaturedHeading extends StatelessWidget {
  const FeaturedHeading({
    Key? key,
    required this.screenSize,
  }) : super(key: key);

  final Size screenSize;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        top: screenSize.height * 0.06,
        left: screenSize.width / 15,
        right: screenSize.width / 15,
      ),
      child: screenSize.width<800?

      Row(
        children:[
        Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'solutions',
              style: TextStyle(
                  fontSize: 36,
                  fontFamily: 'Syncopate',
                  fontWeight: FontWeight.bold,
                  color:Color(0xFF156eac)
              ),
            ),
            SizedBox(height: 5,),
            /*Text(
              'Clue of the wooden cottage',
              textAlign: TextAlign.end,
            ),*/
          ],

        ),
      ]
      )
      :Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
              Text(
              'solutions',
              style: TextStyle(
                  fontSize: 36,
                  fontFamily: 'Syncopate',
                  fontWeight: FontWeight.bold,
                  color:Color(0xFF156eac)
              ),
            ),
              /* Expanded(
                  child: Text(
                    'Clue of the wooden cottage',
                    textAlign: TextAlign.end,
                  ),
                ),*/
              ],
            ),
    );
  }
}
