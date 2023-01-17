import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Abc",
    image:
      "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753__340.jpg",
    address: "ABC Street Cornelia",
    description: "It is a great meetup place",
  },
  {
    id: "m2",
    title: "CXA",
    image:
      "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753__340.jpg",
    address: "XYZ Street Vancouver",
    description: "It is a wonderful place",
  },
  {
    id: "m3",
    title: "KHGT",
    image:
      "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753__340.jpg",
    address: "Pind Padhyan",
    description: "The greatest place in the hp-97 area",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
