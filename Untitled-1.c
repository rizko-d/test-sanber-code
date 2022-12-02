#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int number = 761165575;
    char str[10];
    sprintf(str, "%d", number);
    int length = strlen(str);
    int i;
    int j = length - 1;
    for (i = 0; i < length; i++) {
        if (str[i] != str[j]) {
            printf("%d is not a palindrome number.\n", number);
            return 0;
        }
        j--;
    }
    printf("%d is a palindrome number.\n", number);
    return 0;
}