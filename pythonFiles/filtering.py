import pandas as pd
import json
import os

#################################################################
#       Run this once after cloning the beer dataset            #
#   Beer dataset: https://github.com/philipperemy/beer-dataset  #
#################################################################

# Writes data to json file
def persist(b: json):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    current_page = b['currentPage']
    output_filename = os.path.join(output_dir, f'beer_{current_page}.json')
    print('-', output_filename)
    with open(output_filename, 'w', encoding='utf-8') as w:
        json.dump(obj=b, fp=w, indent=2, ensure_ascii=False)
    current_page += 1


# Filter beers to only be of the category Ids in usefullIds and to have the properties in requiredKeys 
# Then write to output_dir
usefullIds = [4, 5, 7]
requiredKeys = ["isOrganic", "glasswareId", "styleId", "servingTemperature", "abv", "ibu", "srmId"] 
output_dir = 'pythonFiles/filtered-database2'
current_page = 1
amount_on_page = 0
b = {}
b['currentPage'] = 1
b['data'] = []

for i in range(1,604):
    ratings_data = pd.read_json('./pythonFiles/beer-dataset/beer-database/beer_' + str(i) + '.json').data
    for d in ratings_data:
        good = 0
        for k in requiredKeys:
            if d.get(k) is None:
                break
            else:
                good += 1
        cat = d.get('style').get('category')
        if cat.get('id') in usefullIds and good == len(requiredKeys):
            b['data'] = b['data'] + [d]
            amount_on_page += 1
            if amount_on_page > 49:
                amount_on_page = 0
                persist(b)
                b['currentPage'] += 1
                b['data'] = []
