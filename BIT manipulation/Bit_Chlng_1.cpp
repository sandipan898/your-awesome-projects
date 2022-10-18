#include<iostream>
using namespace std;

// Checking if the given number is a power of 2

void powerOfTwo(int n)
{
    /*
    🧠LOGIC, two ke power ke koi bhi number ho usme hamesha ek hi bar 1 aiga and, if we flip all the values after the 
    rightmost 1 and do AND operation well get 0.
    
    eg. say 8, eight is 1000, now the rightmost one is at pos 3, flip all bits including 1, we'll get 0111 ie 7,
    now do an AND operation of 8 and 7 , 1000 AND 0111 we get 0000, and this is true for all numbers that are power 
    of 2🤓.
    */

   if(n && !(n&n-1))
   cout<<"The number is power of 2"<<endl;
   else
   cout<<"The number is not in power of 2"<<endl;

    //Kya hua? Isme n && kyu kiye?🥺 , arre meri jaan , agar terko input me 0 mil jata to n-1 kaha se late😉
}

void BinCount(int n)
{
    /*
    THamba re baba, you dont have to first convert the number into binary and count the no of 1's 😂
    Tera faizal tereko usse modern tarika bataiga re 😎
    now see, as the logic utillized above, 
    
    doing n & n-1 , removes one "1" bit at a time, hai na?
    simply continue that until you get zero, and count the number of times 1 was removed, you'll have your answer!

    noi samajh aya🥺

    arre meri jan le example dekh!

    n=19 ie 01011,
    n-1 will be 18 i.e 01010

    now n & n-1 => 01010 ie 18 and count is 1,

    similarly 18 (01010) & 17(01001) => 01001 and count is 2,

    similarly 17(01001) & 16(01000) =>01000 and count is 3,

    now 16(01000) & 15(00111) => 00000 and count becomes 4 and loop breaks and you have your answer🥰
    */

   int count=0;
   while(n!=0)
   {
       n=n&(n-1);
       count++;
   }
    cout<<"The numbers of 1's is binary is/are "<<count<<endl;
}

void subSets(char arr[],int n)
{
  for(int i = 0; i < (1<<n); i++)  //1<<n is nothing but 2^n
  {
      for(int j = 0; j < n; j++)
      {
         if(i & (1<<j))
         {
             cout<<arr[j]<<" ";
         }
      }
    cout<<endl;
  }
    

}

int main()
{
    powerOfTwo(0);
    BinCount(19);
    char arr[] = {'a','b','c'};
    subSets(arr,3);
    return 0;
}