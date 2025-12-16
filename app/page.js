import Carousel from "@/components/Carousel";
import CoreValues from "@/components/home-components/CoreValues";
import About from "@/components/home-components/About";
import Courses from "@/components/home-components/Courses";
import Facility from "@/components/home-components/Facility";
import Call_to_action from "@/components/home-components/Call_to_action";

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section Carousel */}
      <Carousel />

      {/* About Section */}
      <About />

      {/* Core Values Section */}
      <CoreValues />

      {/* Courses Section */}
      <Courses />
      {/* Facility Section */}
      <Facility />

      {/* Contact / Call-to-action */}
      <Call_to_action />
    </div>
  );
}
