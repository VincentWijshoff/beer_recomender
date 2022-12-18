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
SRM_DICT= {3: "Pale", 4:"Straw", 5:"Pale gold", 6: "Gold", 7:"Deep gold", 10: "Pale amber", 13:"Medium amber", 16:"Deep amber", 19: "Amber brown", 21:"Brown", 25:"Ruby-brown", 31:"Deep brown", 41:"Black"}

