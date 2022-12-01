import pandas as pd
import json
import os
from glob import glob

def persist(b: json):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    current_page = b['currentPage']
    output_filename = os.path.join(output_dir, f'beer_{current_page}.json')
    print('-', output_filename)
    with open(output_filename, 'w', encoding='utf-8') as w:
        json.dump(obj=b, fp=w, indent=2, ensure_ascii=False)
    current_page += 1


usefullIds = [4, 5, 7]
output_dir = 'filtered-database'
current_page = 1
amount_on_page = 0
b = {}
b['currentPage'] = 1
b['data'] = []

for i in range(1,604):
    ratings_data = pd.read_json('./beer-dataset/beer-database/beer_' + str(i) + '.json').data
    for d in ratings_data:
        cat = d.get('style').get('category')
        if cat.get('id') in usefullIds:
            b['data'] = b['data'] + [d]
            amount_on_page += 1
            if amount_on_page > 49:
                amount_on_page = 0
                persist(b)
                b['currentPage'] += 1
                b['data'] = []






# for i in range(1,len(cats.keys())+1):
#     print(str(i) + ' ' + cats[i])
