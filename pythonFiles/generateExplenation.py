from getBeerByID import getBeerByID
from beerBeerSimilarity import getSimilarity
from constants import *
from user import user

def generateExplenation1(u: user, beer):
    # Explenation with most similar beer already liked

    max = 0
    best = None
    beers = u.getLikedBeers()
    for b in beers:
        b = getBeerByID(b)
        s = getSimilarity(beer, b)
        if max == 0 or s > max:
            best = b
            max = s
    print(max)
    res = "We think you will like this beer because of it's similarities with " + best.get("name") + " which you have previously liked."
    return res

def generateExplenation2(u: user, beer):
    res = "Some of the qualities you might like because they are similar to what you have previously liked: "
    
    if round(u.getOrganicPref()) == 1 and beer["isOrganic"] == "Y":
        res += "\nIt is a organic beer."

    if u.getStyleIdPref(beer["styleId"]) > 0.25:
        res += "\nIt is a " + beer["style"]["shortName"]

    abvFactor = u.getAbvPref()
    abv = beer["abv"]
    abvDist = abs(abvFactor - float(abv))/MAX_ABV # Distance in [0,1]
    if abvDist < 0.3: 
         res += "\nIt has " + abv + "% alcohol"

    ibuFactor = u.getIbuPref()
    ibu = float(beer["ibu"])
    ibuDist = abs(ibuFactor - ibu)/MAX_IBU
    if ibuDist < 0.3: 
        res += "\nIt is " 
        if ibu < 20:
            res += "weakly bitter"
        elif ibu < 30:
            res += "slightly bitter"
        elif ibu < 45:
            res += "averagely bitter"
        elif ibu < 60:
            res += "strongly bitter"
        else:
            res += "very bitter"
        res += " (IBU: " + str(ibu) + ")"

    srmFactor = u.getSrmPref()
    srm = float(beer["srmId"])
    srmDist = abs(srmFactor - srm)/(MAX_SRM - MIN_SRM)
    if srmDist < 0.3: 
        res += "\nIt has a value of " + str(srm)
        for k in SRM_DICT.keys():
            if srm<k:
                res += " (" + SRM_DICT[k] + " color)"
                break
        res += " on the srm color scale. "
    return res

def generateExplenation3(u: user, beer):
    max = 0
    best = None
    beers = u.getLikedBeers()
    for b in beers:
        b = getBeerByID(b)
        s = getSimilarity(beer, b)
        if max == 0 or s > max:
            best = b
            max = s
    print(max)
    res = "We think you will like this beer because of it's similarities with " + best.get("name") + " which you have previously liked."
    res += "\nSome of the qualities you might like because they are similar to what you have previously liked: "
    
    if round(u.getOrganicPref()) == 1 and beer["isOrganic"] == "Y":
        res += "\nIt is a organic beer."

    if u.getStyleIdPref(beer["styleId"]) > 0.25:
        res += "\nIt is a " + beer["style"]["shortName"]

    abvFactor = u.getAbvPref()
    abv = beer["abv"]
    abvDist = abs(abvFactor - float(abv))/MAX_ABV # Distance in [0,1]
    if abvDist < 0.3: 
         res += "\nIt has " + abv + "% alcohol"

    ibuFactor = u.getIbuPref()
    ibu = float(beer["ibu"])
    ibuDist = abs(ibuFactor - ibu)/MAX_IBU
    if ibuDist < 0.3: 
        res += "\nIt is " 
        if ibu < 20:
            res += "weakly bitter"
        elif ibu < 30:
            res += "slightly bitter"
        elif ibu < 45:
            res += "averagely bitter"
        elif ibu < 60:
            res += "strongly bitter"
        else:
            res += "very bitter"
        res += " (IBU: " + str(ibu) + ")"

    srmFactor = u.getSrmPref()
    srm = float(beer["srmId"])
    srmDist = abs(srmFactor - srm)/(MAX_SRM - MIN_SRM)
    if srmDist < 0.3: 
        res += "\nIt has a value of " + str(srm)
        for k in SRM_DICT.keys():
            if srm<k:
                res += " (" + SRM_DICT[k] + " color)"
                break
        res += " on the srm color scale. "
    return res
