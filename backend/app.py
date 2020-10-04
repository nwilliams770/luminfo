import yaml
import requests
import time
import os
import flask
import flask_cors
import os

host = os.getenv("BRIDGE_HOST")
port = os.getenv("BRIDGE_PORT")
base_url = f"http://{host}:{port}/api/8HHfyLAiPIn148hxtePbuIHi-KJVMg8eHu373-sb"

app = flask.Flask(__name__)
flask_cors.CORS(app)

sample_settings_state = {"ambient": {"test": "test"}, "notifications": {"test": "test"}}

@app.route('/settings', methods=['GET'])
def settings_state():
    return flask.jsonify(sample_settings_state)

def main():
    i = 0
    while True:
        set_lights_to_bin(i)
        i += 1
        time.sleep(0.1)


def set_lights_to_bin(i):
    # ones place
    l1 = (i % 2 == 1)
    # twos place
    # Shift all bits over 1 place, then just mod 2 | gets us second bit
    # 5 (0b101) | shifted 0b10 | % 2 => 0 | 0 != 1 => False
    l2 = ((i >> 1) % 2 == 1)

    response = requests.put(f'{base_url}/lights/1/state', json={'on': l1, "transitiontime": 0, "bri": 254}, timeout=3.0)
    response.raise_for_status()
    response = requests.put(f'{base_url}/lights/2/state', json={'on': l2, "transitiontime": 0, "bri": 254}, timeout=3.0)
    response.raise_for_status()


if __name__ == "__main__":
    # main()
    app.debug = True
    app.run(host='0.0.0.0', port=os.getenv("PORT"))