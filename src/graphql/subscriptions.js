/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onCreateUserProfile(filter: $filter) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onUpdateUserProfile(filter: $filter) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onDeleteUserProfile(filter: $filter) {
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
export const onCreateSportingEvent = /* GraphQL */ `
  subscription OnCreateSportingEvent(
    $filter: ModelSubscriptionSportingEventFilterInput
  ) {
    onCreateSportingEvent(filter: $filter) {
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
export const onUpdateSportingEvent = /* GraphQL */ `
  subscription OnUpdateSportingEvent(
    $filter: ModelSubscriptionSportingEventFilterInput
  ) {
    onUpdateSportingEvent(filter: $filter) {
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
export const onDeleteSportingEvent = /* GraphQL */ `
  subscription OnDeleteSportingEvent(
    $filter: ModelSubscriptionSportingEventFilterInput
  ) {
    onDeleteSportingEvent(filter: $filter) {
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
export const onCreateBets = /* GraphQL */ `
  subscription OnCreateBets($filter: ModelSubscriptionBetsFilterInput) {
    onCreateBets(filter: $filter) {
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
export const onUpdateBets = /* GraphQL */ `
  subscription OnUpdateBets($filter: ModelSubscriptionBetsFilterInput) {
    onUpdateBets(filter: $filter) {
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
export const onDeleteBets = /* GraphQL */ `
  subscription OnDeleteBets($filter: ModelSubscriptionBetsFilterInput) {
    onDeleteBets(filter: $filter) {
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
export const onCreateTransactions = /* GraphQL */ `
  subscription OnCreateTransactions(
    $filter: ModelSubscriptionTransactionsFilterInput
  ) {
    onCreateTransactions(filter: $filter) {
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
export const onUpdateTransactions = /* GraphQL */ `
  subscription OnUpdateTransactions(
    $filter: ModelSubscriptionTransactionsFilterInput
  ) {
    onUpdateTransactions(filter: $filter) {
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
export const onDeleteTransactions = /* GraphQL */ `
  subscription OnDeleteTransactions(
    $filter: ModelSubscriptionTransactionsFilterInput
  ) {
    onDeleteTransactions(filter: $filter) {
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
