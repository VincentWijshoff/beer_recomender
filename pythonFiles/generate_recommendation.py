import random

import pandas as pd
from pythonFiles.userBeerSimilarity import getSimilarity
from user import user

def generate_recommendation(user:user, thresh=4):
    """
    Generates a recommendation for a user based on a similarity threshold. Only
    beers with a similarity at or above the threshold will be recommended
    """
    while True:
        i = random.randint(1,131)
        ratings_data = pd.read_json('./filtered-database/beer_{}.json'.format(i)).data

        for d in ratings_data:
            rating = getSimilarity(user,d)
            if rating >= thresh:
                return d
