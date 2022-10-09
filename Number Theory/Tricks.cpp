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
//Observe a pattern here.
for (int i = 0; i < 8; i++)
{
    printBinary(i);
    if((i&1)==0)    //If you look closely, the last bit of even numbers are always 0, hence to check it the number is even or not 
    cout<<i<<" EVEN"<<endl; //simply take it's & with 1
    else
    cout<<i<<" Hmph Thats Odd"<<endl;
}
//If you look closely, the last bit of even numbers are always 0, hence to check it the number is even or not simply 
//take it's & with 1

//🔥Cool way to multiply divide using bit manipulation
int num = 6;
cout<<"Diving by bits "<<(num>>1)<<endl;    //Right shift divides makes sense as it reduces a bit
cout<<"Multiply with bits "<<(num<<1)<<endl;    //Left shift multiplies!

//🔥🔥Cool way of binary search mid = hi+lo/2 isse accha write mid = (hi+lo)>>1;

//Case conversion with BITS,
// a => 00001100001 , A => 00001000001 => the only diff is small letter ki 5th bit set hoti and caps me nahi set hoti
//To convert the lower caser to upper simply unset the 5th bit.
cout<<"A to "; //Capital to lower Set a bit ie OR
char set = 'A' | (1<<5);
cout<<(set)<<endl;

//Lower to caps, ie unset a bit using XAND
cout<<"a to ";
char ch = ('a'&(~(1<<5)));
cout<<ch<<endl;

/*
🔥🔥🔥NOW LETS GET DOWN TO SERIOUS BUSINESS.
there's an even cooler and a more pristine way to do that thing.
1<<5 is nothing but space ie ' ', so insted of writing all the mumbo jumbo stuff
simply understand, UpperCase | ' ' => lower case, and similarly
~(1<<5) is nothing but '_', That's an underscore, not 😐🤣
So now the pristine code is
*/

char sm = 'a';
char cap = 'A';
cout<<"Converting Small case a to upper case in cooler way =>"<<char('a'|' ')<<endl;
cout<<"Converting capital case to smaller case in cooler way =>"<<char('a'&'_')<<endl;


/*
Clearing Bits till given posn, in one go! GET EXCITED!!
lets take an example shall we, 59 => 00000111011, clear till 5th bit
ie trying to get this 0000100000, now to do that we need to do the AND
with 11111100000, but this is a very large no. our work can simply be done
by doing AND with 00000011111, now how will you get this, simple.
🔑Any 2^n number - 1 gives us n-1 1's 🤣, eg 16 is 10000 - 1=> 01111 ie 15
so 2^4 gave us 1's till n-1 bit, so , in our orignal quest,
we need ones till 4th BIT (0 se start), so we need to do 2^5-1,⚠️and take its inversion
*/
printBinary(59);
int pos = 5;
int clear = (59 & ~((1<<pos)-1));
printBinary(clear);

/*
Similary agar sari MSB's clear karni ho till ith bit,
eg 111011, ki 3rd pos tak sari MSB clear karna ho to => 001011,
to we need to & with 001111, ie 3rd place tak ones => 2^4-1🔥
🔥GET EXCITED!🔥
*/

int clearmsb = (59&((1<<4)-1));
cout<<"Clearing MSB's Of ";
printBinary(59);
cout<<"We get ";
printBinary(clearmsb);


//🔥Shortcut to find if a number n is in form of  2^n ie take it's AND with n-1
//If its 0 number is in 2^n form else its not;
int no;
cin>>no;
if(!(no&(no-1)))
cout<<"2^n form!"<<endl;
else
cout<<"NAJA NAJA NAJA MITRA TU DOOR"<<endl;
}