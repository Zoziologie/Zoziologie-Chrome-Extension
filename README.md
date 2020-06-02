# Chrome-Extension
A toolkit for web-birding on eBird and biolovision (ornitho, faune-...)

## eBird

### Convert Target List to CSV
Create [comma-separeted value (CSV)](https://en.wikipedia.org/wiki/Comma-separated_values) file from the **Target** page [ebird.org/targets](https://ebird.org/targets). The exported table contains the following columns:

| `rank` | `common_name` | `scientifique_name` | `frequency` | `link_map` |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 1	 | Brent Goose 	 | Branta bernicla	 | 1.60%	 | https://ebird.org/map/brant?gp=true&amp;yr=all&amp;env.minX=-5.144&amp;env.minY=41.334&amp;env.maxX=9.56&amp;env.maxY=51.093

![Export of Target list](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/ExportTargetList.PNG?raw=true)


## Biolovision

### Convert Species List to CSV
Create csv files from biolovision **Specie List** (`m_id=94`) pages. This output pages is selected on the last tab of the **search engine** page (`?m_id=8`). The exported table contains the following columns:

| `number` | `common_name` | `scientifique_name` | `latest_date`* | `nidification`* | `link_observations`* | `link_stat`* | `link_info`* |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| 31 |	Greylag Goose |	Anser anser |	06.01.2020 |	certain |	https://www.ornitho.ch/index.php?m_id=94&showback=stor&p_c=5&p_cc=-1&sp_tg=1&sp_DateSynth=02.06.2020&sp_DChoice=offset&sp_DOffset=5&sp_SChoice=species&sp_S=60&sp_PChoice=canton&sp_cC=000100110000000000000011001001100000000000000000000&sp_FChoice=list&sp_FDisplay=DATE_PLACE_SPECIES&sp_DFormat=DESC	 | https://www.ornitho.ch/index.php?m_id=81&frmSpecies=60&sp_tg=1&showback=stor |	https://www.ornitho.ch/index.php?m_id=15&showback=stor&backlink=skip&frmSpecies=60&sp_tg=1

\* only in full table.

![Selection of summary](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/search-engine-formating-2.PNG?raw=true)

![Export of species list](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/SpeciesListoCSV.PNG?raw=true)

### Convert Summary to CSV
Create csv files from biolovision **Summary** (`m_id=32`) pages. This output pages is selected on the last tab of the **search engine** page (`?m_id=8`). The exported table contains the following column:The exported table contains the following column:

| `number` | `common_name` | `observers`* | `places`* | `link_observations`* | `link_stat`* | `link_info`* | `photo`* |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| ~40	| Greylag Geese	| 2 Observers	| 2 places	| https://www.ornitho.ch/index.php?m_id=94&showback=stor&p_c=5&p_cc=-1&sp_tg=1&sp_DateSynth=01.06.2020&sp_DChoice=range&sp_DFrom=01.06.2020&sp_DTo=01.06.2020&sp_SChoice=species&sp_S=60&sp_PChoice=canton&sp_cC=000100110000000000000011001001100000000000000000000&sp_FChoice=list&sp_FDisplay=DATE_PLACE_SPECIES&sp_DFormat=DESC	| https://www.ornitho.ch/index.php?m_id=81&frmSpecies=60&showback=stor&cDate=2020-06-01	| https://www.ornitho.ch/index.php?m_id=15&showback=stor&backlink=skip&y=2020&frmSpecies=60&sp_tg=1	

\* only in full table.

![Selection of species list](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/search-engine-formating.PNG?raw=true)


![Export of summary](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/SummarytoCSV.PNG?raw=true)


### Query coordinates
The the button `Draw Rectangle on Map` to search only sightings within the rectangle draw. The coordinates of the rectangle are automatically injected into your webpage under `Only within the following rectangle (W / S and E / N) : `. Note that `ornitho.ch` uses Swiss coordinates, but other website are using degree. 
![QueryCoordinate](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/QueryCoordinates.PNG?raw=true)


### Query Season around Now
`[+/-xd]` search for sightings reported every year between -x days from today to +x days from now. The code inject automatically the correct day and month under `Beginning of the season :`
![QueryCoordinate](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/QueryDate.PNG?raw=true)


