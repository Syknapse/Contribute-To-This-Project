#A positive integer is called an Armstrong number of order n if

#abcd... = an + bn + cn + dn + ...
#In case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself. For example:

#153 = 1*1*1 + 5*5*5 + 3*3*3  // 153 is an Armstrong number.

num = 1634

# Changed num variable to string, 
# and calculated the length (number of digits)
order = len(str(num))

# initialize sum
sum = 0

# find the sum of the cube of each digit
temp = num
while temp > 0:
   digit = temp % 10
   sum += digit ** order
   temp //= 10

# display the result
if num == sum:
   print(num,"is an Armstrong number")
else:
   print(num,"is not an Armstrong number")
