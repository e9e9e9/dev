#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'sockMerchant' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER_ARRAY ar
#

def sockMerchant(n, ar):
    # Write your code here
    ar.sort()
    result = 0
    target = ar[0]
    sock_cnt = 1
    
    for i in range(1, len(ar)):
        if target == ar[i]:
            sock_cnt += 1
            if sock_cnt == 2:
                sock_cnt = 0
                result += 1
        else:
            sock_cnt = 1
            target = ar[i]

    return result 
            
        

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    ar = list(map(int, input().rstrip().split()))

    result = sockMerchant(n, ar)

    fptr.write(str(result) + '\n')

    fptr.close()
