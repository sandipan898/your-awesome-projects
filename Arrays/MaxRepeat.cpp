/*
Key concept is maintaining a first occurence array
This is a very used concept of using another array to store something for each element of the first array
*/

#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, count, mindex = INT_MAX;
    cin >> n;
    int arr[n],idx[n];
    for (int q = 0; q < n; q++)
    {
        idx[q]=-1;
        cin>>arr[q];
    }
    
    for (int j = 0; j < n - 1; j++)
    {   count=0;
        int temp = arr[j];
        for (int k = j + 1; k < n; k++)
        {
            if (arr[k] == temp)
            {
                count++;
            }
        }
        if(idx[count]==-1)
        idx[count] = temp;
    }
    int t = INT_MIN;
    for (int a = 0; a < n; a++)
    {
        if (idx[a] > t)
            t = a;
    }
    cout << t;
}