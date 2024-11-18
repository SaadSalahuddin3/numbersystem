const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
let count=0;
  for(i=0;i<numbers.length;i++)
  {
    for(j=0;j<numbers.length;j++)
    {
        if(numbers[i]%j==0)
        {
            count++
        }
    }
    if(count==2)
    {
        console.log("this number is prime"+numbers[i])
    }

  }