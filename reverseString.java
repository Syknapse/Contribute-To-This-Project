// Java program to demonstrate conversion from 
// String to StringBuffer and reverse of string 
import java.lang.*; 
import java.io.*; 
import java.util.*; 
  
public class Test { 
    public static void main(String[] args) 
    { 
        String str = "Geeks"; 
  
        // conversion from String object to StringBuffer 
        StringBuffer sbr = new StringBuffer(str); 
        // To reverse the string 
        sbr.reverse(); 
        System.out.println(sbr); 
    } 
}
