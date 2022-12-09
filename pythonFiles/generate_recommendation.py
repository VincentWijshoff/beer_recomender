import random

import pandas as pd
from userBeerSimilarity import getSimilarity
from user import user
from constants import *

def generate_recommendation(user:user, thresh=THRESH):
    """
    Generates a recommendation for a user based on a similarity threshold. Only
    beers with a similarity at or above the threshold will be recommended
    """
    while True:
        i = random.randint(1,FILTERED_JSONS)
        ratings_data = pd.read_json('./' + NEW_DATASET_PATH + '/beer_{}.json'.format(i)).data
        # random.shuffle(ratings_data)

        for d in ratings_data:
            rating = getSimilarity(user,d)
            if rating >= thresh:
                print(rating)
                return d
