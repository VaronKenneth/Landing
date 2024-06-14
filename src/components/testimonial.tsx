import { QuotationMarks } from "./icons"

export default function Testimonials() {
    return (
        <section>
            <div className="w-full h-[400px] flex flex-col justify-center items-center">
                <div className="w-[50%] max-[1100px]:w-[70%] max-[600px]:w-[90%] h-[300px] bg-[#B3B3B3] rounded-lg">
                    <div className="pt-8 pl-8">
                        <QuotationMarks />
                    </div>
                    <div className="flex justify-end mt-[150px] pr-8">
                        <div className="h-[50px] w-[50px] bg-white rounded-lg">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};