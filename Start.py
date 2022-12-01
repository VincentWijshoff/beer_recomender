import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

ratings_data = pd.read_json('./beer-dataset/beer-database/beer_1.json').data

cats = {} 
for i in range(1,604):
    ratings_data = pd.read_json('./beer-dataset/beer-database/beer_' + str(i) + '.json').data
    for d in ratings_data:
        cat = d.get('style').get('category')
        # print(cat)
        if cat.get('id') not in cats.keys():
            cats[cat.get('id')] =  cat.get('name')

for i in range(1,len(cats.keys())+1):
    print(str(i) + ' ' + cats[i])

cats2 = {} 
for i in range(1,604):
    ratings_data = pd.read_json('./beer-dataset/beer-database/beer_' + str(i) + '.json').data
    for d in ratings_data:
        cat = d.get('style').get('category')
        # print(cat)
        if cat.get('id') not in cats2.keys():
            cats2[cat.get('id')] =  1
        else: 
            cats2[cat.get('id')] +=  1

for i in range(1,len(cats.keys())+1):
    print(cats[i] + ' ' + str(cats2[i]))

# reader = Reader(rating_scale=(1, 5))
# data = Dataset.load_from_df(ratings_data[['user_id', 'book_id', 'rating']], reader)