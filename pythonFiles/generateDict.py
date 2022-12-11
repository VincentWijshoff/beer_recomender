import os
import pickle
import pandas as pd
from constants import *

#################################################################
#           Run this once after running filtering.py            #
#################################################################

if not os.path.isfile(IDDICT):
    dict = {}
    for i in range(1,FILTERED_JSONS + 1):
        curr = []
        ratings_data = pd.read_json('./' + NEW_DATASET_PATH + '/beer_{}.json'.format(i)).data
        for d in ratings_data:
            dict[d.get("id")] = i
    with open(IDDICT, 'wb') as f:
        pickle.dump(dict, f)
else: 
    print('Dict already generated, please delete pythonFiles/idDict.pkl to regenerate it.')