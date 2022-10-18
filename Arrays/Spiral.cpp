// Traverse a 2D array in a spiral manner
#include <iostream>
using namespace std;

int main()
{
    int n, m;
    cin >> n >> m;
    int arr[n][m];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cin >> arr[i][j];
        }
    }
    int rs = 0, cs = 0, re = n - 1, ce = m - 1;
    while (re >= rs || ce >= cs)
    {
        // row traversal actually print column
        for (int col = cs; col <= ce; col++)
        {
            cout << arr[rs][col] << " ";
        }
        cout<<"\n";
        // Pehli row printed hence
        rs++;

        // column downward traversal print last row
        for (int row = rs; row <= re; row++)
        {
            cout << arr[row][ce] << " ";
        }
        cout<<"\n";
        // Last column printed hence
        ce--;

        // row inverse traversal
        for (int col = ce; col >= cs; col--)
        {
            cout << arr[re][col]<<" ";
        }
        cout<<'\n';
        // Last row printed hence
        re--;

        // column inverse traversal
        for (int row = re; row >= rs; row--)
        {
            cout << arr[row][cs]<<" ";
        }
        cout<<"\n";
        // first column printed hence
        cs++;
    }
    return 0;
}