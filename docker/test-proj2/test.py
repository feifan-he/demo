import os
import random

print('hello world')

with open('/app/my_folder/' + str(random.randint(0, 5000)), 'w') as w:
    w.write('a')
    
print(os.listdir('/app/my_folder'))