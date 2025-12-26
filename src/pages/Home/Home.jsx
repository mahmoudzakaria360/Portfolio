import HeroBanner from '../../components/HeroBanner/HeroBanner';
import avatar from '../../assets/imgi_1_avataaars.svg';

export default function Home() {
  return (
    <>
      <HeroBanner
        img={avatar}
        heading="START FRAMEWORK"
        paragraph="Graphic Artist - Web Designer - Illustrator"
      />
    </>
  );
}
