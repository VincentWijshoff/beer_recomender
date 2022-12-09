from constants import *

def getSimilarity(b1, b2):
    """Generate similarity number for two beers"""
    # UNTESTED 
    factor = 0

    factor += 1 if b1["isOrganic"] == b2["isOrganic"] else 0

    factor += 1 if b1["glasswareId"] == b2["glasswareId"] else 0

    factor += 1 if b1["styleId"] == b2["styleId"] else 0

    abvDist = abs(float(b1["abv"]) - float(b2["abv"]))/MAX_ABV
    factor += 1 - abvDist

    ibuDist = abs(float(b1["ibu"]) - float(b2["ibu"]))/MAX_IBU
    factor += 1 - ibuDist

    srmDist = abs(float(b1["srmId"]) - float(b2["srmId"]))/(MAX_SRM - MIN_SRM)
    factor += 1 - srmDist

    return factor/7