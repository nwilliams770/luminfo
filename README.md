# luminfo
username: "8HHfyLAiPIn148hxtePbuIHi-KJVMg8eHu373-sb"
Todo:
* Read about Philips Hue technical limitations and SDK [here](https://developers.meethue.com/develop/get-started-2/)
* Technical demo - `v0` - basic functionality
    - turning light off and on
    - just being able to say hello to it
* `v1` system architecture and desired functionality, starting with but not limited to:
    - weather-responsive
    - time of day responsive, sunrise, sunset, night time, day time
    - email alert
* Implement and deploy `v1`


TO-DOs:
* Settings App
    - Color mode
    - Blinking mode
    - Settings persistent storage, start with local file system
    - find lightweight document DB/store
    - UI setup:
      - User_Container -- consumes all of redux store, need to write mapStateToProps
      - Accordion -- manages own UI state
      - Collapse -- get props from Accordion for Header, manages UI state to add class to icon for > or ^ icon
      - Toggle -- gets props from Accodion
      - Setting -- Toggle renders a list of Setting components, each managing it's UI state (maybe not) for checkbox, checkbox dispatches action to update
      - SettingPopUp -- accepts config list from Setting dictating what Input components are needed, dispatches action
* Bridge mock
    - Make thread safe
    - Support colors
* Mock Hue
    - Dockerize
    - Research library for rate limiting // not using setTimeout
* Upgrade build system to docker-compose
* .dockerignore
* Document, review, add comments
