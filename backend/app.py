from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from elasticsearch import Elasticsearch
from bson.json_util import dumps
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)

# Load MongoDB Atlas connection string from .env file
load_dotenv()
mongo_uri = os.getenv("MONGO_URI")

client = MongoClient(mongo_uri)

# Select the database and collection you want to use
db = client["movies_db"]
collection = db["movie"]

# ElasticSearch connection
es = Elasticsearch(os.getenv("ELASTIC_URI"))

@app.route('/', methods=['GET'])
def get_movies():
    # Get all documents from MongoDB
    documents = collection.find()
    response = dumps(documents)
    return response, 200

@app.route('/load_movies', methods=['GET'])
def load_movies():
    # Get all documents from MongoDB
    documents = collection.find()
    # Prepare data for bulk indexing
    for document in documents:
        # Convert ObjectId to string
        document.pop('_id',None)
        es.index(index='movies_index', body=document)

    return 'Data loaded successfully'


# Search documents in ElasticSearch
@app.route('/search_movies', methods=['POST'])
def search_movies():
    data = request.json
    query = {
        "query": {
            "multi_match": {
                "query": data['query'],
                "fields": ["title^3", "description^2", "genre^2", "date"]
            }
        }
    }
    result = es.search(index='movies_index', body=query)
    hits = result['hits']['hits']
    response = [{'id': hit['_id'], 'title': hit['_source']['title'], 'description': hit['_source']['description']} for hit in hits]
    return jsonify({'hits': response}), 200

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)
