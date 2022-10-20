import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:login/screens/login.dart';

 Future <void> main() async {

   WidgetsFlutterBinding.ensureInitialized();
   await Firebase.initializeApp();

  runApp(MyApp(
  ));

}

class MyApp extends StatelessWidget {

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Email And  Password Login',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      debugShowCheckedModeBanner: false,
      home:  LoginScreen(),
    );
  }
}

