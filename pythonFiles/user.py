class user:
    """Represents an application user, still needs work"""
    # TODO 
    def __init__(self, id, beerIDs, ratings):
        self.id = id
        self.beerIDs = beerIDs
        self.ratings = ratings
    
    def addRating(self, beerID, rating):
        self.beerIDs += [beerID] 
        self.ratings += [rating] 
