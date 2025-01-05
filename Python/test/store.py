from urllib.request import urlopen
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup as bs

html = urlopen("https://dhlottery.co.kr/store.do?method=topStore&pageGubun=L645&drwNo=1000")

bsObject = bs(html, 'html.parser')

first_win = []
second_win = []

tables = bsObject.find_all('table', attrs={'class':'tbl_data tbl_data_col'})
table_body = tables[0].find('tbody')

rows = table_body.find_all('tr')
for row in rows:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    first_win.append([ele for ele in cols if ele]) # Get rid of empty values

print(first_win)

print()
print()

table_body = tables[1].find('tbody')

rows = table_body.find_all('tr')
for row in rows:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    second_win.append([ele for ele in cols if ele]) # Get rid of empty values

print(second_win)



print('#'*200)


round = 1010
pageNum = 4

post_data = urllib.parse.urlencode({'method':'topStore', 'nowPage':pageNum, 'gameNo':'5133','drwNo':round,'schKey':'all'}).encode('UTF-8')
url = urllib.request.Request('https://dhlottery.co.kr/store.do?method=topStore&pageGubun=L645', post_data)
url.add_header('User-Agent', "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36")

html = urlopen(url)

bsObject = bs(html, 'html.parser')

tables = bsObject.find_all('table', attrs={'class':'tbl_data tbl_data_col'})
table_body = tables[0].find('tbody')

first_win = []
second_win = []

rows = table_body.find_all('tr')
for row in rows:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    first_win.append([ele for ele in cols if ele]) # Get rid of empty values

print(first_win)

print()
print()

table_body = tables[1].find('tbody')

rows = table_body.find_all('tr')
for row in rows:
    cols = row.find_all('td')
    cols = [ele.text.strip() for ele in cols]
    second_win.append([ele for ele in cols if ele]) # Get rid of empty values

print(second_win)