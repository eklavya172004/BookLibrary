import Booklist from "@/components/Booklist";
import Bookoverview from "@/components/Bookoverview";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
import { sampleBooks } from "@/constaint";

const Home = ()  => {
  return (
  <>
    <Bookoverview {...sampleBooks[0]}/>

    <Booklist
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </>
  );
}

export default Home;
