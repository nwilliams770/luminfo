import flask
import os

app = flask.Flask(__name__)

_data = {}

@app.route('/api/<string:key>/lights/<int:n>/state', methods=['PUT'])
def light_state(key, n):
    print(key, n, flask.request.data)
    _data[n] = flask.request.data
    return ("PUT received, chief!", 201)

@app.route('/mock_light_colors', methods=['GET'])
def mock_light_colors():
    # TODO: implement me
    return _data[1]['color']

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=os.getenv("PORT"))
