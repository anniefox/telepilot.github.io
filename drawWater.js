
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

			var hash = document.location.hash.substr( 1 );
			if ( hash ) hash = parseInt( hash, 0 );

			// Texture width for simulation
			var WIDTH = hash || 128;
			var NUM_TEXELS = WIDTH * WIDTH ;

			// Water size in system units
			var BOUNDS = 512;
			var BOUNDS_HALF = BOUNDS * 0.5;

			var container, stats;
			var camera, scene, renderer, controls;
			var mouseMoved = false;
			var mouseCoords = new THREE.Vector2();
			var raycaster = new THREE.Raycaster();
			var objects = [];
			var geometry;
			var waterMesh;
			var meshRay;
			var gpuCompute;
			var heightmapVariable;
			var waterUniforms;
			var smoothShader;
			var camPosZ = 0
			var simplex = new SimplexNoise();

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			document.getElementById( 'waterSize' ).innerText = WIDTH + ' x ' + WIDTH;

			function change(n) {
				location.hash = n;
				location.reload();
				return false;
			}


			var options = '';
			for ( var i = 4; i < 10; i++ ) {
				var j = Math.pow( 2, i );
				options += '<a href="#" onclick="return change(' + j + ')">' + j + 'x' + j + '</a> ';
			}
			document.getElementById('options').innerHTML = options;

			init();
			animate();


			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 85, window.innerWidth / window.innerHeight, 1, 3000 );
				camera.position.set( 0, 480, 1050 );
				scene = new THREE.Scene();



				var sun = new THREE.DirectionalLight( 0xFFFFFF, 0.6 );
				sun.position.set( 300, 400, 175 );
				scene.add( sun );

				var sun2 = new THREE.DirectionalLight( 0xf5fffa, 0.6 );
				sun2.position.set( -100, 350, -200 );
				scene.add( sun2 );

				var sun3 = new THREE.DirectionalLight( 0xf5fffa, 0.6 );
				sun3.position.set( -100, -100, 200 );
				scene.add( sun3 );


				renderer = new THREE.WebGLRenderer( {alpha: true});
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				controls = new THREE.OrbitControls( camera, renderer.domElement );
				controls.enableDampning = true;
				controls.minDistance = 400;
				controls.maxDistance = 1500




				var radius = 60;
				var segments = 50;
				var rings = 30;
				var gRadius = 0.1;
				var gSegments = 2;
				var gRings = 30;

				var cubeGeometry = new THREE.SphereGeometry(radius, segments, rings);
				var cubeMaterial = new THREE.MeshBasicMaterial({
				  color: 0xa878b9
					,
				  wireframe: true
				});
				var gravityGeometry = new THREE.SphereGeometry(gRadius, gSegments, gRings);
				var gravityMaterial = new THREE.MeshBasicMaterial({

				});

				var centreOfGravity = new THREE.Mesh( gravityGeometry, gravityMaterial);

				scene.add( centreOfGravity );
				centreOfGravity.position.y = -10;
				var sunPivot = new THREE.Object3D();
				centreOfGravity.add( sunPivot );


				var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
				cube.position.z = 500;
				cube.position.y = 550;
				var zp = 500;
				var yp = 550;
				var xp = 0;
				cube.orbPos = { z: 0, y: 0, x:0}
				sunPivot.orb = {y: 0.01}

				sunPivot.add( cube );
				objects.push( cube );
				var loader2 = new THREE.JSONLoader();
				loader2.load('newcowmilk.json', handle_load2);

				function handle_load2(geometry, materials2) {
					var materials2 = new THREE.MeshBasicMaterial({
					  color: 0x000000,


					})
					var mesh2 = new THREE.Mesh(geometry, materials2)
					scene.add(mesh2);

					mesh2.position.z = -20;

					mesh2.position.x = 10;
					mesh2.scale.set(30,30,30)
				}
				var loader = new THREE.JSONLoader();
				loader.load('milkRaid.json', handle_load);

				function handle_load(geometry, materials) {
					var materials = new THREE.MeshPhongMaterial({
					  color: 0xa878b9,
						shininess: 200,

					})
					var mesh = new THREE.Mesh(geometry, materials)
					scene.add(mesh);
					mesh.position.z = -140;
					mesh.position.y = -240;
					mesh.position.x = -170

					mesh.scale.set(1.15,1.15,1.15)
				}

					var starsGeometry = new THREE.Geometry();

