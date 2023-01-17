import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import MeetupList from "../../components/meetups/MeetupList";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    ></MeetupDetail>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb://van_astrea:abcdefgh@cluster0-shard-00-00.x7qxv.mongodb.net:27017,cluster0-shard-00-01.x7qxv.mongodb.net:27017,cluster0-shard-00-02.x7qxv.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-4xumi5-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => {
      return {
        params: {
          meetupId: meetup._id.toString(),
        },
      };
    }),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb://van_astrea:abcdefgh@cluster0-shard-00-00.x7qxv.mongodb.net:27017,cluster0-shard-00-01.x7qxv.mongodb.net:27017,cluster0-shard-00-02.x7qxv.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-4xumi5-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const selectedMeetup = await meetupCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        id: selectedMeetup._id.toString(),
      },
    },
  };
}

export default MeetupDetails;
