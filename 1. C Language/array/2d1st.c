#include<stdio.h>
void main()
{
  int arr[3][3];
  int i,j;

  for(i=0; i<3; i++)
  {  
      for(j=0; j<3; j++)
      {
            printf("index[%d][%d] = ",i,j);
            scanf("%d",&arr[i][j]);
      }
  }
  
  printf("\n");
  for(i=0; i<3; i++)
  {
      for(j=0; j<3; j++)
      {
         if(arr[i][j]==0)
         {
            printf(" ");
         }
         else
         {
            printf("%d ",arr[i][j]);
         }
      }
      printf("\n");
  }
 
}