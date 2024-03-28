import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query getEventList {
    events(take: 10, skip: 0) {
      id
      start(order: { dir: ASC })
      title
      finish
      photo {
        id
      }
    }
  }
`;

export const GET_EVENT = gql`
  query getEventData($eventId: Uuid!) {
    event(id: $eventId) {
      start(order: { dir: ASC })
      title
      finish
      description
      location {
        name
      }
      photo {
        id
      }
    }
  }
`;
