import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import image1 from "../assets/image1.jpg";
import Weather from "@/components/Weather";
import Spinner from "@/components/spinner";

export default function Home() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.NEXT_PUBLIC_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setLocation("");
    setLoading(false);
  };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Head>
          <title>Weather App</title>
          <meta name="Description" content="Weather map by nextjs"></meta>
        </Head>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]">
          <Image
            src={image1}
            layout="fill"
            alt="Weather image"
            className="object-cover"
          />

          <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
            <form className="flex justify-between items-center w-full m-auto bg-transparent border border-grey-300 text-none rounded-2xl">
              <div>
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-none text-white text-center focus:outline-none text-2xl bg-transparent placeholder:bg-none placeholder:text-center"
                  type="text"
                  placeholder="Search Location"
                />
              </div>
              <button onClick={fetchWeather}>
                <BsSearch size={20} />
              </button>
            </form>
          </div>
          {weather?.main && <Weather data={weather} />}
        </div>
      </div>
    );
  }
}
