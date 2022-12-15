### File with constants

# App behaviour
    # Recommendation
THRESH = 0.5
    # Amount of beers in list
BEERLIST_AMOUNT = 5


# Orginal dataset
ORIG_DATASET_PATH = './pythonFiles/beer-dataset/beer-database'
PRE_FILTER_JSONS = 603

# Filtering 
USEFULLIDS = [4, 5, 7]
REQUIREDKEYS = ["isOrganic", "glasswareId", "styleId", "servingTemperature", "abv", "ibu", "srmId"] 

# New dataset
BEERS_PER_JSON = 25
FILTERED_JSONS = 9
NEW_DATASET_PATH = 'pythonFiles/filtered-database2'
IDDICT = './pythonFiles/idDict.pkl'

# General
MAX_ABV = 19.4
MAX_IBU = 120
MAX_SRM = 41
MIN_SRM = 1
SRM_DICT= {3: "pale", 4:"straw", 5:"pale gold", 6: "gold", 7:"deep gold", 10: "pale amber", 13:"medium amber", 16:"deep amber", 19: "amber brown", 21:"brown", 25:"ruby-brown", 31:"deep brown", 41:"black"}

