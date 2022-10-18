// Recursion apko choti problem ke answer dega and unko kuch karke badi problem ka answer nikal lo🤓
// Ek sentence yad karo, n ke liye kuch bhi natlab n aur recur(n-1)
#include <bits/stdc++.h>
using namespace std;

int sum(int n)
{
    while (n != 0)
    {   //Sum till n matlab, sum of n + sum till n-1🧠
        int prev_sum = sum(n - 1);
        return n + prev_sum;
    }
    return 0;
}

int npow(int n, int p)
{
    while (p != 0)
    {
        //p to the power n, is nothing but p * pdt till p-1;🧠 
        int pdt = npow(n, p-1);
        return n * pdt;
    }
    return 1;
}

int fact(int n)
{
    while(n!=0)
    {
        // Factorial till n is nothing but n * factorial till n-1🧠
        int f = fact(n-1);
        return n*f;
        // or simply return n*fact(n-1);
    }
    return 1;
}

int fibonacci(int n)
{
    if(n==0 || n==1)
    return n;

    else
    return fibonacci(n-1)+fibonacci(n-2);
}

int main()
{
    int n;
    cin >> n;
    int result = fibonacci(n);
    cout << result;
    return 0;
}