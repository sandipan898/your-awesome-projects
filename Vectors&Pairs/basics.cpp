#include<bits/stdc++.h>
using namespace std;

int main()
{
    // declaring a vector.
    vector<int> v;

    // inserting and removing a value from vector
    v.push_back(1);
    v.push_back(69);
    v.pop_back();
    v.pop_back();

    for (int i = 0; i < 5; i++)
    {
        int n;
        cin>>n;
        v.push_back(n);
    }
    

    // iterating over a vector
    for(auto element:v)
    {
        cout<<element<<" ";
    }

    // swapping two vectors.
    vector<int> v2 ={8,7,6,5,4,3,2,1};
    swap(v,v2);
    for(auto element:v)
    {
        cout<<element<<" ";
    }
    cout<<endl;

    for(auto element:v2)
    {
        cout<<element<<' ';
    }
    
}