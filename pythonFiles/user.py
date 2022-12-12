from constants import *
from getBeerByID import getBeerByID


class user:
    """Represents an application user, still needs work"""
    # Preference: 
    #   - organic: 1/0
    #   - glasswareId: id in range 0 -> 10, 13->14 OR None
    #   - styleId: id in range 45 -> 92 or 159
    #   - servingTemperature: Cold, Cool, Cellar, Warm OR None
    #   - abv: alcoholperc, tss 0,0 en 19,4 OR None 
    #   - ibu: bitterheid, schaal van 0 tot 120
    #   - srmId: kleur, schaal van 1 -> 41
    def __init__(self, id, preferences: dict = {}):
        self.id = id                            # User ID
        self.preferences = preferences.copy()   # User preferences
        self.amount = 0                         # Amount of preferences stored
        self.likedBeers = []                    # Beers the user has indicated they like
        self.dislikedBeers = []                 # Beers the user has indicated they don't like 
    
    def emptyPreferece(self):
        return len(self.preferences.keys()) == 0

    def getLikedBeers(self):
        ''' Get this users liked beers'''
        return self.likedBeers

    def likeBeer(self, beerId):
        ''' Add a beer to liked beers'''
        b = getBeerByID(beerId)
        self.addPreference(b)
        self.likedBeers.append(beerId)

    def dislikeBeer(self, beerId):
        ''' Add a beer to disliked beers '''
        self.dislikedBeers.append(beerId)

    def removeLikedBeer(self, beerId):
        '''Remove the beer with beerId from liked beers if it is in there'''
        if beerId in self.likedBeers:
            self.likedBeers.remove(beerId)

    def hasSeen(self,beerId):
        '''Find out if this user has already seen and liked/disliked this beer'''
        return beerId in self.likeBeer or beerId in self.dislikedBeers

    def addPreference(self, preference: dict):
        '''Add single preference to user preferences, assumes none of the values are None'''
        self.amount += 1

        o = self.preferences.get("organic")
        if o is None:
            self.preferences["organic"] = 1 if preference["isOrganic"] == "Y" else 0
        elif preference["isOrganic"] == "Y":
            self.preferences["organic"] += 1

        g = self.preferences.get("glasswareId")
        if g is None:
            self.preferences["glasswareId"] = {}
        g = self.preferences["glasswareId"].get(preference["glasswareId"])
        if g is None or g == 0:
            self.preferences["glasswareId"][preference["glasswareId"]] = 1
        else:
            self.preferences["glasswareId"][preference["glasswareId"]] += 1

        s = self.preferences.get("styleId")
        if s is None:
            self.preferences["styleId"] = {}
        s = self.preferences["styleId"].get(preference["styleId"])
        if s is None or s == 0:
            self.preferences["styleId"][preference["styleId"]] = 1
        else:
            self.preferences["styleId"][preference["styleId"]] += 1

        t = self.preferences.get("servingTemperature")
        if t is None:
            self.preferences["servingTemperature"] = {}
        t = self.preferences["servingTemperature"].get(preference["servingTemperature"])
        if t is None or t == 0:
            self.preferences["servingTemperature"][preference["servingTemperature"]] = 1
        else:
            self.preferences["servingTemperature"][preference["servingTemperature"]] += 1

        a = self.preferences.get("abv")
        if a is None:
            self.preferences["abv"] = float(preference["abv"])
        else:
            self.preferences["abv"] += float(preference["abv"])

        b = self.preferences.get("ibu")
        if b is None:
            self.preferences["ibu"] = float(preference["ibu"])
        else:
            self.preferences["ibu"] += float(preference["ibu"])

        c = self.preferences.get("srmId")
        if c is None:
            self.preferences["srmId"] = int(preference["srmId"])
        else:
            self.preferences["srmId"] += int(preference["srmId"])

    def getOrganicPref(self):
        o = self.preferences.get("organic")
        if o is None:
            return 0.5
        else:
            return o/self.amount

    def getGlassWarePref(self, id):
        g = self.preferences.get("glasswareId")
        if g is None:
            return 0.5
        else:
            g = g.get(id)
            if g is None:
                return 0
            else:
                return g/self.amount

    def getStyleIdPref(self, id):
        g = self.preferences.get("styleId")
        if g is None:
            return 0.5
        else:
            g = g.get(id)
            if g is None:
                return 0
            else:
                return g/self.amount

    def getServingTempPref(self, id):
        g = self.preferences.get("servingTemperature")
        if g is None:
            return 0.5
        else:
            g = g.get(id)
            if g is None:
                return 0
            else:
                return g/self.amount

    def getAbvPref(self):
        o = self.preferences.get("abv")
        if o is None:
            return MAX_ABV/2
        else:
            return o/self.amount

    def getIbuPref(self):
        o = self.preferences.get("ibu")
        if o is None:
            return MAX_IBU/2
        else:
            return o/self.amount

    def getSrmPref(self):
        o = self.preferences.get("srmId")
        if o is None:
            return (MAX_SRM-MIN_SRM)/2
        else:
            return o/self.amount


