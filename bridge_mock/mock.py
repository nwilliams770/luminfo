import flask

app = flask.Flask(__name__)


@app.route('/api/<string:key>/lights/<int:n>/state', methods=['PUT', 'GET'])
def light_state(key, n):
    print(key, n)
    return flask.jsonify({"poop": "everyone does it"})


@app.route('/')
def root():
    return ("Hello world!", 200)


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
