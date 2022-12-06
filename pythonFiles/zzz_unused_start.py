import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Used when discovering dataset, not needed anymore.

# Find all categories 
cats = {} 
for i in range(1,604):
    ratings_data = pd.read_json('./pythonFiles/beer-dataset/beer-database/beer_' + str(i) + '.json').data
    for d in ratings_data:
        cat = d.get('style').get('category')
        if cat.get('id') not in cats.keys():
            cats[int(cat.get('id'))] =  cat.get('name')

# Print category ids and mathing name
temp = list(cats.keys())
temp.sort() 
for i in temp:
    print(str(i) + ' ' + cats[i])

# Count amount of beers per category
cats2 = {} 
for i in range(1,604):
    ratings_data = pd.read_json('./pythonFiles/beer-dataset/beer-database/beer_' + str(i) + '.json').data
    for d in ratings_data:
        cat = d.get('style').get('category')
        # print(cat)
        if cat.get('id') not in cats2.keys():
            cats2[cat.get('id')] =  1
        else: 
            cats2[cat.get('id')] +=  1

# And print
for i in range(1,len(cats.keys())+1):
    print(cats[i] + ' ' + str(cats2[i]))
