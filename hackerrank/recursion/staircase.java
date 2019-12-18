import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

   // Complete the stepPerms function below.
   static int stepPerms(int n) {
       if(n == 0){
           return 1;
       }

       HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

       return helper(n,map);

   }

   private static int helper(int m, HashMap<Integer, Integer> map) {
       if(m == 1){
           return 1;
       }
       if(m == 2){
           return 2;
       }
       if(m == 3){
           return 4;
       }
       if(map.containsKey(m)){
           return map.get(m);
       } else {
           int temp = helper(m-1, map) + helper(m-2, map) + helper(m-3, map);
           map.put(m, temp);
           return map.get(m);
       }
   }

   private static final Scanner scanner = new Scanner(System.in);

   public static void main(String[] args) throws IOException {
       BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

       int s = scanner.nextInt();
       scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

       for (int sItr = 0; sItr < s; sItr++) {
           int n = scanner.nextInt();
           scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

           int res = stepPerms(n);

           bufferedWriter.write(String.valueOf(res));
           bufferedWriter.newLine();
       }

       bufferedWriter.close();

       scanner.close();
   }
}
