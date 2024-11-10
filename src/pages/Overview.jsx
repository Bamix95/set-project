import DashboardLayout from "../layout/DashboardLayout";
import MainSection from "../Components/Main/MainSection";
import { useState } from "react";
import ThirdSec from "../Components/ThirdSec/ThirdSec";
import IconBook from "../assets/icons/IconBook";
import IconEdit from "../assets/icons/IconEdit";
import IconHeadphone from "../assets/icons/IconHeadphone";
import IconVolume from "../assets/icons/IconVolume";

const dataValues = [65, 59, 58, 81, 56, 55, 40];

const highestValueIndex = dataValues.indexOf(Math.max(...dataValues));

const Courses = [
  {
    course: "French",
    Lesson: "35 lessons",
    Image: "/images/Frame.svg",
    progress: 75,
    Border: "#006ED366",
    background: " #369FFF",
  },
  {
    course: "Portugese",
    Lesson: "30 lessons",
    Image: "/images/Frame (3).svg",
    progress: 50,
    Border: "#FF7E07",
    background: " #FF993A",
  },
  {
    course: "Italian",
    Lesson: "20 lessons",
    Image: "/images/Frame (1).svg",
    progress: 25,
    Border: "#00683833",
    background: " #8AC53E",
  },
  {
    course: "German",
    Lesson: "40 lessons",
    Image: "/images/Frame (2).svg",
    progress: 75,
    Border: "#FFC000",
    background: " #FFD143",
  },
];
const Planning = [
  {
    image: <IconBook />,
    imageBackground: "rgba(54, 159, 255, 0.1)",
    plan: "Reading - Beginner Topic 1",
    Time: "8:00PM - 10:00AM",
  },
  {
    image: <IconEdit />,
    imageBackground: "rgba(255, 153, 58, 0.1)",
    plan: "Reading - Beginner Topic 1",
    Time: "01:00PM - 02:00PM",
  },
  {
    image: <IconHeadphone />,
    imageBackground: "rgba(138, 197, 62, 0.1)",
    plan: "Listening - Intermediate Topic 1",
    Time: "03:00PM - 04:00PM",
  },
  {
    image: <IconVolume />,
    imageBackground: "rgba(255, 209, 67, 0.1)",
    plan: "Speaking - Advanced Topic 1",
    Time: "07:00PM - 08:00PM",
  },
  {
    image: <IconVolume />,
    imageBackground: "rgba(255, 209, 67, 0.1)",
    plan: "Speaking - Beginner Topic 1",
    Time: "8:00AM - 12:00PM",
  },
  {
    image: <IconHeadphone />,
    imageBackground: "rgba(138, 197, 62, 0.1)",
    plan: "Listening - Beginner Topic 1",
    Time: "8:00AM - 12:00PM",
  },
  {
    image: <IconEdit />,
    imageBackground: "rgba(255, 153, 58, 0.1)",
    plan: "Grammar - Intermediate Topic 2",
    Time: "8:00AM - 12:00PM",
  },
  {
    image: <IconBook />,
    imageBackground: "rgba(54, 159, 255, 0.1)",
    plan: "Reading - Advanced Topic 1",
    Time: "8:00AM - 12:00PM",
  },
];
const statistics = [
  { title: "Courses Completed", number: "02" },
  { title: "Total Points Gained", number: "250" },
  { title: "Courses in Progress", number: "03" },
  { title: "Tasks Finished", number: "05" },
];
const chartData = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Activity",
      data: dataValues,
      backgroundColor: dataValues.map((_, index) =>
        index === highestValueIndex ? "#369FFF" : "rgba(75, 192, 192, 0.2)"
      ),
      borderWidth: 0,
      borderRadius: 20,
      borderSkipped: false,
      barThickness: 25,
    },
  ],
};

export default function Overview() {
  const [user] = useState({
    firstName: "Bruno",
    lastName: "Fernandes",
    userImage: "/images/Rectangle 4.png",
    plan: "Basic",
  });

  return (
    <DashboardLayout>
      <MainSection Courses={Courses} Planning={Planning} user={user} />
      <ThirdSec user={user} statistics={statistics} chartData={chartData} />
    </DashboardLayout>
  );
}
