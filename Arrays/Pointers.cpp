// Notes about pointers!😊
#include<iostream>

using namespace std;

void swap(int* a , int* b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
    // On running the values of only local variables will be swapped not of the variables we passed jisko actually swap karna tha, so to access a main variable inside a function, well insted pass their memory address!
}

int main()
{
    int a = 20;
    int* aptr = &a;

    cout<<"aptr stores "<<aptr<<endl; // aptr by itself stores only the memory address of the variable a.

    cout<<"*aptr stores "<<*aptr<<endl; //*aptr, stores the actual value at the memory address.

    // if we do anything with *aptr it will change the value of a directly eg

    *aptr = 69;

    cout<<"the value of a is now changed to "<<a<<endl;  //a=>69 now, this is called doing manipluation by reference!

    // In array say called arr, the variable arr itself is a ponter that refers the address of the first element of the array

    int arr[] = {10,20,30};

    // traversing an array with pointer😎

    for (int i = 0; i < 3; i++)
    {
        cout<<*(arr+i)<<endl;
    }

    // traversing the array with address!
    int* arr_ptr = arr;
    for(int i = 0; i<3; i++)
    {
        cout<<*arr_ptr<<endl;
        arr_ptr++;
        // it might look we're only adding 1 but actually its adding 4 tp the arr_ptr coz int takes 4 byte space!
    }
    
    // Passing values by reference in a function using pointers!😀

    int as = 10;
    int bs = 20;

    // we passed the reference and worked with the values at the instance of memeory and hence the work is done😎😎
    swap(&as,&bs);
    
    cout<<as<<" "<<bs<<endl;

    return 0;
}