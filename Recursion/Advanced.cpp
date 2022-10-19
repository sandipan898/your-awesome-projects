#include<bits/stdc++.h>
using namespace std;

void revString(string str,int l)
{
    //Code to reverse a string using recursion😀
    while (l>=0)
    {
        cout<<str[l];
        return revString(str,l-1);
    }
    return;
}

void theLifeOfPi(string str,int l)
{
    while(l>0)
    {
        if(str[l]=='i' && str[l-1]=='p')
        {
            cout<<"3.14";
            theLifeOfPi(str,l-1);
        }
        else
        cout<<str[l];
    }
    theLifeOfPi(str,l-1);

}

int main()
{
    string str;
    getline(cin,str);
    int l = str.length();
    theLifeOfPi(str,l);
    return 0;
}