import type { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "@/components/Header";

const AnimalDetail: NextPage = () => {
  const router = useRouter();
  const animal = router.query.animal;
  return (
    <div>
      <Header />
      <main>
        <h1>{animal}&apos;s Profile</h1>
        <div>welcome to {animal}&apos;s Page</div>
      </main>
      <footer></footer>
    </div>
  );
};

export default AnimalDetail;
