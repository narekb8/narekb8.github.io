import './App.css';
import Background from './Background';
import HeaderNav from './Header';
import ProjComponent from './ProjComponent';
import Skills from './Skills';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const skillList = [{text: 'C++', img: '/images/skills/cpp-logo.png'}, {text: 'C#', img: '/images/skills/cs-logo.png'}, {text: 'CUDA', img: '/images/skills/cuda-logo.svg'},
                    {text: 'Python', img: '/images/skills/python-logo.png'}, {text: 'JavaScript', img: '/images/skills/js-logo.png'}, {text: 'Qt', img: '/images/skills/qt-logo.png'},
                    {text: 'Arduino', img: '/images/skills/arduino-logo.png'}, {text: '.NET', img: '/images/skills/net-logo.png'}, {text: 'Unity3D', img: '/images/skills/unity-logo.png'},
                    {text: 'OpenGL', img: '/images/skills/opengl-logo.png'}, {text: 'React', img: '/images/skills/react-logo.png'}, {text: 'Git', img: '/images/skills/git-logo.png'},
                    {text: 'Postgres', img: '/images/skills/postgres-logo.png'}, {text: 'Docker', img: '/images/skills/docker-logo.png'}, {text: 'PyTorch', img: '/images/skills/pytorch-logo.png'}]

export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Background />
      <header className="App-header">
        <HeaderNav>
          <a className="nav-anchors" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>Home</a>
          <a className="nav-anchors" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth', alignWithTop:true })}>About</a>
          <a className="nav-anchors" onClick={() => document.getElementById('project').scrollIntoView({ behavior: 'smooth', alignWithTop:true })}>Projects</a>
        </HeaderNav>
      </header>
      <main className='App' id='home'>
        <h1 className='home-h1'>Narek Boghosian</h1>
        <h3 className='home-h2'>Distributed Systems and Graphics Developer</h3>
        <div className='contact-icons'>
          <a href="https://github.com/narekb8" target="_blank" rel="noreferrer"><GitHubIcon className='icons' sx={{ fontSize: 50 }} /></a>
          <a href="https://www.linkedin.com/in/narekb8/" target="_blank" rel="noreferrer"><LinkedInIcon className='icons' sx={{ fontSize: 50 }} /></a>
        </div>
      </main>
      <section className='App' id='about'>
        <h1>About</h1>
        <div className='about-inner'>
          <p className='about-paragraph'>
            Hello! My name's Narek Boghosian and I'm a software developer with a focus on graphics programming and distributed systems.
            I completed my Bachelor's Degree in Computer Science at the University of Pittsburgh, where I did research on fault injection testing in distributed systems.
          </p>
          <div>
            <div className='text-center'>Skills</div>
            <div className='about-skills'>
              <Skills items={skillList}/>
            </div>
          </div>
        </div>
      </section>
      <ProjComponent />
    </ThemeProvider>
  );
}