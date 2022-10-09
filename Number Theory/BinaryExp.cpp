#include<bits/stdc++.h>
using namespace std; 

const int M = 1e9+7;

//Here's the recursive approach
int binExpRecur(int a,int b)
{
    if(b==0) return 1; //any number to power 0 is 1
    int res = binExpRecur(a,b/2);
    //check if number is odd
    if(b&1) //if b=5 then a/2 = 2, so we'd get a^2*a^2 and hence we multiply a again to make up for the last power and make it 5
    return (a*((res*1LL*res)%M))%M; //see modulo laganae ke bad answer will be optimized for int, hence we write 1LL to only facilitate calcultaion
    else
    return (res*1LL*res)%M;
}

/*
Ietrative Code ⚠️Faster than recursive.
to break any number in form power of 2, we simply make the binary of number as their power
eg 3^13 => 3^(1101) => 3^8 + 3^4 + 3^1 + 3^0
so logic is when the bit is set we will multiply the power of 2 else leave it
Hence we only need 3^8 , 3^4 & 3^1 for our answer (=>>=<<=)
*/
int binRecIt(int a , int b)
{
    int ans = 1;
    while (b)
    {
        if(b&1) //0th bit 1 hai ki nahi, if true then multiply the current power
        {
            ans=(ans*1LL*a)%M; ///Caluclation ke samay long long , then after modulo the value will be adjusted for int, hence storing in int
        }
        a=(a*1LL*a)%M;
        b=b>>1;
    }
    return ans;
    
}

int main(){
/*
Binary exponentiation is an algorithm to find very complex powers and also coz the default pow(x,y) has precisoin error
as this pow() function returns double as result which we already know has crap precision in comparison with long long
*/



/*
Better approach is , 2^16 => 2^8*2^8 => 2^4*2^4*2^4*2^4,
we go on diving the power and then start from 2^2 then multiply it with itself and get 2^4 then again multiply it with
itself and get 2^8 and so on hence reducing the total steps need by half, this is divide and conquer
*/

cout<<binExpRecur(2123123,1231231)<<" "<<binRecIt(2123123,1231231);
}