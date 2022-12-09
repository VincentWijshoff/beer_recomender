from constants import *
from user import user


def getSimilarity(u:user, rating_data):
    """Generate similarity number for user profile and beer"""
    # TODO: possibly add weights to factors? 
    factor = 0

    organicFactor = u.getOrganicPref()
    factor += organicFactor if rating_data["isOrganic"] == "Y" else (1-organicFactor)

    factor += u.getGlassWarePref(rating_data["glasswareId"])

    factor += u.getStyleIdPref(rating_data["styleId"])

    factor += u.getServingTempPref(rating_data["servingTemperature"])

    abvFactor = u.getAbvPref()
    abvDist = abs(abvFactor - float(rating_data["abv"]))/MAX_ABV # Distance in [0,1]
    factor += 1 - abvDist 

    ibuFactor = u.getIbuPref()
    ibuDist = abs(ibuFactor - float(rating_data["ibu"]))/MAX_IBU
    factor += 1 - ibuDist

    srmFactor = u.getSrmPref()
    srmDist = abs(srmFactor - float(rating_data["srmId"]))/(MAX_SRM - MIN_SRM)
    factor += 1 - srmDist

    return factor/7