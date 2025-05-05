import './App.css';
import Projects from './Projects';
import React from 'react';

const projectArrays = [{img: '/images/projects/marching-polygons.png', text: 'Marching Polygons', link: "https://github.com/narekb8/MarchingPolygonsExamples",
    desc: "An implementation of the Marching Cubes and Tetrahedra algorithms in Unity3D. All algorithms are executed asynchronously on the GPU using HLSL Compute Shaders, while the resulting mesh data is processed and applied on the CPU using C#."},
    {img: '/images/projects/spire.png', text: 'Spire Testing Suite', link: "https://github.com/narekb8/spire/tree/testing-iteration-v2",
        desc: "A suite of scripts designed to implement fault injection testing in Spire, an intrusion-tolerant distributed system. All data manipulation is written in C, the test environment is built with Docker, and the benchmark monitoring and analysis is automated with Python."},
                        {img: '/images/projects/temp-p2.bmp', text: 'CUDA Fast Image Blur', link: "https://github.com/narekb8/CUDA-Blurs",
    desc: "A CUDA script that applies a radial Gaussian Blur to full-depth 32-bit bitmap files. By using CUDA and leveraging GPU compute, the signal processing effect can be parallelized across CUDA blocks and threads using signal processing techniques like convolution."},
                        {img: '/images/projects/pcb.png', text: 'DQWalker', link: "https://github.com/narekb8/DQWalker",
    desc: "An interactive, low-power pedometer running off of an Atmel SAMD21 microcontroller. The device uses cutting-edge SHARP displays and low voltage accelerometers to minimize power draw and promote battery life, all on a custom PCB with USB-C charging."}];

class ProjComponent extends React.Component {
    render() {
        return (
            <section className='App' id='project'>
                <h1 className='home-h1'>Projects</h1>
                    <div className='Projects'>
                        <Projects items={projectArrays}/>
                    </div>
            </section>
        );
    }
}

export default ProjComponent;