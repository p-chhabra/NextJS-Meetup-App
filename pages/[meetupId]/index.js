import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753__340.jpg"
      title="First Meetup"
      address="Street ABC, XYZ City"
      description="This is the first meetup i created"
    ></MeetupDetail>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753__340.jpg",
        title: "First Meetup",
        address: "Street ABC, XYZ City",
        description: "This is the first meetup i created",
      },
    },
  };
}

export default MeetupDetails;
