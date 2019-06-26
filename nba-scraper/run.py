from urllib2 import urlopen
from bs4 import BeautifulSoup
import pandas as pd
import csv

# NBA teams and their abbriviations
nba_teams = [['ATL', 'Atlanta Hawks'], ['BRK', 'Brooklyn Nets'], ['BOS', 'Boston Celtics'], ['CHO', 'Charlotte Hornets'], ['CHI', 'Chicago Bulls'], ['CLE', 'Cleveland Cavaliers'], ['DAL', 'Dallas Mavericks'], ['DEN', 'Denver Nuggets'], ['DET', 'Detroit Pistons'], ['GSW', 'Golden State Warriors'], ['HOU', 'Houston Rockets'], ['IND', 'Indiana Pacers'], ['LAC', 'Los Angeles Clippers'], ['LAL', 'Los Angeles Lakers'], ['MEM', 'Memphis Grizzlies'], ['MIA', 'Miami Heat'], ['MIL', 'Milwaukee Bucks'], ['MIN', 'Minnesota Timberwolves'], ['NOP', 'New Orleans Pelicans'], ['NYK', 'New York Knicks'], ['OKC', 'Oklahoma City Thunder'], ['ORL', 'Orlando Magic'], ['PHI', 'Philadelphia 76ers'], ['PHO', 'Phoenix Suns'], ['POR', 'Portland Trail Blazers'], ['SAC', 'Sacramento Kings'], ['SAS', 'San Antonio Spurs'], ['TOR', 'Toronto Raptors'], ['UTA', 'Utah Jazz'], ['WAS', 'Washington Wizards']]


for team in nba_teams:
	# URL page we will scraping (see image above)
	print team
	url = "https://www.basketball-reference.com/contracts/{}.html".format(team[0])

	html = urlopen(url)

	soup = BeautifulSoup(html, features="html.parser")

	# use findALL() to get the column headers
	soup.findAll('tr', limit=2)

	# use getText()to extract the text we need into a list
	headers = [th.getText() for th in soup.findAll('tr', limit=2)[1].findAll('th')]

	# avoid the first header row
	rows = soup.findAll('tr')

	player_stats = []
	for i in range(2, len(rows)-1):
		player = []

		for child in rows[i].recursiveChildGenerator():
			name = getattr(child, "name", None)
			if name is not None: 
				if name is "a" or name is "em":
					print ""
			elif not child.isspace(): # leaf node, don't print spaces
			    player.append(child)
			    break

		for td in rows[i].findAll('td'):
			player.append(td.getText().replace(",",""))

		if len(player[0]) > 0:
			player_stats.append(player)


	last_row = []
	last_row.append("Team Totals")
	for td in rows[len(rows)-1].findAll('td'):
		last_row.append(td.getText().replace(",",""))

	player_stats.append(last_row)	



	stats = pd.DataFrame(player_stats, columns = headers,)


	stats.to_csv("../app/public/data/teams/{}.csv".format(team[1]), sep=',', encoding='utf-8', index=False, quoting=csv.QUOTE_NONE, quotechar='',  escapechar='\\')


