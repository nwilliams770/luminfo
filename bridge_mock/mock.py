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
    colors = ["ffffff", "ef8085", "83c7d5", "4bc084", "00ffff", "945cb4", "ff8b3d", "000000"]
    import random
    num_lights = random.randrange(1, 10)
    payload = {}

    for i in range(0, num_lights + 1):
        payload[i] = random.choice(colors)

    return flask.jsonify(payload)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=os.getenv("PORT"))
