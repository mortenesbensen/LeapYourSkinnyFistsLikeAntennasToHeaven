// Always position hands pointing upwards
var rotation = new THREE.Quaternion;
rotation.setFromEuler(new THREE.Euler(Math.PI / 3, 0, 0));
  
window.controller = controller = new Leap.Controller;

controller.use('handHold').use('riggedHand', {
    checkWebGL: true,
	rotation: rotation,
  }).use('playback', {
    recording: 'confidence2-49fps.json.lz',
    autoPlay: true,
    pauseOnHand: true
  }).connect();

