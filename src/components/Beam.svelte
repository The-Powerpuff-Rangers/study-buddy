<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
  
    onMount(() => {
      // Create a scene
      const scene = new THREE.Scene();
  
      // Create a camera
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
  
      // Create a renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  
      // Create particles
      const particlesCount = 1000;
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: new THREE.Color(),
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthTest: false,
      });
  
      const positions = new Float32Array(particlesCount * 3);
      const colors = new Float32Array(particlesCount * 3);
  
      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  
        const color = new THREE.Color();
        color.setHSL(Math.random(), 1, 0.5);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }
  
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);
  
      // Handle mouse move
      document.addEventListener('mousemove', onDocumentMouseMove);
  
      function onDocumentMouseMove(event) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  
        camera.position.x = mouseX * 2;
        camera.position.y = mouseY * 2;
        camera.lookAt(scene.position);
      }
  
      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.01;
        particles.rotation.y += 0.01;
        renderer.render(scene, camera);
      }
  
      animate();
  
      // Cleanup on component unmount
      return () => {
        document.removeEventListener('mousemove', onDocumentMouseMove);
        renderer.dispose();
      };
    });
  </script>
  
  <style>
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  </style>
  
  <canvas></canvas>

  