for ( var i = 0; i < 10000; i ++ ) {

	var star = new THREE.Vector3();
	star.x = THREE.Math.randFloatSpread( 2400 );
	star.y = THREE.Math.randFloatSpread( 2400 );
	star.z = THREE.Math.randFloatSpread( 2400 );

	starsGeometry.vertices.push( star );

}

var starsMaterial = new THREE.PointsMaterial( { color: 0xFFFFFFF } );

var starField = new THREE.Points( starsGeometry, starsMaterial );

scene.add( starField );

// var dragControls = new THREE.DragControls( objects, camera, renderer.domElement );
// 	var clicked = true;
// 	dragControls.addEventListener( 'dragstart', function ( event ) { controls.enabled = f;
// 		clicked = false;
// 	cube.orbPos.z -= 1; } )
// 	dragControls.addEventListener( 'dragend', function ( event ) { controls.enabled = false;
//
//
// 	 } )




var i = 0;
//
// if (controls.enabled === false) {
//
// 	sunPivot.applyMatrix()
//
//
// }
document.addEventListener("keydown", onDocumentKeyDown1, false);
function onDocumentKeyDown1(event) {
if (event.keyCode === 69 ) {

if (disabled) {
 controls.minDistance = 48;
 controls.maxDistance = 4800;
camera.position.set( 0, 480, 1050 );
controls.enablePan = false;
controls.enableRotate = false;
disabled = false
console.log(disabled)
}  else {
	controls.minDistance = 400;
  controls.maxDistance = 1500;
controls.enablePan = true;
controls.enableRotate = true;
disabled = true
console.log(disabled)
}}}
sunPivot.rotation.y = 0;
	var accumilated
	var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var disabled = true
