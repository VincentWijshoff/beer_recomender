### File with constants

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

# Recommendation
THRESH = 0.5