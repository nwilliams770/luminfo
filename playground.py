""" Horsing Around with Hue Lights """

import requests
import time

base_url = "http://192.168.1.10/api/8HHfyLAiPIn148hxtePbuIHi-KJVMg8eHu373-sb"

def main():
    i = 0

    while True:
        set_lights_to_bin(i)
        i += 1
        # time.sleep(0.1)

def set_lights_to_bin(i):
    print(i)
    # ones place
    l1 = (i % 2 == 1)
    # twos place
    # Shift all bits over 1 place, then just mod 2 | gets us second bit
    # 5 (0b101) | shifted 0b10 | % 2 => 0 | 0 != 1 => False
    l2 = ((i >> 1) % 2 == 1)

    response = requests.put(f'{base_url}/lights/1/state', json={'on': l1, "transitiontime": 0, "bri": 254})
    # response.raise_for_status()
    response = requests.put(f'{base_url}/lights/2/state', json={'on': l2, "transitiontime": 0, "bri": 254})
    # response.raise_for_status()


if __name__ == "__main__":
    main()
