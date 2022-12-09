from flask import Flask, json
from generate_recommendation import generate_recommendation
from getBeerByID import getBeerByID
from user import user

api = Flask(__name__)


#  get the beer from the given ID
@api.route('/beerfromid/<beerid>', methods=['GET'])
def get_beer_from_id(beerid):
  beer = getBeerByID(beerid)
  return json.dumps({"name": beer["nameDisplay"], "image": beer["labels"]["large"], "explenation":"This is the explenation", "id":1})


#  get the next recommended beer for this person
@api.route('/nextbeerforuser/<int:uid>', methods=['GET'])
def get_next_beer_from_id(uid):
  u = getUserById(uid)
  beer = generate_recommendation(u)
  return json.dumps({"name": beer["nameDisplay"], "image": beer["labels"]["large"], "explenation":"This is the explenation", "id":1})

def getUserById(uid):
  # TODO: replace
  return users[0]

#  get the beer list for given user
@api.route('/beerlistforuser/<int:uid>', methods=['GET'])
def get_beer_list_from_id(uid):
  # TODO find way to generate list call it here
  return json.dumps([{"picture": "picture", "name": "Placeholder name", "description":"description placeholder", "id":1},
  {"picture": "picture", "name": "Placeholder name", "description":"description placeholder", "id":1},
  {"picture": "picture", "name": "Placeholder name", "description":"description placeholder", "id":1},
  {"picture": "picture", "name": "Placeholder name", "description":"description placeholder", "id":1},
  {"picture": "picture", "name": "Placeholder name", "description":"description placeholder", "id":1},
  {"picture": "picture", "name": "Placeholder name", "description":"description placeholder", "id":1}])


#  get the list of liked beers for the user
@api.route('/likedbeersforuser/<int:uid>', methods=['GET'])
def get_liked_beers_from_id(uid):
  # TODO: Add list of liked beer ids to user & return it here
  return json.dumps([{"picture": "picture", "name": "Placeholder name", "id":1},
  {"picture": "picture", "name": "Placeholder name", "id":1},
  {"picture": "picture", "name": "Placeholder name", "id":1},
  {"picture": "picture", "name": "Placeholder name", "id":1},
  {"picture": "picture", "name": "Placeholder name", "id":1},
  {"picture": "picture", "name": "Placeholder name", "id":1}])


#  like a beer and get the next one
@api.route('/likebeer/<int:beerid>/<int:uid>', methods=['GET'])
def like_beer_from_id(beerid, uid):
  # TODO: Add list of liked beer ids to user &  add this beerid to it
  u = getUserById(uid)
  beer = getBeerByID(beerid)
  u.addPreference(beer)
  return json.dumps({"name": "name id", "image":"placeholder image", "explenation":"This is the explenation", "id":1})


if __name__ == '__main__':
    # api.run(debug=True)
    # TODO remove
    users = []
    u1 = user(1)
    users.append(u1)
    u1.addPreference(getBeerByID("s8rdpK"))
    from waitress import serve
    serve(api, host="0.0.0.0", port=8080)