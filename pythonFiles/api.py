import random
import uuid
from flask import Flask, json
from generate_recommendation import generate_recommendation
from getBeerByID import getBeerByID
from constants import *
from user import user
from generateExplenation import *

api = Flask(__name__)

#  get the beer from the given ID
@api.route('/api/beerfromid/<string:beerid>/<string:uid>', methods=['GET'])
def get_beer_from_id(beerid, uid):
  u:user = getUserById(uid)
  beer = getBeerByID(beerid)
  expl = " "
  key = u.getExplenationKey()
  if key == 0:
    expl = generateExplenation1(u,beer)
  elif key == 1:
    expl = generateExplenation2(u,beer)
  elif key == 2:
    expl = generateExplenation3(u,beer)
  return json.dumps({"name": beer["nameDisplay"], "image": beer["labels"]["medium"], "explenation":expl, "id":beerid})


#  get the next recommended beer for this person
@api.route('/api/nextbeerforuser/<string:uid>', methods=['GET'])
def get_next_beer_from_id(uid):
  u:user = getUserById(uid)
  beer = generate_recommendation(u)
  expl = " "
  key = u.getExplenationKey()
  if key == 0:
    expl = generateExplenation1(u,beer)
  elif key == 1:
    expl = generateExplenation2(u,beer)
  elif key == 2:
    expl = generateExplenation3(u,beer)
  return json.dumps({"name": beer["nameDisplay"], "image": beer["labels"]["medium"], "explenation":expl, "id":beer["id"], "beerInfo": "beerinfo"})

def getUserById(uid):
  _,_,u = users[uid]
  return u

#  get the beer list for given question
@api.route('/api/beerlistforquestion/<int:qid>', methods=['GET'])
def get_beer_list_from_qid(qid):
  res = []
  beerIdsPerQuestion = [
    ["tciJOF", "9O3QPg", "QLp4mV", "9eyUBt"],
    ["UnyhJx", "56lK12", "SThEdE", "vtbz7O"],
    ["PsFAwd", "rfgNzi","GbFY1J","1fDG93"],
    ["wsTxxX", "32d1kv","oSJfBy","dGq2Rx"],
    ["OkLgE4", "Pn9Coe", "z4k3eU","AtIsrV"]
  ]

  for i in beerIdsPerQuestion[qid]:
    rec = getBeerByID(i)
    labels = {"abv": rec["abv"], "servingTemperature": rec["servingTemperature"], "ibu": rec["ibu"], "color": rec["srm"]["hex"], "organic": "Yes" if rec["isOrganic"] == "Y" else "No"}
    res.append({"picture": rec["labels"]["icon"], "name": rec["nameDisplay"], "id": rec["id"], "labels": labels})
  return json.dumps(res)


#  get the beer list for given user
@api.route('/api/beerlistforuser/<string:uid>', methods=['GET'])
def get_beer_list_from_id(uid):
  u:user = getUserById(uid)
  res = []
  for _ in range(BEERLIST_AMOUNT):
    rec = generate_recommendation(u)
    checked = False
    while not checked:
      checked = True
      for r in res:
        if rec["id"]==r["id"]:
          rec = generate_recommendation(u)
          checked = False

    expl = " "
    key = u.getExplenationKey()
    if key == 0:
      expl = generateExplenation1(u,rec)
    elif key == 1:
      expl = generateExplenation2(u,rec)
    elif key == 2:
      expl = generateExplenation3(u,rec)
    res.append({"picture": rec["labels"]["medium"], "name": rec["nameDisplay"], "description":expl, "id": rec["id"]})
  return json.dumps(res)


#  get the list of liked beers for the user
@api.route('/api/likedbeersforuser/<string:uid>', methods=['GET'])
def get_liked_beers_from_id(uid):
  u:user = getUserById(uid)
  res = []
  for b in u.getLikedBeers():
    b = getBeerByID(b)
    res += [{"picture": b["labels"]["medium"], "name": b["nameDisplay"], "id":b["id"]}]
  return json.dumps(res)


#  like a beer
@api.route('/api/likebeer/<string:beerid>/<string:uid>', methods=['GET'])
def like_beer_from_id(beerid, uid):
  u:user = getUserById(uid)
  u.likeBeer(beerid)
  return json.dumps({})


#  dislike a beer
@api.route('/api/dislikebeer/<string:beerid>/<string:uid>', methods=['GET'])
def dislike_beer_from_id(beerid, uid):
  u = getUserById(uid)
  u.dislikeBeer(beerid)
  return json.dumps({})


# login
@api.route('/api/login/<string:uName>/<string:pWord>', methods=['GET'])
def login(uName, pWord):
  for k in users.keys():
    v = users[k]
    if v[0] == uName:
      if v[1] == pWord:
        return json.dumps({"response": True, "uid": k})
      else:
        return json.dumps({"response": False})
  return json.dumps({"response": False})


# register
@api.route('/api/register/<string:uName>/<string:pWord>', methods=['GET'])
def register(uName, pWord):
  uid = str(uuid.uuid4())
  while uid in users.keys():
    uid = str(uuid.uuid4())
  newUser = user(uid)
  newUser.setExplenationKey(random.randint(0,2))
  users[uid] = [uName, pWord, newUser]
  return json.dumps({"uid": uid})


# remove liked beer
@api.route('/api/removelikedbeer/<string:beerid>/<string:uid>', methods=['GET'])
def remove_beer_from_user(beerid, uid):
  u = getUserById(uid)
  u.removeLikedBeer(beerid)
  return json.dumps({})


if __name__ == '__main__':
    users = {} # Dict with uid -> [uName, pw, user]
    from waitress import serve
    serve(api, host="0.0.0.0", port=8080)
    # api.run(debug=True)