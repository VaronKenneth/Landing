import Testimonials from "@/components/testimonial";
import TestimonialsPage from "@/components/testimonialpage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <div className="w-full h-[100%] bg-[#808080]">
            <div className="w-full h-[100px] flex items-center justify-center">
              <Image
                    src="/image.png"
                    alt="logo"
                    width={100}
                    height={100} 
                    className="w-[100px] h-[100px]"
                />
            </div>
            <div className="flex max-[750px]:flex-col items-center justify-between pr-[100px] max-[1100px]:pr-[50px] max-[750px]:justify-center max-[750px]:pr-0 pt-4 pb-[52.5px]">
              <div className="items-center w-[40%] h-[400px] pl-[100px] max-[750px]:w-[70%] max-[750px]:h-auto max-[750px]:pb-16 max-[1100px]:pr-[25px] max-[1100px]:pl-[25px]">
                <div className="w-full h-full">
                  <p className="break-words">
                    asassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasa
                  </p>
                </div>
              </div>
              <div className="w-[35%] max-[1100px]:w-[45%] max-[750px]:w-[70%] max-[550px]:w-[90%] h-[450px] bg-white rounded-2xl">
                <h1 className="flex justify-center pt-3 text-lg"><b>COTIZA CON NOSOTROS</b></h1>
                  <form action="Form" className="flex flex-col items-center pt-2 gap-3">
                    <input type="text" className="h-[50px] w-[90%] bg-[#E0E0E0] rounded-lg pl-3"/>
                    <input type="email" className="h-[50px] w-[90%] bg-[#E0E0E0] rounded-lg pl-3"/>
                      <textarea className="h-[160px] w-[90%] bg-[#E0E0E0] rounded-lg pl-3 pt-3 resize-none"/>
                    <label htmlFor="Check">
                      <input type="checkbox" name="Terms and conditions"/> He leido los <b>Terminos y Condiciones</b>
                    </label>
                    <input type="submit" name="submit" value=" "  className="h-[50px] w-[90%] bg-[#E0E0E0] rounded-lg"/>
                  </form>
              </div>
            </div>
        </div>
      </section>
      <section>
        <div className="w-full h-[400px] max-[850px]:h-auto max-[850px]:pb-16 bg-[#CCCCCC] flex justify-between pb-24 max-[850px]:flex-col">
          <div className="relative pt-16 ml-24 w-[50%] max-[850px]:w-[80%] max-[550px]:ml-12">
              <div className="absolute w-[100px] h-[100px] bg-[#444444] rounded-full left-[68%] top-[78%]">
                
              </div>
              <div className="absolute w-[60px] h-[60px] bg-[#808080] rounded-full left-[78%] top-[58%]">
                
              </div>
              <div className="absolute w-[35px] h-[35px] bg-[#999999] rounded-full left-[76%] top-[45%]">
                
              </div>
              <div className="absolute top-1/3 h-[240px] w-[70%] bg-[#0B4056]  rounded-lg">
                
              </div>
              <div className="relative h-[250px] w-[70%] bg-[#E6E6E6] ml-8 mt-4 rounded-lg">

              </div>
              
          </div>
          <div className="flex flex-col items-center w-[40%] h-[800px] mr-14 pt-16 max-[850px]:h-auto max-[850px]:w-[80%] max-[850px]:mr-0 max-[850px]:ml-16 max-[550px]:ml-10 ">
            <div className="w-full h-full items-center">
              <p className="break-words">
              asassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasasssssssssssssssssasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasasssssssssssssssssasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasasssssssssssssssss
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <TestimonialsPage /> 
      </section>
      <section>
        <div className="w-full h-[500px] bg-[#CCCCCC] overflow-hidden max-[1279px]:h-auto max-[1279px]:pb-7">
          <div className="grid grid-cols-3 max-[1279px]:grid-cols-2 max-[850px]:grid-cols-1 gap-8 place-items-center pt-7">
            <div className="w-[80%] h-[450px] bg-[#0B4056] rounded-2xl">
              <div className="relative w-full pt-5">
                <div className="relative w-[110px] h-[110px] mx-auto bg-[#D4D4D4] rounded-full">

                </div>
                <div className="absolute w-[90%] h-[38px] bg-white left-1/2 transform -translate-x-1/2 -bottom-1 rounded-xl flex items-center justify-center">

                </div>
              </div>
              <div className="w-[90%] h-[50%] text-center text-[18px] break-words pt-5 mx-auto">
                <p></p>
              </div>
              <div className="flex justify-center">
                  <div className="h-[70px] w-[70px] bg-white mt-2 rounded-full">

                  </div>
              </div>
            </div>
            <div className="w-[80%] h-[450px] bg-[#0B4056] rounded-2xl">
              <div className="relative w-full pt-5">
                <div className="relative w-[110px] h-[110px] mx-auto bg-[#D4D4D4] rounded-full">

                </div>
                <div className="absolute w-[90%] h-[38px] bg-white left-1/2 transform -translate-x-1/2 -bottom-1 rounded-xl flex items-center justify-center">

                </div>
              </div>
              <div className="w-[90%] h-[50%] text-center text-[18px] break-words pt-5 mx-auto">
                <p></p>
              </div>
              <div className="flex justify-center">
                  <div className="h-[70px] w-[70px] bg-white mt-2 rounded-full">

                  </div>
              </div>
            </div>
            <div className="w-[80%] h-[450px] bg-[#0B4056] rounded-2xl max-[1279px]:col-span-1">
              <div className="relative w-full pt-5">
                <div className="relative w-[110px] h-[110px] mx-auto bg-[#D4D4D4] rounded-full">

                </div>
                <div className="absolute w-[90%] h-[38px] bg-white left-1/2 transform -translate-x-1/2 -bottom-1 rounded-xl flex items-center justify-center">

                </div>
              </div>
              <div className="w-[90%] h-[50%] text-center text-[18px] break-words pt-5 mx-auto">
                <p></p>
              </div>
              <div className="flex justify-center">
                  <div className="h-[70px] w-[70px] bg-white mt-2 rounded-full">

                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-[400px] max-[850px]:h-auto flex justify-between pb-24 max-[850px]:flex-col">
        <div className="flex flex-col items-center w-[40%] h-[400px] ml-14 pt-16 max-[850px]:h-auto max-[850px]:w-[80%] max-[500px]:ml-10">
            <div className="w-full h-full">
              <p className="break-words">
                asassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </div>
          </div>
          <div className="relative pt-16 mr-14 w-[50%] max-[850px]:h-auto max-[850px]:w-[80%] max-[590px]:mr-10 max-[530px]:mr-5 max-[400px]:ml-4">
              <div className="absolute w-[100px] h-[100px] bg-[#444444] rounded-full right-[68%] top-[78%]">
                
              </div>
              <div className="absolute w-[60px] h-[60px] bg-[#808080] rounded-full right-[78%] top-[58%]">
                
              </div>
              <div className="absolute w-[35px] h-[35px] bg-[#999999] rounded-full right-[76%] top-[45%]">
                  
              </div>
              <div className="absolute top-1/3 right-0 h-[240px] w-[70%] bg-[#0B4056] rounded-lg">
                
              </div>
              <div className="relative h-[250px] w-[70%] bg-[#E6E6E6] ml-auto mr-8 rounded-lg">

              </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full flex justify-between h-[300px] bg-[#CCCCCC] px-5 2xl:px-28 max-[600px]:flex-col max-[600px]:h-auto">
            <div className="items-center justify-center w-[33%] py-8 max-[975px]:w-[45%] max-[600px]:w-[90%] pl-4">
              <p className="w-full break-words">
                asassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasasssssssssssssssssasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasasssssssssssssssssasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasasssssssssssssssss
              </p>
          </div>
          <div className="flex items-center justify-center w-[33%] max-[975px]:hidden">
            <Image
              src="/logo.png"
              alt="logo"
              width={300}
              height={300} 
              className="w-[300px] h-[300px]"
            />
          </div>
          <div className=" items-center justify-center w-[33%] py-8 max-[975px]:w-[45%] max-[600px]:w-[90%] max-[600px]:pl-4">
              <div>
                <p className="w-full break-words">
                asassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasasssssssssssssssssasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasasssssssssssssssssasassssaasasasassssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasassssaasasasasssssssssssssssss
                </p>
              </div>
          </div>
        </div>
      </section>
      <footer className="w-full h-[20px] bg-[#0B4056] border-t-[1px] border-black">

      </footer>
    </>
  );
}
