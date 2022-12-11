import uuid
from flask import Flask, json
from generate_recommendation import generate_recommendation
from getBeerByID import getBeerByID
from constants import *
from user import user

api = Flask(__name__)


#  get the beer from the given ID
@api.route('/beerfromid/<string:beerid>', methods=['GET'])
def get_beer_from_id(beerid):
  beer = getBeerByID(beerid)
  return json.dumps({"name": beer["nameDisplay"], "image": beer["labels"]["large"], "explenation":"This is the explenation", "id":1})


#  get the next recommended beer for this person
@api.route('/nextbeerforuser/<string:uid>', methods=['GET'])
def get_next_beer_from_id(uid):
  u = getUserById(uid)
  beer = generate_recommendation(u)
  return json.dumps({"name": beer["nameDisplay"], "image": beer["labels"]["large"], "explenation":"This is the explenation", "id":beer["id"]})

def getUserById(uid):
  _,_,u = users[uid]
  return u

#  get the beer list for given user
@api.route('/beerlistforuser/<string:uid>', methods=['GET'])
def get_beer_list_from_id(uid):
  u:user = getUserById(uid)
  res = []
  for _ in range(BEERLIST_AMOUNT):
    rec = generate_recommendation(u)
    res.append({"picture": rec["labels"]["large"], "name": rec["nameDisplay"], "description":"description placeholder", "id": rec["id"]})
  return json.dumps(res)


#  get the list of liked beers for the user
@api.route('/likedbeersforuser/<string:uid>', methods=['GET'])
def get_liked_beers_from_id(uid):
  u:user = getUserById(uid)
  res = []
  for b in u.getLikedBeers():
    b = getBeerByID(b)
    res += [{"picture": b["labels"]["large"], "name": b["nameDisplay"], "id":b["id"]}]
  return json.dumps(res)


#  like a beer
@api.route('/likebeer/<string:beerid>/<string:uid>', methods=['GET'])
def like_beer_from_id(beerid, uid):
  u:user = getUserById(uid)
  u.likeBeer(beerid)
  return json.dumps({})


#  dislike a beer
@api.route('/dislikebeer/<string:beerid>/<string:uid>', methods=['GET'])
def dislike_beer_from_id(beerid, uid):
  u = getUserById(uid)
  u.dislikeBeer(beerid)
  return json.dumps({})


# login
@api.route('/login/<string:uName>/<string:pWord>', methods=['GET'])
def login(uName, pWord):
  for k in users.keys():
    v = users[k]
    if v[0] == uName:
      if v[1] == pWord:
        return json.dumps({"response": True, "uid": k})
      else:
        return json.dumps({"response": False, "uid": 1}) # TODO: Show that pWord is wrong
  return json.dumps({"response": False, "uid": 1}) # TODO: Show user does not exist


# register
@api.route('/register/<string:uName>/<string:pWord>', methods=['GET'])
def register(uName, pWord):
  uid = str(uuid.uuid4())
  while uid in users.keys():
    uid = str(uuid.uuid4())
  users[uid] = [uName, pWord, user(uid)]
  return json.dumps({"uid": uid})


# remove liked beer
@api.route('/removelikedbeer/<string:beerid>/<string:uid>', methods=['GET'])
def remove_beer_from_user(beerid, uid):
  u = getUserById(uid)
  u.removeLikedBeer(beerid)
  return json.dumps({})


if __name__ == '__main__':
    users = {} # Dict with uid -> [uName, pw, user]
    from waitress import serve
    serve(api, host="0.0.0.0", port=8080)
    # api.run(debug=True)