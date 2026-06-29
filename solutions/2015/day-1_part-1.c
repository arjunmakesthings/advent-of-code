// porting javascript solution to c.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *parse(const char *filename)
{
       FILE *file = fopen(filename, "r");

       fseek(file, 0, SEEK_END);
       long size = ftell(file);
       rewind(file);

       char *buffer = malloc((size_t)size + 1);

       size_t read = fread(buffer, 1, (size_t)size, file);
       buffer[read] = '\0';

       fclose(file);
       return buffer;
}

int main(void)
{
       char *input = parse("../../inputs/2015/day-1.txt");
       int curr_floor = 0;
       for (int i = 0; input[i] != '\0'; i++)
       {
              curr_floor = input[i] == '(' ? curr_floor + 1 : curr_floor - 1;
       }
       free(input);
       printf("%i\n", curr_floor);
       return 0;
}