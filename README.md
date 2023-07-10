coudl you generate a typescript code

input 
1 - home/fabio/julio/file1.txt
2 - home/fabio/julio/file2.txt
3 - home/fabio/file3.txt
4 - home/fabio/file4.txt
5 - home/file5.txt
6 - faluz/file6.txt
7 - luz/file8.csv
8 - luz/file9.txt
9 - luz/file10.csv

output
interface node{
    parent:string;
    children:string;
}
 [
{parent = /     ,  children = home },
{parent =home   ,  children = fabio},
{parent =fabio  ,  children = julio},
{parent =julio  ,  children = file1.txt},
{parent =julio  ,  children = file2.txt},
{parent =fabio  ,  children = file3.txt},
{parent =fabio  ,  children = file4.txt},
{parent =home   ,  children = file5.txt} ,
{parent =/      ,  children = faluz},
{parent =faluz  ,  children = file6.txt},
{parent =/      ,  children = luz},
{parent =luz    ,  children = file8.csv},
{parent =luz    ,  children = file9.txt},
{parent =luz    ,  children = file10.csv}
]

your-output
[
  { parent: undefined, children: 'home' },
  { parent: 'home', children: 'fabio' },
  { parent: 'fabio', children: 'julio' },
  { parent: 'julio', children: 'file1.txt' },
  { parent: 'julio', children: 'file2.txt' },
  { parent: 'fabio', children: 'file3.txt' },
  { parent: 'fabio', children: 'file4.txt' },
  { parent: 'home', children: 'file5.txt' },
  { parent: undefined, children: 'faluz' },
  { parent: 'faluz', children: 'file6.txt' },
  { parent: undefined, children: 'luz' },
  { parent: 'luz', children: 'file8.csv' },
  { parent: 'luz', children: 'file9.txt' },
  { parent: 'luz', children: 'file10.csv' }
]