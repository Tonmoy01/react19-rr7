import React from 'react';
import type { Project } from '~/type';
import type { Route } from './+types/index';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const { id } = params as { id: string };

  const res = await fetch(`http://localhost:8000/projects/${id}`);
  if (!res.ok) throw new Response('Project not found', { status: 404 });

  const project: Project = await res.json();
  return project;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const project = (loaderData as { projects: Project[] }).projects[0];

  return (
    <div>
      <Link to='/projects' className='text-white bg-gray-300'>
        <FaArrowLeft />
      </Link>

      <div className='mt-8'>
        <img src={project.image} className='w-full h-auto rounded-lg mb-4' />
        <h1 className='text-3xl font-bold text-white mb-4'>{project.title}</h1>
        <p className='text-gray-300 mb-4'>{project.description}</p>

        <div className='flex justify-between'>
          <span className='text-gray-400 bg-gray-600 rounded-full p-2'>
            {project.category}
          </span>

          <button
            onClick={() => window.open(project.url, '_blank')}
            className='px-4 py-2 bg-blue-500 text-white rounded-md'
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
