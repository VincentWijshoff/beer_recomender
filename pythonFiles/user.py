class user:
    """Represents an application user, still needs work"""
    # Preference: 
    #   - Organic: 1/0
    #   - glassWareID: id in range 0 -> 10, 13->14 OR None
    #   - styleId: id in range 45 -> 92 or 159
    #   - servingTemperature: Cold, Cool, Cellar, Warm OR None
    #   - abv: alcoholperc, tss 0,0 en 19,4 OR None 
    #   - ibu: bitterheid, schaal van 0 tot 120
    #   - srmId: kleur, schaal van 1 -> 41
    def __init__(self, id, preferences: dict):
        self.id = id                        # User ID
        self.preferences = preferences      # User preferences
        self.amount = 0                     # Amount of preferences stored  
    
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














