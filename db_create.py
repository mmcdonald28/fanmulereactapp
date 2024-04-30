from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport
import json
import datetime
import argparse

parser = argparse.ArgumentParser(
    description="""
    Updates GraphQL database with the latest sporting events. Reads from Muhlenbergbets.json by default, 
    have the option to define custom file path. through --file flag. 
    See https://ncaaorg.s3.amazonaws.com/championships/resources/common/NCAA_SportCodes.pdf for the list of sport codes
    """
)

parser.add_argument("--sport", required=True, type=str, help="Sport code to scrape")
parser.add_argument("--file", default='Muhlenbergbets.json', type=str, help="File path to read from")
args = parser.parse_args()

# Keep safe
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

with open(args.file, 'r') as file:
    bets = json.load(file)

sport = args.sport
for event in bets[sport]:
    # print(event)
    response = update_match(event, sport)
    print(response)
# response = update_match(bets['WLA'], 'WLA')
# print(response)