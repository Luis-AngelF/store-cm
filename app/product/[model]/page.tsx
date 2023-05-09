'use client'

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ProductPage({ params }: { params: { model: string } }) {
  const divRef = useRef<HTMLDivElement>(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loader = new GLTFLoader()

    const scene = new THREE.Scene
    scene.background = new THREE.Color(0xCDCDCD);
    const camera = new THREE.PerspectiveCamera(75, (divRef.current?.clientWidth || 1) / (divRef.current?.clientWidth || 1), 0.1, 1000);
    camera.position.set(0, 0, 10);

    loader.load(`https://api.cm.test.luisruiz.dev/admin/model/${params.model}`, (gltf) => {
      scene.add(gltf.scene)
      const light = new THREE.AmbientLight(0xffffff, 1);
      light.position.set(0, 0, 10);
      scene.add(light);

      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(divRef.current?.clientWidth || 300, divRef.current?.clientWidth || 300)
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
      setIsLoading(false)
      animate();
    })
  }, [params.model])

  return (
    <main style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px'}}>
      <div ref={divRef} style={{width: '100%', height: '100%', marginTop: '100px'}}>
      {
        isLoading && (
          <p>Cargando Modelo 3D ...</p>
        )
      }
      </div>
    </main>
  )
}

export default ProductPage