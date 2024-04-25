from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport
import json
import datetime

appsync_url = 'https://qksbyvmc4zdfni4xwfno7t6yei.appsync-api.us-east-2.amazonaws.com/graphql'
api_key = 'da2-kd252azkbbalpcuedd3h5r3z3i' # If using API KEY authentication

transport = RequestsHTTPTransport(
    url=appsync_url,
    headers={'x-api-key': api_key},
    use_json=True,
)

client = Client(transport=transport, fetch_schema_from_transport=True)

mutation = gql('''
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
'''
)

# Example usage:
# date_str = '12/31/2022'
# translated_date = translate_date(date_str)
# print(translated_date)
def translate_date(date_str):
  date_obj = datetime.datetime.strptime(date_str, '%m/%d/%Y')
  return date_obj.strftime('%Y-%m-%d')


def update_match(input: dict, sport: str):
    # print(input, sport)
    response = client.execute(mutation, variable_values={
        'input':{
          # 'id': '000',
          'Sport': sport,
          'EventDate': translate_date(input['date']),
          'EventTime': "00:00:00",
          'Result': "undecided",
          'betsID': "temp",
          'Home': input['home'],
          'Away': input['away'],
          'HomeML': input['homeML'],
          'AwayML': input['awayML'],
          'HomeSP': input['homeSP'],
          'AwaySP': input['awaySP'],
          'HomeSPodds': input['hspreadOdds'],
          'AwaySPodds': input['aspreadOdds'],
          'ouLine': input['ouLine'],
          'ouOdds': input['ouOdds']
        }
    })
    return response

with open('Muhlenbergbets.json', 'r') as file:
    bets = json.load(file)

sport = 'MBA'
for event in bets[sport]:
    # print(event)
    response = update_match(event, sport)
    print(response)
# response = update_match(bets['WLA'], 'WLA')
# print(response)