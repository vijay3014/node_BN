#include<stdio.h>
void main()
{
  int i,j,a=65;
  i=1;
  do
  {
      j=1;
      do
      {
         printf("%c ",a++);  
         j++;

      }while(j<=i);

    printf("\n");
    i++;

  }while(i<=5);

}