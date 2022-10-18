// Bit manipulation
#include<iostream>
using namespace std;

int getBit(int n , int pos)    //AND GATE 
{
    /* 5 in binary is 0101, now consider that to be  a string, 2nd position me hai "1", now ab check karne ke liye what we do is take a number, jisme given position (pos) par "1" ho, eg 5 is 0101, and second posn chahiye, so the number well take will have 1 as bit in the pos, ie 0100, 

    Ab what operation can we do to return only the bit at the given posn?
    we'll use the logic gates wala logic here,

    dimag lagao, 0101 & 0100 , isme and operator hai now output dekho!
    at index/pos = 3 , 0 & 0 ie 0,
    at index = 2 , 1 & 1, ie 1.
    at index =1 , 0 & 0 , ie 0, and finally at index 0 , we have 1 & 0 ie 0,
    and we're simply returning the result at the given pos,

    btw, "1<<", it means shift the bit by 1 towards the left,
    eg a number is 1011, now we do 1<< on it, it becomes 0110, the one is now omitted an the space at the end is occupied by 0,
    */    
    return ((n & (1<<pos))!=0);
}

int setBit(int n , int pos)     //OR GATE
{
    /*
    Given posn pr 1 bit set karna hai eg no is 1010 , and pos is 2 , so after setting 1 at 2 well have
    1110, and to do that yaha logic lagega OR gate ka, coz we're returning the orignal number + the bit, hence 1 or 0 will be 1 coz we never know what exactly is at that posn 

    ⚠Yaha pos jo variable hai na usko we're actually using as an string, mane jasie 2nd position pe bit ko kuch karna hai , so 2nd posn in bit is 0100 as index 0 se start hota but pos ki value to 2 hai ie 0010, isi liye we're shifting the bit,
    Got it meri jaan!😛
    */ 
    return (n | (1<<pos));
}

int clearBit(int n , int pos)       //NAND GATE!
{
    /*now now let's be trendy 😎
    aj kal ke trend me ~(1<<pos) isko ek variable me store karte hai and we call that variable "mask", and we return as "n & mask";
    */
    return(n & ~(1<<pos));
}

int updateBit(int n , int pos , int val)
{
    // Update bit is nothing but Clear bit + Set bit or Set Wet😋 sorry for low Wit Tit Bits🤣!
    // val variable is liye diya hai taki we can set our desired bit rather than only one or zero.
    // Clear Bit in Swag 😎
    int mask = ~(1<<pos);
    n = n & mask;

    //Set Bit** 🤣 
    return (n | (val<<pos));
}
int main()
{
    cout<<getBit(5,0)<<endl;
    
    cout<<setBit(5,3)<<endl;

    cout<<clearBit(5,1)<<endl;

    cout<<updateBit(5,1,1);
    
    return 0;
}