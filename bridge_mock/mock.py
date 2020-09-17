import flask
import flask_cors
import os

app = flask.Flask(__name__)
flask_cors.CORS(app)


_hue_states = {}


@app.route('/', methods=['GET'])
def root():
    return ('Hello', 200)


@app.route('/api/<string:key>/lights/<int:n>/state', methods=['PUT'])
def light_state(key, n):
    if n not in _hue_states:
        _hue_states[n] = HueState(n)

    _hue_states[n].state = flask.request.json
    return ("PUT received, chief!", 200)


@app.route('/mock_light_colors', methods=['GET'])
def mock_light_colors():
    payload = {}
    for i, hue_state in _hue_states.items():
        print("hue_state********", hue_state)
        payload[i] = hue_state.hex

    return flask.jsonify(payload)


class HueState:
    def __init__(self, i):
        self.i = i
        self.state = {}

    @property
    def state(self):
        return self._state

    @state.setter
    def state(self, state):
        self._state = state

    @property
    def hex(self):
        on = self.state['on']
        bri = float(self.state['bri']) / 255.0

        if not on:
            return '#000000'

        # convert brightness into #XXXXXX
        # get a number that's the right value, then turn it into a hex string,
        # then clean it up
        scaled_val = int(bri * 0xffffff)
        hex_str = hex(scaled_val)
        trimmed = '#' + hex_str[2:]
        return trimmed


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=os.getenv("PORT"))
