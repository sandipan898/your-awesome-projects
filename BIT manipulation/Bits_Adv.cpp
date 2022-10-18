#include<iostream>
using namespace std;

void unique(int arr[], int  n)
{
    // a code wiht bitwise operation to find out the unique element in the given array

    /*
    🧠Logic, see XOR gate, if the both inputs are same then xor of them will be 0, similarly agar hamlog sare elements ka dusre elements ke sath XOR kare to only that element will remain jo unique ho😉

    ⚠This code mysteriously works, its alien technology!🤣
    */

   int xor_sum=0;
   for (int i = 0; i < n; i++)
   {
      xor_sum = xor_sum^arr[i];
   }
   cout<<"Unique element is "<<xor_sum<<endl;
}

void two_unique(int arr[], int n)
{
    // A code to find two unique numbers in the given array

    /*
    LOGIC => T
    */
}

int main()
{
    int arr[]= {1,2,3,4,3,2,1};
    unique(arr,7);
    return 0;
}