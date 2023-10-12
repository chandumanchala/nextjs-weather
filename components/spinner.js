import { Fragment } from "react";
import image2 from "../assets/image2.gif";
import Image from "next/image";

const Spinner = () => {
  return (
    <Fragment>
      <Image className="w-[200px m-auto block" src={image2} alt="loading.." />
    </Fragment>
  );
};

export default Spinner;
