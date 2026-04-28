import { Link } from "react-router";


const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 max-h-screen py-20">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
            <p className="py-6  text-gray-500">
              Your personal shelf of meaningful connections. Browse, tend, and nurture the
              relationships that matter most.
            </p>
            <Link to={"addFriend"} className="btn bg-[#244D3F] text-primary-content">+ Add a Friend</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;