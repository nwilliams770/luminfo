import flask
import os

app = flask.Flask(__name__)

@app.route('/api/<string:key>/lights/<int:n>/state', methods=['PUT'])
def light_state(key, n):
    print(key, n, flask.request.data)
    return ("PUT received, chief!", 200)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=os.getenv("PORT"))
