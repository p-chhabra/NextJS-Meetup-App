import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>;
    </Fragment>
  );
}

//can also use getServerSideProps
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb://van_astrea:abcdefgh@cluster0-shard-00-00.x7qxv.mongodb.net:27017,cluster0-shard-00-01.x7qxv.mongodb.net:27017,cluster0-shard-00-02.x7qxv.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-4xumi5-shard-0&authSource=admin&retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 10,
  };
}

export default HomePage;
