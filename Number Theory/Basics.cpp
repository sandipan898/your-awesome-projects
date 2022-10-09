/*
⚠️Odd number ke end me hamesha 1 hota hai
🔸XOR(^) => Do same chizo ka XOR one hota hai
🔹Left & Right Shift Operator:-
3<<1 => 3 left shift one ie 3 in binary is 11 ==> Shift it one space to left it becomes 110. Similarly 3<<2 is 1100
3>>1 => 3 right shift one ⚠️Remember right shift me 11 me 1 bachega , 🔑Remember it like this, right side me ek wall hai
hence you can't go beyond it as it will consume you but left side me kitna bhi chale jao koi dikkat nahi hai

🔹In C++, we have 32 bits int, ie we can store at most 2e32-1.
🔥Insted of using squre function on 2 we can also use left shift, 1<<n=2^n
eg, 1<<1 = 10 => 2
    1<<2 = 100 => 4
    1<<3 = 1000 => 8 and so on
    Hence INT_MAX = 1<<32 - 1 //Thi will give an error coz before subtracting and making it 32 bits, 1<<32 is actually a
    33 Bit, hence not storeable in int.
    a signed integer stores 1<<31-1 (One bit is reserved for - or +), but an unsigned integer stores 1<<32-1 
*/

#include<bits/stdc++.h>
using namespace std; 

void printBinary(int num)
{
    for (int i = 10; i >= 0; --i)
    {
        cout<<((num>>i)&1);
    }
    cout<<endl;
}

int main(){
/*
 Let a number be 10111011 , the least significant bit is 1 on Right hence Left wali bit is Most sign bit.
 If a bit is set means there is 1 at that pos, eg there are 6 set bits in our eg no
 To find if ith position of a number is set or not, we take its and with a number that has its bit set at that posn,
 if we get 0 then it was unset
 eg check 1st bit is set or not, so we'll take its and with 010 & 101 => 000, hence unset
*/

printBinary(5);
//Check if bit is set or not
int num = 5;
int checkBit = 0;
if((num & (1<<checkBit)) != 0) //2^n me khali n set hota hai baki unset
cout<<"Set Bit"<<endl;
else
cout<<"Nope"<<endl;

//To set a bit in a place
int setBit = (num | (1<<1));
printBinary(setBit);

//Unsetting a bit eg say 0001001 make the 4th bit unset to do that what we do is take its and with a number that has all
//Bits set except for the postion we need to unset ie 1110111, and perform an & operation
cout<<"Unsetting 3rd bit in ";
printBinary(9);
int pos = 3;
int unSet = ~(1<<pos); //tilda inverts everythin 1 ko 0 , 0 ko 1, 1<<pos placed 1 at the given posn, so now we have the
//No jiske saath & lena ho.
cout<<"We have ";
printBinary(9&unSet);


//🔑Shortcut to do the above operation, we take XOR(^)
cout<<"Using XOR to toggle back ";
printBinary((9&unSet)^(1<<3));

//Counting No of set bits
int bitscount=0, number= 9;
for (int i = 31; i >=0; --i)
{
    if((number&(1<<i))!=0)
    bitscount++;
}
cout<<"No of set bits in "<<number<<" are "<<bitscount<<endl;

//🔥Shortcut for counting setBits __builtin_popcount(n) for integers and for long long values use __builtin_popcountll();
cout<<"Using shortcut "<< __builtin_popcount(9);
}