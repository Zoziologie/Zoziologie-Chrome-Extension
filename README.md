# Zoziologie Chrome Extension

A toolkit for web-birding on eBird and Biolovision (ornitho, faune-...)

## eBird

### Generate Target List for personal locations

By default, eBird only allows to build target lists at country or region level. However, the internal process is able to compute a target list for any location. With this plug-in, you can generate a target list for any of [your personal locations](https://ebird.org/MyEBird?cmd=manageLocations). Go to [ebird.org/targets](https://ebird.org/targets), click on the extension icon, and type the name of the location you want to generate a list for (case and accent sensitive) and the location will be updated upon selection.

### Convert Target List to CSV

Click on the blue button **eBirdtoCSV** to create a [comma-separated value (CSV)](https://en.wikipedia.org/wiki/Comma-separated_values) file of the target list currently displayed on the [Target page](https://ebird.org/targets). The exported table contains the following columns:

| `rank` | `common_name` | `scientific_name` | `frequency` | `link_map` |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 1  | Collared Dove   | Streptopelia decaocto  | 11.12%  | <https://ebird.org/map/brant?gp=true&amp;yr=all&amp;env.minX=-5.144&amp;env.minY=41.334&amp;env.maxX=9.56&amp;env.maxY=51.093>

![Export of Target list](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/ExportTargetList.PNG?raw=true)

### Anchor Link

To share a specific sighting within your list, click on the link icon next to the species name to copy the url of this entry on your clipboard.
![Anchorlink](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/Anchorpoint.png?raw=true)
For instance, clicking on the link icon of Madagascar Pratincole will copy the url of the checklist with "#madpra1" at the end, linking to this exact position of this entry on the page.

### Download Pictures

Download any photos on the Macaulaylibrary at 2400px wide resolution (the original is only available for the author). The link **Download 2400** is available on all pages.
![Anchorlink](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/Download2400.PNG?raw=true)

## Biolovision

### Convert Species List to CSV

Create CSV files from Biolovision **Specie List** (`m_id=94`) pages. This output page is selected on the last tab of the **search engine** page (`?m_id=8`). The exported table contains the following columns:

| `number` | `common_name` | `scientific_name` | `latest_date`* | `breeding`* | `link_observation`* | `link_stat`* | `link_info`* |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| 31 | Greylag Goose | Anser anser | 06.01.2020 | certain | <https://www.ornitho.ch/index.php?m_id=94&showback=stor&p_c=5&p_cc=-1&sp_tg=1&sp_DateSynth=02.06.2020&sp_DChoice=offset&sp_DOffset=5&sp_SChoice=species&sp_S=60&sp_PChoice=canton&sp_cC=000100110000000000000011001001100000000000000000000&sp_FChoice=list&sp_FDisplay=DATE_PLACE_SPECIES&sp_DFormat=DESC>  | <https://www.ornitho.ch/index.php?m_id=81&frmSpecies=60&sp_tg=1&showback=stor> | <https://www.ornitho.ch/index.php?m_id=15&showback=stor&backlink=skip&frmSpecies=60&sp_tg=1>

\* only in full table.

![Selection of summary](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/search-engine-formating-2.PNG?raw=true)

![Export of species list](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/SpeciesListoCSV.PNG?raw=true)

### Convert Summary to CSV

Create CSV files from Biolovision **Summary** (`m_id=32`) pages. This output page is selected on the last tab of the **search engine** page (`?m_id=8`). The exported table contains the following column:

| `number` | `common_name` | `observers`* | `places`* | `link_observations`* | `link_stat`* | `link_info`* | `photo`* |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| ~40 | Greylag Geese | 2 Observers | 2 places | <https://www.ornitho.ch/index.php?m_id=94&showback=stor&p_c=5&p_cc=-1&sp_tg=1&sp_DateSynth=01.06.2020&sp_DChoice=range&sp_DFrom=01.06.2020&sp_DTo=01.06.2020&sp_SChoice=species&sp_S=60&sp_PChoice=canton&sp_cC=000100110000000000000011001001100000000000000000000&sp_FChoice=list&sp_FDisplay=DATE_PLACE_SPECIES&sp_DFormat=DESC> | <https://www.ornitho.ch/index.php?m_id=81&frmSpecies=60&showback=stor&cDate=2020-06-01> | <https://www.ornitho.ch/index.php?m_id=15&showback=stor&backlink=skip&y=2020&frmSpecies=60&sp_tg=1>

\* only in full table.

![Selection of species list](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/search-engine-formating.PNG?raw=true)

![Export of summary](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/SummarytoCSV.PNG?raw=true)

### Query coordinates

Use the button "Draw Rectangle on Map" to search only sightings within the rectangle drawn. The coordinates of the rectangle are automatically injected into your webpage under "Only within the following rectangle (W / S and E / N) : ". Note that `ornitho.ch` uses Swiss coordinates, but other websites use degree.
![QueryCoordinate](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/QueryCoordinates.PNG?raw=true)

### Query Season around Now

`[+/-xd]` search for sightings reported every year between -x days from today to +x days from now. The code automatically injects the correct day and month under `Beginning of the season :`
![QueryCoordinate](https://github.com/Zoziologie/Chrome-Extension/blob/master/images/QueryDate.PNG?raw=true)
