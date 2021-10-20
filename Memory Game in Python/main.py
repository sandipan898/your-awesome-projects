#THIS GAME WAS DEVELOPED BY VIGNESH BALAJI S
from random import shuffle
from collections import OrderedDict
def empty(lm):           
  x=1
  for i in range(4):
               print('*'*45)
               for r in range(3):
                              for v in range(4):
                                  if r==1:
                                              if x in lm:
                                               print('*',' '*9,end='')
                                               x+=1
                                              else:
                                               s=str(x)              
                                               print('*',s.center(9," "),end='')
                                               x+=1
                                  else:
                                              print('*',' '*9,end='')
                              
                              print('*')
  print('*'*45)
def two(d,q1,q2,lm):
  listq=[q1,q2]
  listq.sort()
  q=listq[0]
  x=1
  y=d[str(q)]
  for i in range(4):
               print('*'*45)
               for r in range(3):
                              for v in range(4):
                                  if r==1:
                                              if x==q:
                                               print('*',y.center(9," "),end='')
                                               q=listq[1]
                                               y=d[str(q)]
                                               x+=1
                                              elif x in lm:
                                               print('*',' '*9,end='')
                                               x+=1
                                              else:
                                               s=str(x)              
                                               print('*',s.center(9," "),end='')
                                               x+=1
                                               
                                  else:
                                              print('*',' '*9,end='')
                              
                              print('*')
  print('*'*45)
listm=[]
mem=[]
dic={'1':'red','2':'blue','3':'green','4':'pink','5':'blue','6':'red','7':'pink','8':'green','9':'red',
     '10':'green','11':'pink','12':'red','13':'blue','14':'pink','15':'green','16':'blue'}
values=list(dic.values())
shuffle(values)
dic=dict(OrderedDict(zip(dic.keys(),values)))
while True: 
 empty(listm)
 x1=int(input('ENTER THE 1ST NUMBER'))
 x2=int(input('ENTER THE 2nd NUMBER'))
 if x1>16 or x2>16:
    print('oops!!! entered pair is out of range :( \ntry again.......')
   
 elif (x1 and x2) not in listm :
                
   for y in range(15):
    print()
   two(dic,x1,x2,listm)
   if dic[str(x1)]==dic[str(x2)]:
      print('YOU WON')
      listm.append(x1)
      listm.append(x2)
      listm.sort()
      
   else:
      print('try again')
   print(input('...........press enter to continue'))     
   mem.append('.')
   for y in range(20):
     print()

   if len(listm)==16:
      print('.......CONGRATS.......')          
      print('YOU HAVE REACHED THE END OF THE GAME')
      print('Your Memory Power is:')
      print('     ',(108-len(mem)),'/100')
      break               
         
 else:
    print('oops!!! entered pair is not on the grid :( \ntry again.......')            
       
