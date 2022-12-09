import pickle
import pandas as pd
from constants import *

# Open saved dict 
with open(IDDICT, 'rb') as f:
    loaded_dict = pickle.load(f)

def getBeerByID(beerID:str):
    """ Get beer information for beer with id = beerID"""
    fileNum = loaded_dict[beerID]

    ratings_data = pd.read_json('./' + NEW_DATASET_PATH + '/beer_{}.json'.format(str(fileNum))).data
    
    for d in ratings_data:
        if str(d.get('id')) == beerID:
            return d
    return None
