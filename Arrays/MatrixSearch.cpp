// Program to search a matrix the cool way!

#include<iostream>
using namespace std;

int main()
{
    int n, t; 
    cin>>n>>t;
    int arr[n][n];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin>>arr[i][j];
        } 
    }
    int r = 0, c = n-1;
    while (r<n && c>0)
    {
        if (arr[r][c]==t)
        {
            cout<<"Element Found";
            return 0;
        }
        else if(arr[r][c]>t)
        c--;
        else
        r++;
    }
    return 0;
}