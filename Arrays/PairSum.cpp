/*
A program to find if the sum of subarray in a given array is equal to given number S,

Now we have two approach, first is simple bruteforce, find the sum of all possible 
pairs and compare it with the sum , the code will work but the problem is The time complexity
is O n^2,

Now the different approach to solve the problem
eg array is 2,4,7,11,14,16,20,21 and S = 31 

⚠ We require a sorted array for this

take two variables lower index=0 and upper index=n-1,here 7,
if li + ui < S, increase li else lower ui, then continue till you find the answer of li==ui
*/

#include<iostream>
using namespace std;


int main()
{
    int n, S, lb=0,ub;
   cin>>n;
    cin>>S;
    ub=n-1;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin>>arr[i];
    }
    while (lb<=ub)
    {
         if (arr[lb]+arr[ub]==S)
        {
            cout<<lb<<" "<<ub;
            return 0;
        }
        else if(arr[lb]+arr[ub]>S)
        {
            ub--;
        }
        else if(arr[lb]+arr[ub]<S)
        {
            lb++;
        }
       
    }
    cout<<"Sum doesnt exist";
    return 0;    
}