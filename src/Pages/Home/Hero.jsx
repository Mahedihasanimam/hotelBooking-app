

const Hero = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://bellevuetheme.com/demo/hotelclassic/wp-content/uploads/sites/9/2023/11/reisetopia-Vl5DAQxNBbM-unsplash.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-6xl">
      <h1 className="mb-5 text-6xl font-bold">Reserve Your Perfect Vacation Retreat</h1>
      <p className="mb-5 font-bold">
      Rooms from $129 / night
      </p>
      <button className="btn bg-green-500 text-white font-bold border-none rounded-sm px-8 hover:bg-green-600">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Hero;