import GithubIcon from '../assets/img/github.png';

export default function Header() {
  const handleClick = () => {
    window.open('https://github.com/LiChen127/Rosaceae-Editor');
  };


  return (
      <div className="text-2xl shadow-md w-screen h-15 flex items-center justify-center text-gray-950 ">
        <div className='w-[80%] flex items-center justify-between'>
        <span className="tracking-wide font-medium">Rosaceae Online Editor</span>
        <img
          src={GithubIcon}
          alt="github"
          width={45}
          height={45}
          className='bg-gray-100 cursor-pointer'
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
