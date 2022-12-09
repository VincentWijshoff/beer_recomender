from flask import Flask, json

api = Flask(__name__)


#  get the beer from the given ID
@api.route('/beerfromid/<int:beerid>', methods=['GET'])
def get_beer_from_id(beerid):
  return json.dumps({"name": "name id", "image":"placeholder image", "explenation":"This is the explenation", "id":1})


#  get the next recommended beer for this person
@api.route('/nextbeerforuser/<int:uid>', methods=['GET'])
def get_next_beer_from_id(uid):
  return json.dumps({"name": "placeholder name", "image":"placeholder image", "explenation":"This is the explenation", "id":1})


#  get the beer list for given user
@api.route('/beerlistforuser/<int:uid>', methods=['GET'])
def get_beer_list_from_id(uid):
  return json.dumps([{"picture": "picture", "name": "Placeholder name", "description":"description placeholder", "id":1},
  {"picture": "picture", "name": "Placeholder name", "description":"description placeholder", "id":1},
  {"picture": "picture", "name": "Placeholder name", "description":"description placeholder", "id":1},
  {"picture": "picture", "name": "Placeholder name", "description":"description placeholder", "id":1},
  {"picture": "picture", "name": "Placeholder name", "description":"description placeholder", "id":1},
  {"picture": "picture", "name": "Placeholder name", "description":"description placeholder", "id":1}])


#  get the list of liked beers for the user
@api.route('/likedbeersforuser/<int:uid>', methods=['GET'])
def get_liked_beers_from_id(uid):
  return json.dumps([{"picture": "picture", "name": "Placeholder name", "id":1},
  {"picture": "picture", "name": "Placeholder name", "id":1},
  {"picture": "picture", "name": "Placeholder name", "id":1},
  {"picture": "picture", "name": "Placeholder name", "id":1},
  {"picture": "picture", "name": "Placeholder name", "id":1},
  {"picture": "picture", "name": "Placeholder name", "id":1}])


#  like a beer and get the next one
@api.route('/likebeer/<int:beerid>/<int:uid>', methods=['GET'])
def like_beer_from_id(beerid, uid):
  return json.dumps({"name": "name id", "image":"placeholder image", "explenation":"This is the explenation", "id":1})


if __name__ == '__main__':
    # api.run(debug=True)
    from waitress import serve
    serve(api, host="0.0.0.0", port=8080)