import java.util.*;
import java.io.*;
import java.util.ArrayList;
import java.util.Collections;

public class Solution {

    static int lotteryCoupons(int n) {
        int[] count = new int[10];
        int maxCount = 0;

        for (int i = 1; i <= n; i++) {
            int sum = getDigitSum(i);
            count[sum]++;
            maxCount = Math.max(maxCount, count[sum]);
        }

        int numWinners = 0;
        for (int i = 0; i < 10; i++) {
            if (count[i] == maxCount) {
                numWinners++;
            }
        }

        return numWinners;
    }

    static int getDigitSum(int n) {
        int sum = 0;
        while (n != 0) {
            sum += n % 10;
            n = n / 10;
        }
        return sum;
    }
}