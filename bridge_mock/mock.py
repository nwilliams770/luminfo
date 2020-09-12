import flask
import flask_cors
import os

app = flask.Flask(__name__)
flask_cors.CORS(app)


_data = {}

@app.route('/api/<string:key>/lights/<int:n>/state', methods=['PUT'])
def light_state(key, n):
    print(key, n, flask.request.data)
    _data[n] = flask.request.data
    return ("PUT received, chief!", 200)

@app.route('/', methods=['GET'])
def root():
    return ('Hello', 200)

@app.route('/mock_light_colors', methods=['GET'])
def mock_light_colors():
    # TODO: implement me
    # return _data[1]['color']
    colors = ["#ffffff", "red", "lightblue", "green", "cyan", "purple", "orange", "black"]
    import random
    c1 = random.choice(colors)
    c2 = random.choice(colors)
    return flask.jsonify({'color1': c1, 'color2': c2})

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=os.getenv("PORT"))
