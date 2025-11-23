import { Link } from 'react-router';
import type { Project } from '~/type';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className='block transform transition-transform duration-300 hover:scale-[1.02]'
    >
      <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
        <img src={project.image} alt={project.title} />
        <div className='flex justify-between items-center'>
          <h3 className='text-2xl font-bold text-white mb-2 mt-4'>
            {project.title}
          </h3>
          <span className='text-gray-600'>{project.date}</span>
        </div>
        <p className='text-gray-300 mb-4'>{project.description}</p>
        <div className='flex justify-between'>
          <span className='text-gray-400 bg-gray-600 rounded-full p-2'>
            {project.category}
          </span>
          <button
            onClick={() => window.open(project.url, '_blank')}
            rel='noopener noreferrer'
            className='inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-colors cursor-pointer'
          >
            View Project
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
