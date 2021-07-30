import sys

n, k = map(int, sys.stdin.readline().strip().split(' '))

types = []
result = 0;
rest_val = k

for i in range(n):
    coin_type = int(sys.stdin.readline().strip())
    if coin_type > k:
        break;
    elif coin_type == k:
        print(1)
        sys.exit() 
    else:
        types.append(coin_type)

for coin_type in types[::-1]:
    if coin_type <= rest_val:
        portion = rest_val // coin_type
        rest_val -= portion * coin_type
        result += portion
    if rest_val <= 0:
        break

print(result)