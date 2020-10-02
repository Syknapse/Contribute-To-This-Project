// C++ program to print reverse  
// of words in a string. 
#include<iostream> 
  
using namespace std; 
  
string wordReverse(string str) 
{ 
    int i = str.length() - 1; 
    int start, end = i + 1; 
    string result = ""; 
      
    while(i >= 0) 
    { 
        if(str[i] == ' ') 
        { 
            start = i + 1; 
            while(start != end) 
                result += str[start++]; 
              
            result += ' '; 
              
            end = i; 
        } 
        i--; 
    } 
    start = 0; 
    while(start != end) 
        result += str[start++]; 
      
    return result; 
} 
  
// Driver code 
int main() 
{ 
    string str = "I AM TANISHA"; 
      
    cout << wordReverse(str); 
      
    return 0; 
