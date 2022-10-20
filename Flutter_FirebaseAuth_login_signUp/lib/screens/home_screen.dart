import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:login/model/user_model.dart';
import 'package:login/screens/login.dart';
class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {

  // for fetch data 14 th line and 15 th line very important
  User? user = FirebaseAuth.instance.currentUser;
  UserModel loggedInUser = UserModel();

  @override
  void initState() {
    super.initState();
   FirebaseFirestore.instance
   .collection("users")
   .doc(user!.uid)
    .get()
    .then((value){
      this.loggedInUser = UserModel.formMap(value.data());
      setState(() {

      });
   });

  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Welcome") ,
        centerTitle: true,
      ),
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget> [
              SizedBox(
                height: 150,
                child: Image.asset("images/logo.png",fit: BoxFit.contain),
              ),
              Text(
                "Welcome Back",
                style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: 10,
              ),
              Text(
                "${loggedInUser.firstName}${loggedInUser.secondName}",
                style: TextStyle(fontSize: 20,
                    color: Colors.black54,
                    fontWeight: FontWeight.w500
                )),
              Text(
                  "${loggedInUser.email}",
                  style: TextStyle(fontSize: 20,
                      color: Colors.black54,
                      fontWeight: FontWeight.w500
                  )),
              SizedBox(height: 15,
              ),
              ActionChip(label:Text("Logout"), onPressed: (){
                logout(context);
              }),
            ],
          ),

        ),
      ),
    );
  }

  Future<void> logout(BuildContext context)async
  {
    await FirebaseAuth.instance.signOut();
    Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (context)=> LoginScreen()));
  }



}
