import { Link } from 'react-router';

const Hero = ({
  name = '[NAME]',
  text = 'I build friendly web expressions that help businesses and individuals achieve their goals.',
}) => {
  return (
    <header className='text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300'>
      <h2 className='text-4xl font-bold mb-4'>Hey, What's up {name} 🎉</h2>
      <p className='text-lg text-gray-300 max-w-2xl mx-auto mb-6'>{text}</p>
      <div className='flex justify-center gap-4'>
        <Link
          to='/Projects'
          className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors'
        >
          View Projects
        </Link>
        <Link
          to='/Contact'
          className='bg-gray-300 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-400 transition-colors'
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
