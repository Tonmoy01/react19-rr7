import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Friendly Dev' },
    { name: 'description', content: 'Custom website development' },
  ];
}

export default function Home() {
  console.log('hello home...');

  return (
    <>
      <h2 className='text-3xl font-bold text-white'>Home Page</h2>
    </>
  );
}
