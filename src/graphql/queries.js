/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      Username
      Email
      Password
      Balance
      Bets {
        nextToken
        __typename
      }
      Transactions {
        nextToken
        __typename
      }
      Birthday
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Username
        Email
        Password
        Balance
        Birthday
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSportingEvent = /* GraphQL */ `
  query GetSportingEvent($id: ID!) {
    getSportingEvent(id: $id) {
      id
      Sport
      EventDate
      EventTime
      Result
      betsID
      Home
      Away
      HomeML
      AwayML
      HomeSP
      AwaySP
      HomeSPodds
      AwaySPodds
      ouLine
      ouOdds
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSportingEvents = /* GraphQL */ `
  query ListSportingEvents(
    $filter: ModelSportingEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSportingEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Sport
        EventDate
        EventTime
        Result
        betsID
        Home
        Away
        HomeML
        AwayML
        HomeSP
        AwaySP
        HomeSPodds
        AwaySPodds
        ouLine
        ouOdds
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sportingEventsByBetsID = /* GraphQL */ `
  query SportingEventsByBetsID(
    $betsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSportingEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sportingEventsByBetsID(
      betsID: $betsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Sport
        EventDate
        EventTime
        Result
        betsID
        Home
        Away
        HomeML
        AwayML
        HomeSP
        AwaySP
        HomeSPodds
        AwaySPodds
        ouLine
        ouOdds
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBets = /* GraphQL */ `
  query GetBets($id: ID!) {
    getBets(id: $id) {
      id
      UserID
      EventID
      BetAmount
      BetType
      ChosenTeam
      TimePlaced
      TimeStamp
      userprofileID
      SportingEvents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBets = /* GraphQL */ `
  query ListBets(
    $filter: ModelBetsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserID
        EventID
        BetAmount
        BetType
        ChosenTeam
        TimePlaced
        TimeStamp
        userprofileID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const betsByUserprofileID = /* GraphQL */ `
  query BetsByUserprofileID(
    $userprofileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBetsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    betsByUserprofileID(
      userprofileID: $userprofileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        UserID
        EventID
        BetAmount
        BetType
        ChosenTeam
        TimePlaced
        TimeStamp
        userprofileID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTransactions = /* GraphQL */ `
  query GetTransactions($id: ID!) {
    getTransactions(id: $id) {
      id
      UserID
      Amount
      Type
      TimeStamp
      userprofileID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserID
        Amount
        Type
        TimeStamp
        userprofileID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const transactionsByUserprofileID = /* GraphQL */ `
  query TransactionsByUserprofileID(
    $userprofileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByUserprofileID(
      userprofileID: $userprofileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        UserID
        Amount
        Type
        TimeStamp
        userprofileID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
