'use client'

import { useEffect, useRef } from 'react';
import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ProductPage({ params }: { params: { model: string } }) {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loader = new GLTFLoader()

    const scene = new THREE.Scene
    scene.background = new THREE.Color(0xCDCDCD);
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, 0, 10);

    loader.load(`https://api.cm.test.luisruiz.dev/admin/model/${params.model}`, (gltf) => {
      scene.add(gltf.scene)
      const light = new THREE.AmbientLight(0xffffff, 1);
      light.position.set(0, 0, 10);
      scene.add(light);

      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(300, 300)
      renderer.render(scene, camera)

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.rotateSpeed = 0.5;
      controls.minDistance = 1;
      controls.maxDistance = 50; 
      
      divRef.current?.appendChild(renderer.domElement)

      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }
      animate();
    })

  }, [params.model])

  return (
    <main style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div ref={divRef}>
      </div>
    </main>
  )
}

export default ProductPage