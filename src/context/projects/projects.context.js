import { createContext } from 'react';

import PROJECTS_DATA from './projects-data';

const ProjectsContext = createContext(PROJECTS_DATA);

export default ProjectsContext;