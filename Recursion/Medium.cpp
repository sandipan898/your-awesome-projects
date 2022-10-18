// Some medium level questions in recursion

#include <bits/stdc++.h>
using namespace std;

int sorted_array(int arr[], int n)
{
    while (n != 0)
    {
        if (arr[n] > arr[n - 1])
            return sorted_array(arr, n - 1);

        else
            return 0;
    }
}

void dec(int n)
{
    // Printing numbers in descending order
    if (n == 0)
    {
        return;
    }
    cout << n << endl;
    dec(n - 1);
}

void inc(int n)
{
    // Printing numbers in ascending order
    if (n == 1)
    {
        cout << "1" << endl;
        return;
    }
    inc(n - 1);
    cout << n << endl;
}

int foccurence(int arr[], int n, int i, int key)
{
    if (i == n)
        return -1;

    if (arr[i] == key)
    {
        return i;
    }
    return foccurence(arr,n,i+1,key);
}

int loccurence(int arr[], int n, int i, int key)
{
    int restArray = loccurence(arr,n,i+1,key);
    if(restArray!=-1)
    {
        return restArray;
    }
    if(arr[i]==key)
    return i;
    return -1;
}

int main()
{
    /*
    SORTED ARRAY QUESTION😋
    int n;
    cin>>n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin>>arr[i];
    }
    int result = sorted_array(arr,n);
    (result>0)?(cout<<"Sorted"):(cout<<"Naaah Gooriye!");  Chwaaaeeg😎😎😎
    */

    int n=7,a=3;
    // cin>>n;
    int arr[]={1,2,3,4,3,6,3};
    // for (int i = 0; i < n; i++)
    // {
    //     cin>>arr[i];
    // }
    // cin>>a;
    int res = loccurence(arr,n,0,3);
    cout<<res;
    return 0;
}