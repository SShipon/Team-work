import shapeWave from "../../assets/Dawn.png"
import image1 from "../../assets/Frame 14178.png"
import dawn from "../../assets/Dawn.png"
import dawn1 from "../../assets/Dawn (1).png"
import image2 from "../../assets/Frame 14176.png"
import userImage from "../../assets/Ellipse 2.png"
import spiral from "../../assets/Spiral 3.png"

const Service = () => {
    return (
        <div className="min-h-screen relative  max-[1020px] mx-auto:  p-8">
            <img src={dawn1} className="absolute right-[527px] z-50 top-[258px]" alt="" />
            {/* Upper */}
            <div className="grid grid-cols-12">
                <div className="col-span-6">
                    <div className=" flex mb-4">
                        <div className="col-span-3 " >
                            <h1 className=" text-6xl font-bold text-gray-900 mb-6">
                                Discover. <br />
                                Explore. <br />
                                Inspire.
                            </h1>
                        </div>
                        <div className="gap-4 col-span-3 ">
                            <img className="w-[280px] absolute right-[540px] top-[50px]" src={shapeWave} alt="" />
                        </div>

                    </div>
                    {/* latter class  */}

                    <div>
                        <p className="text-gray-600 text-lg mt10 mb-10 w-[375px]  ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
                            Et integer facilisi eget diam.
                        </p>
                        <button className="w-32 px-8 py-2     text-xl bg-black text-white rounded-full">
                            Explore
                        </button>
                    </div>
                </div>

                <div className="col-span-3 gap-4" >
                    <img className="  absolute right-[332px] top-[210px]" src={image1} alt="" />
                </div>

                <div className=" col-span-3">
                    <img className=" absolute right-[0px] top-[50px] " src={image1} alt="" />
                </div>

            </div>
            {/* Lower */}
            <div className="grid grid-cols-12">
                <div className="col-span-6 flex">
                    <div className="">
                        <img className=" absolute left-[38px] top-[555px] flex flex-col justify-center items-center" src={spiral} alt="" />
                    </div>
                    <div>
                        <img className=" absolute left-[225px] top-[400px]" src={image2} alt="" />
                    </div>
                </div>
                <div className="col-span-6 flex flex-col absolute right-[0px] top-[557px] ">
                    <div className="flex justify-end ">
                        <img className="w-[220px] p-5 " src={dawn} alt="" />
                    </div>
                    <div className="flex items-center gap-4  ">
                        <img src={userImage} className="w-16 h-16 rounded-full" alt="" />
                        <p className="text-gray-600 w-[552px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
                            Et integer facilisi eget diam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;