function onMouseMove( event ) {

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}
				var animate1 = function() {
				  requestAnimationFrame(animate1);

					 // if(clicked) {
						sunPivot.orb = {y: 0.01}
						sunPivot.rotation.y += sunPivot.orb.y;

					  accumilated = 0;
						accumilated += sunPivot.rotation.y

					// } else
					// {
					// }
					starField.rotation.y += 0.001
					// crazy shite
	// 				raycaster.setFromCamera(mouse, camera)
	// 				var intersects = raycaster.intersectObjects( sunPivot.children )
	// 				for ( var i = 0; i < intersects.length; i++ ) {
	//
	// 	intersects[ i ].recursive.material.color.set( 0xff0000 * Math.random());
	//
	// }



					cube.position.z += cube.orbPos.z
					cube.position.y += cube.orbPos.y
					if (!disabled && camera.position.z <= controls.minDistance) {
								camera.position.z = controls.maxDistance - 150
								camera.position.y = 1780}
					  if (!disabled && camera.position.z >= (controls.maxDistance)) {
						camera.position.z = controls.minDistance
						camera.position.y = 280
					}

					if ((cube.position.z <= 0)) {
						cube.position.z = 0;
						sunPivot.rotation.y = 0;
						cube.orbPos.y -= i
						setInterval(function(){ i += 0.0098 }, 300);
						if (cube.scale.y < 20) {
								cube.scale.set(1 + (i /50),1 + i /50,1 + i/50)
						}
						if (cube.position.y <= 0) {
								cube.material.color.setHex( 0xa878b9 * (i+1) );
						}

					}



					if ((cube.position.y <= -50 && cube.position.z <= 0)) {
						cube.position.y = -50;
						cube.orbPos.y = 0;

					}
					cube.rotation.x += 0.009;
				 	cube.rotation.y += 0.001;
				 	cube.rotation.z += 0.001;
controls.update()

				  // renderer.render(scene, camera);
				}

				animate1();

				document.addEventListener("keydown", onDocumentKeyDown, false);
				function onDocumentKeyDown(event) {
				if (event.keyCode === 71 ) {
				cube.orbPos.z -= 1;

			}}


		// if (cube.position.y <= 400 ) {
		// cube.orbPos.z += -1;
		//
		// }


				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				document.addEventListener( 'keydown', function( event ) {

					// W Pressed: Toggle wireframe
					if ( event.keyCode === 87 ) {

						waterMesh.material.wireframe = ! waterMesh.material.wireframe;
						waterMesh.material.needsUpdate = true;

					}

				} , false );


				window.addEventListener( 'resize', onWindowResize, false );

				var gui = new dat.GUI();

				var effectController = {
					mouseSize: 10.0,
					viscosity: 0.008
				};

				var valuesChanger = function() {

					heightmapVariable.material.uniforms.mouseSize.value = effectController.mouseSize;
					heightmapVariable.material.uniforms.viscosityConstant.value = effectController.viscosity;

				};

				gui.add( effectController, "mouseSize", 1.0, 100.0, 1.0 ).onChange( valuesChanger );
				gui.add( effectController, "viscosity", 0.0, 0.1, 0.001 ).onChange( valuesChanger );
				var buttonSmooth = {
				    smoothWater: function() {
					smoothWater();
				    }
				};
				gui.add( buttonSmooth, 'smoothWater' );


				initWater();

				valuesChanger();

			}


			function initWater() {

				var materialColor = 0xFFFFFF;

				var geometry = new THREE.PlaneBufferGeometry( BOUNDS, BOUNDS, WIDTH - 1, WIDTH -1 );

				// material: make a ShaderMaterial clone of MeshPhongMaterial, with customized vertex shader
				var material = new THREE.ShaderMaterial( {
					uniforms: THREE.UniformsUtils.merge( [
						THREE.ShaderLib[ 'phong' ].uniforms,
						{
							heightmap: { value: null }
						}
					] ),
					vertexShader: document.getElementById( 'waterVertexShader' ).textContent,
					fragmentShader: THREE.ShaderChunk[ 'meshphong_frag' ]

				} );

				material.lights = true;

				// Material attributes from MeshPhongMaterial
				material.color = new THREE.Color( materialColor );
				material.specular = new THREE.Color( 0xFFFFFF );
				material.shininess = 50;

				// Sets the uniforms with the material values
				material.uniforms.diffuse.value = material.color;
				material.uniforms.specular.value = material.specular;
				material.uniforms.shininess.value = Math.max( material.shininess, 1e-4 );
				material.uniforms.opacity.value = material.opacity;

				// Defines
				material.defines.WIDTH = WIDTH.toFixed( 1 );
				material.defines.BOUNDS = BOUNDS.toFixed( 1 );

				waterUniforms = material.uniforms;

				waterMesh = new THREE.Mesh( geometry, material );
				waterMesh.rotation.x = - Math.PI / 2;
				waterMesh.matrixAutoUpdate = false;
				waterMesh.updateMatrix();


				scene.add( waterMesh );

				// Mesh just for mouse raycasting
				var geometryRay = new THREE.PlaneBufferGeometry( BOUNDS, BOUNDS, 1, 1 );
				meshRay = new THREE.Mesh( geometryRay, new THREE.MeshBasicMaterial( { color: 0xFFFFFF, visible: false } ) );
				meshRay.rotation.x = - Math.PI / 2;
				meshRay.matrixAutoUpdate = false;
				meshRay.updateMatrix();
				scene.add( meshRay );


				// Creates the gpu computation class and sets it up

				gpuCompute = new GPUComputationRenderer( WIDTH, WIDTH, renderer );

				var heightmap0 = gpuCompute.createTexture();

				fillTexture( heightmap0 );

				heightmapVariable = gpuCompute.addVariable( "heightmap", document.getElementById( 'heightmapFragmentShader' ).textContent, heightmap0 );

				gpuCompute.setVariableDependencies( heightmapVariable, [ heightmapVariable ] );

				heightmapVariable.material.uniforms.mousePos = { value: new THREE.Vector2( 10000, 10000 ) };
				heightmapVariable.material.uniforms.mouseSize = { value: 20.0 };
				heightmapVariable.material.uniforms.viscosityConstant = { value: 0.03 };
				heightmapVariable.material.defines.BOUNDS = BOUNDS.toFixed( 1 );

				var error = gpuCompute.init();
				if ( error !== null ) {
				    console.error( error );
				}

				// Create compute shader to smooth the water surface and velocity
				smoothShader = gpuCompute.createShaderMaterial( document.getElementById( 'smoothFragmentShader' ).textContent, { texture: { value: null } } );

			}

			function fillTexture( texture ) {

				var waterMaxHeight = 10;

				function noise( x, y, z ) {
					var multR = waterMaxHeight;
					var mult = 0.025;
					var r = 0;
					for ( var i = 0; i < 15; i++ ) {
						r += multR * simplex.noise( x * mult, y * mult );
						multR *= 0.53 + 0.025 * i;
						mult *= 1.25;
					}
					return r;
				}

				var pixels = texture.image.data;

				var p = 0;
				for ( var j = 0; j < WIDTH; j++ ) {
					for ( var i = 0; i < WIDTH; i++ ) {

						var x = i * 128 / WIDTH;
						var y = j * 128 / WIDTH;

					        pixels[ p + 0 ] = noise( x, y, 123.4 );
						pixels[ p + 1 ] = 0;
						pixels[ p + 2 ] = 0;
						pixels[ p + 3 ] = 1;

						p += 4;
					}
				}

			}

			function smoothWater() {

				var currentRenderTarget = gpuCompute.getCurrentRenderTarget( heightmapVariable );
				var alternateRenderTarget = gpuCompute.getAlternateRenderTarget( heightmapVariable );

				for ( var i = 0; i < 10; i++ ) {

					smoothShader.uniforms.texture.value = currentRenderTarget.texture;
					gpuCompute.doRenderTarget( smoothShader, alternateRenderTarget );

					smoothShader.uniforms.texture.value = alternateRenderTarget.texture;
					gpuCompute.doRenderTarget( smoothShader, currentRenderTarget );

				}

			}

