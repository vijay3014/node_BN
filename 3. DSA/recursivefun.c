// recursion => function
#include <stdio.h>
int fun(int n)
{
    printf("inside function %d\n", n);

    if (n < 3)
    {
        fun(++n);
    }
    else
    {
        return 0;
    }
    printf("outside the function %d\n", n);
}
int main()
{
    fun(1);
}