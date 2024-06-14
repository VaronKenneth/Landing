import Testimonials from "@/components/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main>
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
            <div className="flex items-center justify-end pr-[100px] pt-4 pb-[52.5px]">
              <div className="w-[35%] h-[450px] bg-white rounded-2xl">
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
        <div className="w-full h-[400px] bg-[#CCCCCC]">
          <div className="relative pt-12 ml-14">
              <div className="absolute top-1/3 h-[240px] w-[35%] bg-[#666666] pl-10 rounded-lg">
                
              </div>
              <div className="relative h-[250px] w-[35%] bg-[#E6E6E6] ml-8 mt-4 rounded-lg">

              </div>
          </div>
        </div>
      </section>
      <section>
        <Testimonials /> 
      </section>
    </main>
  );
}
