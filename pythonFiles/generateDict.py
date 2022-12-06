import os
import pickle
import pandas as pd

#################################################################
#           Run this once after running filtering.py            #
#################################################################

if not os.path.isfile('./pythonFiles/idDict.pkl'):
    dict = {}
    for i in range(1,132):
        curr = []
        ratings_data = pd.read_json('./filtered-database/beer_{}.json'.format(i)).data
        for d in ratings_data:
            dict[d.get("id")] = i
    print(dict)
    with open('idDict.pkl', 'wb') as f:
        pickle.dump(dict, f)
else: 
    print('Dict already generated, please delete pythonFiles/idDict.pkl to regenerate it.')