import math
a = int(input())

arr = ''

for i in range(1,a + 1):
    if(a % i == 0):
        arr += f'{i} '

print(arr)