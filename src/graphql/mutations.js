/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
export const createSportingEvent = /* GraphQL */ `
  mutation CreateSportingEvent(
    $input: CreateSportingEventInput!
    $condition: ModelSportingEventConditionInput
  ) {
    createSportingEvent(input: $input, condition: $condition) {
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
export const updateSportingEvent = /* GraphQL */ `
  mutation UpdateSportingEvent(
    $input: UpdateSportingEventInput!
    $condition: ModelSportingEventConditionInput
  ) {
    updateSportingEvent(input: $input, condition: $condition) {
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
export const deleteSportingEvent = /* GraphQL */ `
  mutation DeleteSportingEvent(
    $input: DeleteSportingEventInput!
    $condition: ModelSportingEventConditionInput
  ) {
    deleteSportingEvent(input: $input, condition: $condition) {
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
export const createBets = /* GraphQL */ `
  mutation CreateBets(
    $input: CreateBetsInput!
    $condition: ModelBetsConditionInput
  ) {
    createBets(input: $input, condition: $condition) {
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
export const updateBets = /* GraphQL */ `
  mutation UpdateBets(
    $input: UpdateBetsInput!
    $condition: ModelBetsConditionInput
  ) {
    updateBets(input: $input, condition: $condition) {
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
export const deleteBets = /* GraphQL */ `
  mutation DeleteBets(
    $input: DeleteBetsInput!
    $condition: ModelBetsConditionInput
  ) {
    deleteBets(input: $input, condition: $condition) {
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
export const createTransactions = /* GraphQL */ `
  mutation CreateTransactions(
    $input: CreateTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    createTransactions(input: $input, condition: $condition) {
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
export const updateTransactions = /* GraphQL */ `
  mutation UpdateTransactions(
    $input: UpdateTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    updateTransactions(input: $input, condition: $condition) {
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
export const deleteTransactions = /* GraphQL */ `
  mutation DeleteTransactions(
    $input: DeleteTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    deleteTransactions(input: $input, condition: $condition) {
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
