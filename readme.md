# Exercise

Write a program that prints numbers from 1 to 100 inside the console,
but has to print _"fizz"_ instead of multiples of 3 and _"buzz"_ instead of multiples of 5.
Numbers that are both multiples of 3 and 5 and swapped with _"fizzbuzz"_.

## Solution

### Given info

1. Multiples of 3 become _"fizz"_;
2. Multiples of 5 become _"buzz"_;
3. Multiples of both become _"fizzbuzz"_;
4. Other numbers are print as usual.

### Procedure

Use '%' operator to check if a number returns the rest when divided by 3 and / or 5.
1. If it can be divided by both, change it with _"fizzbuzz"_ and add it to gridString. Also add the class with the same name as the result to the **div**;
2. If it can be divided by 3 but not by 5, change it with _"fizz"_ and add it to gridString. Also add the class with the same name as the result to the **div**;
3. If it can be divided by 5 but not by 3, change it with _"buzz"_ and add it to gridString. Also add the class with the same name as the result to the **div**;
4. If it can't be divided by neither 3 nor 5, just add it to gridString;
5. Print gridString.

### Output

Print gridString, containing all the numbers, fizzs, buzzs and fizzbuzzs.
