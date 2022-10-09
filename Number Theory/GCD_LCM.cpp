/*
if 2 numbers a and b are there, 
🔥(axb)/GCD = LCM🔥

*/
#include<bits/stdc++.h>
using namespace std; 

int gcd(int a, int b)
{
    //Euclid's Division Lemma🤣
    if(b==0) return a;
    return gcd(b,a%b); //gcd(18,6) Yes, i know you're wondering why aren't we doing something ot keep large no first, 
    //it adjusts itself so dont worry, 12%18 is 0 hence a=12 , b =18 now perfectly arranged!
}

int main()
{
    cout<<"HCF is "<<gcd(12,18)<<endl;
    cout<<"To find LCM we have our formula (a*b)/GCD = LCM ie "<<(12*18)/gcd(12,18)<<endl;

    //Now For our shortcut🤣, there's already an inbuilt function named __gcd(n1,n2)
    cout<<"Using inbuilt function "<<__gcd(10,__gcd(5,15));
    //multiple nikalna ho to nesting karo => __gcd(10,__gcd(5,15))

    //This gcd can also be used to find the simplest fraction eg 12/18 => (12/__gcd(12,18))/(18/__gcd(12,18))
}

