import React from 'react';
import { User, FolderGit2, Mail, Terminal, Github, Camera } from 'lucide-react';
import { Education } from './text/Education';
import { Experience } from './text/Experience';
import { Curriculo } from './browser/Curriculo';
import { Project } from './browser/Project';

export const APPS = [
  {
    id: 'about',
    title: 'About Me',
    icon: User,
    component: <Education />,
    defaultWidth: 600,
    defaultHeight: 500,
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: FolderGit2,
    component: <Experience />,
    defaultWidth: 800,
    defaultHeight: 600,
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    icon: Terminal,
    component: <Curriculo />,
    defaultWidth: 500,
    defaultHeight: 450,
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: Mail,
    component: <Project />,
    defaultWidth: 400,
    defaultHeight: 500,
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: Github,
    component: null,
    isExternal: true,
    url: 'https://github.com/natSchlegel',
  },
];

export const WALLPAPER_URL = "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop";