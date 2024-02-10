import Image from 'next/image';
import MyTicketPage from "@/components/shared/myTicketPage";
import { auth } from "@clerk/nextjs";


const PartnersPage = () => {
  const { userId } = auth();
  console.log(userId)

  return (
    <>
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <MyTicketPage userId={userId} />
      </section>
    </>

  );
};

export default PartnersPage;
