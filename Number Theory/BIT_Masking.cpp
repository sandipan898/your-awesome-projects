/*
🔥GET EXCITED! we're about to get into some SERIOUS  business!🔥
Bit masking is a very easy topic , its core concept is simple, you know how we use hashing , its kindof like that,
insted we use binary representaion as a pattern whose set bits represent some property of the element at that index of
array.

Now insted of using more theory lets understand it with a question:-

There are N≤5000 workers. Each worker is available during some days of this month (which has 30 days). For each worker,
you are given a set of numbers, each from interval [1,30], representing his/her availability. You need to assign an 
important project to two workers but they will be able to work on the project only when they are both available. 
Find two workers that are best for the job — maximize the number of days when both these workers are available.

The naive approach would be finding intersection of all the arrays, but that takes O(N), time and we dont want that.
Now rather what we'll do is insted of using array to store the date a worker is available we'll use the set bits at 
those postion to represent availablity and then do the & operation.
*/

#include <bits/stdc++.h>
using namespace std;

void printBinary(int num)
{
    for (int i = 10; i >= 0; --i)
    {
        cout << ((num >> i) & 1);
    }
    cout << endl;
}

int main()
{

    // cout<<"Enter working days"<<endl;
    int n;
    cin >> n;
    vector<int> masks(n, 0);
    for (int i = 0; i < n; i++)
    {
        int num_workers;
        cin >> num_workers;
        int mask = 0;
        for (int j = 0; j < num_workers; j++)
        {
            int day;
            cin >> day;
            mask = (mask | (1 << day));
        }
        masks[i] = mask;
    }
    int max_days = 0;
    int p1 = -1, p2 = -1;
    for (int a = 0; a < n; ++a)
    {
        for (int b = a + 1; b < n; ++b)
        {
            int inter = (masks[a] & masks[b]);
            int common_days = __builtin_popcount(inter);
            if (common_days > max_days)
            {
                max_days = max(max_days, common_days);
                p1 = a;
                p2 = b;
            }
        }
    }
    cout <<"Worker "<<p1<<" and worker "<<p2<<" Have The Most Days In Common ie "<<max_days<<endl;
}