smoothWater();
			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function setMouseCoords( x, y ) {

				mouseCoords.set( ( x / renderer.domElement.clientWidth ) * 2 - 1, - ( y / renderer.domElement.clientHeight ) * 2 + 1 );
				mouseMoved = true;

			}

			function onDocumentMouseMove( event ) {

				setMouseCoords( event.clientX, event.clientY );

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					setMouseCoords( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );


				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();

					setMouseCoords( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );


				}

			}

			function animate() {

				requestAnimationFrame( animate );

				render();


			}

			function render() {

				//Cube

				// Set uniforms: mouse interaction
				var uniforms = heightmapVariable.material.uniforms;
				if ( mouseMoved ) {

					this.raycaster.setFromCamera( mouseCoords, camera );

					var intersects = this.raycaster.intersectObject( meshRay );

					if ( intersects.length > 0 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini| SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i.test(navigator.userAgent) ) {
					    var point = intersects[ 0 ].point;
					    uniforms.mousePos.value.set( point.x, point.z );

					} else if ( intersects.length > 0 ) {
						var point = intersects[ 0 ].point;
						uniforms.mousePos.value.set( point.x, point.z );

					}
					else {
					    uniforms.mousePos.value.set( 10000, 10000 );

					}
					mouseMoved = false;
				}
				else {
					uniforms.mousePos.value.set( 10000, 10000 );

				}

				// Do the gpu computation
				gpuCompute.compute();

				// Get compute output in custom uniform
				waterUniforms.heightmap.value = gpuCompute.getCurrentRenderTarget( heightmapVariable ).texture;

				// Render
				renderer.render( scene, camera );

			}
