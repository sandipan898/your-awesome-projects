#include<bits/stdc++.h>
using namespace std; 

int main(){
/*
GET EXCITED!
We'll learn today about some awesome powers of XOR gate!
Before that lets see some properties of XOR.
🔹 a ^ a = 0 => XOR of same things are 0
🔸 a ^ 0 = a => XOR of anything with 0 is the number itself.
*/

//Now for some cool stuff, lets swap two nos with XOR
int a = 5 , b = 6;
a = a^b;
b = b^a; // Here b => b ^ ( a ^ b ) => b ^ b ^ a {YES you can change the order in XOR} , => 0 ^ a => a 
a = a^b; // Here a = (a ^ b) ^ b, this damn b is transformed to a  => a ^ a ^ b => b
cout<<a<<" "<<b<<endl;
//Ho gaya 🤣

/*
Another popular question on XOR gate is, given an array where all except one element is present even times
find the element in the complexity level of O(1), ⚠️Can't use hash array coz its complexity is O(N)
*/
int n;
cin>>n;
int arr[n];
int ans = 0;
for (int i = 0; i < n; i++)
{
    cin>>arr[i];
    ans ^= arr[i];
}
cout<<"The unique element is "<<ans<<endl; //🔥GET EXCITED!🔥
}