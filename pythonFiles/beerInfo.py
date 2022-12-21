from constants import SRM_DICT


# def generateInfo(beer):
#     res = "Organic: "
#     res += "Yes" if beer["isOrganic"]=="Y" else "No"
#     res += "\nStyle: " + beer["style"]["shortName"]
#     if beer["glass"]["name"] is not None: res += "\nServed in: " + beer["glass"]["name"]
#     res += "\nAlcohol content: " + beer["abv"] + "%"
#     res += "\nBitterness (IBU): "
#     ibu = float(beer["ibu"])
#     if ibu < 20:
#         res += "Weakly bitter"
#     elif ibu < 30:
#         res += "Slightly bitter"
#     elif ibu < 45:
#         res += "Averagely bitter"
#     elif ibu < 60:
#         res += "Strongly bitter"
#     else:
#         res += "Very bitter"
#     res += " (" + beer["ibu"] + ")"

#     res += "\nColor: "
#     srm = float(beer["srmId"])
#     for k in SRM_DICT.keys():
#         if srm<k:
#             res += SRM_DICT[k]
#             break
    
#     st = beer.get("servingTemperatureDisplay")
#     if st is not None: res += "\nServing temperature: " + st

#     fp = beer.get("foodPairings")
#     if fp is not None: res += "\nFood pairings: " + fp

#     res += "\nDescription:\n" + beer["description"]

#     return res


def generateInfo(beer):
    res = []
    el = ["Organic: "]
    el.append("Yes" if beer["isOrganic"]=="Y" else "No")
    res.append(el)

    el = ["Style: ", beer["style"]["shortName"]]
    res.append(el)


    # res += "\nStyle: " + beer["style"]["shortName"]

    if beer["glass"]["name"] is not None: 
        el = ["Served in: ", beer["glass"]["name"]]
        res.append(el)

    el = ["Alcohol content: ", beer["abv"]+"%"]
    res.append(el)

    el = ["Bitterness (IBU): "]
    ibu = float(beer["ibu"])
    if ibu < 20:
        el.append("Weakly bitter (" + beer["ibu"] + ")")
    elif ibu < 30:
        el.append("Slightly bitter (" + beer["ibu"] + ")")
    elif ibu < 45:
        el.append("Averagely bitter (" + beer["ibu"] + ")")
    elif ibu < 60:
        el.append("Strongly bitter (" + beer["ibu"] + ")")
    else:
        el.append("Very bitter (" + beer["ibu"] + ")")
    # res += " (" + beer["ibu"] + ")"
    res.append(el)

    srm = float(beer["srmId"])
    for k in SRM_DICT.keys():
        if srm<k:
            res.append(["Color: ", SRM_DICT[k]])
            break
    
    st = beer.get("servingTemperatureDisplay")
    if st is not None: 
        res.append(["Serving temperature: ", st])

    fp = beer.get("foodPairings")
    if fp is not None: 
        res.append(["Food pairings: ", fp])

    res.append(["Description:\n", beer["description"]])

    return res