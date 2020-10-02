# Python program to check
# if a string is palindrome 
# or not
st = 'malayalam'
j = -1
flag = 0
for i in st:
    if i != st[j]:
      j = j - 1
      flag = 1
      break
    j = j - 1
if flag == 1:
    print("NO")
else:
    print("Yes")
