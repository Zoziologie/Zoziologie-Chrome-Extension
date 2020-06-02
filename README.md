# Chrome-Extension
A toolkit for web-birding on eBird and biolovision (ornitho, faune-...)

## Biolovision -- Convert to CSV
Create [comma-separeted value](https://en.wikipedia.org/wiki/Comma-separated_values) files from biolovision **Specie List** and **Summary** pages. These two output pages are selected on the last tab of the **search engine** page (`?m_id=8`)

### Convert Species List to CSV
The exported table contains the following column:
| `number` | `common_name` | `scientifique_name` | `latest_date`* | `nidification`* | `link_observations`* | `link_stat`* | `link_info`* |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| 31 |	Greylag Goose |	Anser anser |	06.01.2020 |	certain |	https://www.ornitho.ch/index.php?m_id=94&showback=stor&p_c=5&p_cc=-1&sp_tg=1&sp_DateSynth=02.06.2020&sp_DChoice=offset&sp_DOffset=5&sp_SChoice=species&sp_S=60&sp_PChoice=canton&sp_cC=000100110000000000000011001001100000000000000000000&sp_FChoice=list&sp_FDisplay=DATE_PLACE_SPECIES&sp_DFormat=DESC	 | https://www.ornitho.ch/index.php?m_id=81&frmSpecies=60&sp_tg=1&showback=stor |	https://www.ornitho.ch/index.php?m_id=15&showback=stor&backlink=skip&frmSpecies=60&sp_tg=1
* only in full table.

![Selection of species list](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/search-engine-formating.PNG?raw=true)

![Export of species list](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/SpeciesListoCSV.PNG?raw=true)

### Concert Summary to CSV
The exported table contains the following column:
| `number` | `common_name` | `observers`* | `places`* | `link_observations`* | `link_stat`* | `link_info`* | `photo`* |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| ~40	| Greylag Geese	| 2 Observers	| 2 places	| https://www.ornitho.ch/index.php?m_id=94&showback=stor&p_c=5&p_cc=-1&sp_tg=1&sp_DateSynth=01.06.2020&sp_DChoice=range&sp_DFrom=01.06.2020&sp_DTo=01.06.2020&sp_SChoice=species&sp_S=60&sp_PChoice=canton&sp_cC=000100110000000000000011001001100000000000000000000&sp_FChoice=list&sp_FDisplay=DATE_PLACE_SPECIES&sp_DFormat=DESC	| https://www.ornitho.ch/index.php?m_id=81&frmSpecies=60&showback=stor&cDate=2020-06-01	| https://www.ornitho.ch/index.php?m_id=15&showback=stor&backlink=skip&y=2020&frmSpecies=60&sp_tg=1	
* only in full table.

![Selection of summary](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/search-engine-formating-2.PNG?raw=true)

![Export of summary](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/SummarytoCSV.PNG?raw=true)
