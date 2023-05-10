'use client'

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ProductPage({ params }: { params: { model: string } }) {
  const divRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoTexture = new THREE.VideoTexture(videoRef.current!!);

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loader = new GLTFLoader()

    const scene = new THREE.Scene
    const camera = new THREE.PerspectiveCamera(75, (divRef.current?.clientWidth || 1) / (divRef.current?.clientWidth || 1), 0.1, 1000);
    camera.position.set(0, 0, 10);

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    .then(stream => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    })
    .catch(error => {
      console.error('Error accessing camera', error);
    });


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
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        videoTexture.needsUpdate = true;
        
        scene.background = null;
        
        scene.background = videoTexture;
      
        renderer.render(scene, camera);
      }
      
      setIsLoading(false)
      animate();
    })
  }, [params.model, videoTexture])

  return (
    <main style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px'}}>
      <video ref={videoRef} style={{display: 'none'}}/>
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
