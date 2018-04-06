
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

			var camera, scene, renderer;
			var geometry, material, mesh;

			function setup() {

				var W = window.innerWidth, H = window.innerHeight;
				renderer = new THREE.WebGLRenderer();
				renderer.setSize( W, H );
				document.body.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
				camera.position.z = 1000;

				scene = new THREE.Scene();


				// paste your code from the geometryGUI here
				geometry = new THREE.SphereGeometry(150, 100, 100);
material = new THREE.MeshPhongMaterial({shading: THREE.SmoothShading, color: 0xca1919, ambient: 0x000000, emissive: 0xe6e51b, specular: 0x000000, shininess: -30, side: THREE.DoubleSide, wireframe: true, wireframeLinewidth: 1});
mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 200;
mesh.rotation.y = 4.59;
mesh.rotation.z = 3.44;
scene.add(mesh);


			}

			function draw() {

				requestAnimationFrame( draw );

				// experiment with code from the snippets menu here
				mesh.rotation.x = Date.now() * 0.00005;
				mesh.rotation.y = Date.now() * 0.00002;
				mesh.rotation.z = Date.now() * 0.0001;
				renderer.render( scene, camera );

			}

			setup();
			draw();
