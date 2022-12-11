import pandas as pd
import json
import os
from constants import *

#################################################################
#       Run this once after cloning the beer dataset            #
#   Beer dataset: https://github.com/philipperemy/beer-dataset  #
#################################################################

# Writes data to json file
def persist(b: json):
    if not os.path.exists(NEW_DATASET_PATH):
        os.makedirs(NEW_DATASET_PATH)
    current_page = b['currentPage']
    output_filename = os.path.join(NEW_DATASET_PATH, f'beer_{current_page}.json')
    with open(output_filename, 'w', encoding='utf-8') as w:
        json.dump(obj=b, fp=w, indent=2, ensure_ascii=False)
    current_page += 1


# Filter beers to only be of the category Ids in USEFULLIDS and to have the properties in REQUIREDKEYS 
# Then write to output_dir: NEW_DATASET_PATH
current_page = 1
amount_on_page = 0
b = {}
b['currentPage'] = 1
b['data'] = []

for i in range(1,PRE_FILTER_JSONS+1):
    ratings_data = pd.read_json(ORIG_DATASET_PATH + '/beer_' + str(i) + '.json').data
    for d in ratings_data:
        good = 0
        for k in REQUIREDKEYS:
            if d.get(k) is None:
                break
            else:
                good += 1
        cat = d.get('style').get('category')
        if cat.get('id') in USEFULLIDS and good == len(REQUIREDKEYS):
            b['data'] = b['data'] + [d]
            amount_on_page += 1
            if amount_on_page > BEERS_PER_JSON:
                amount_on_page = 0
                persist(b)
                b['currentPage'] += 1
                b['data'] = []
