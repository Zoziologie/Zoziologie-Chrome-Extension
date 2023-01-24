# Zoziologie Chrome Extension

A set of tools to make your lifer easier on eBird and Biolovision (ornitho, faune-...)

- [Zoziologie Chrome Extension](#zoziologie-chrome-extension)
  - [How to install?](#how-to-install)
  - [eBird](#ebird)
    - [1. Export Target](#1-export-target)
    - [2. Export Trip report](#2-export-trip-report)
    - [3. Export Barchart](#3-export-barchart)
    - [4. Checklist: anchor link and Export GPS](#4-checklist-anchor-link-and-export-gps)
    - [5. Download Pictures](#5-download-pictures)
  - [Biolovision](#biolovision)
    - [1. Export Species List](#1-export-species-list)
    - [2. Export Summary](#2-export-summary)

## How to install?

Install the extension directly from the [chrome web store](<[Zoziologie](https://chrome.google.com/webstore/detail/zoziologie/ikoemgmlmapdnjkphgficpdlkfiepodh)>)!

[![image](https://user-images.githubusercontent.com/7571260/213334689-48582f00-4a24-46b6-a56f-3b1b230cb456.png)](https://chrome.google.com/webstore/detail/zoziologie/ikoemgmlmapdnjkphgficpdlkfiepodh)

## eBird

### 1. Export Target

Export your [Target](https://ebird.org/targets) list into a [comma-separated value (csv)](https://en.wikipedia.org/wiki/Comma-separated_values) using the new button "Download (csv)" next to "Print". The exported table contains the following columns:

| `rank` | `common_name` | `scientific_name`     | `frequency` | `link_map`                                                                                                 |
| ------ | ------------- | --------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| 1      | Collared Dove | Streptopelia decaocto | 11.12%      | <https://ebird.org/map/brant?gp=true&yr=all&env.minX=-5.144&env.minY=41.334&env.maxX=9.56&env.maxY=51.093> |

![image](assets/target.png)

### 2. Export Trip report

Export your species list of a [trip report](https://ebird.org/targets) into a csv using the new button "Download (csv)" next to share and edit.

| `species_code` | `common_name`  | `scientific_name` | `count` | `checklists` | `media` |
| -------------- | -------------- | ----------------- | ------- | ------------ | ------- |
| ostric2        | Common Ostrich | Struthio camelus  | 16      | 1            | 0       |

![image](assets/tripreport.png)

### 3. Export Barchart

Export a [barchart](https://ebird.org/barchart) data into a csv using the new button "Download (csv)" on top of the table.

First row is the normalization factor (i.e., number of checklists). There are 48 periods: 4 per months.

| `species_code` | `common_name`  | `scientific_name` | `Jan1` | `Jan2` | `...` | `Dec4` |
| -------------- | -------------- | ----------------- | ------ | ------ | ----- | ------ |
|                |                |                   | 16     | 4      | 24    | 4      |
| ostric2        | Common Ostrich | Struthio camelus  | 1      | 1      | 15    | 0      |

![image](assets/barchart.png)

### 4. Checklist: anchor link and Export GPS

To share a specific sighting within your checklist, click on the link icon at the end of the line to copy the url of this entry on your clipboard.

![image](assets/checklist.png)

### 5. Download Pictures

Download any photos on the Macaulay library at 2400px wide resolution (the original is only available for the author) using the new button "Download 2400".

![image](assets/macaulay.png)

## Biolovision

### 1. Export Species List

Create csv files from Biolovision **Specie List** (`m_id=94`) pages using the csv button on the export row. This output page is selected on the last tab of the **search engine** page (`?m_id=8`). The exported table contains the following columns:

| `number` | `common_name` | `scientific_name` | `latest_date` | `breeding` | `link_observation`                                                                                                                                                                                                                                                                                          | `link_stat`                                                                    | `link_info`                                                                                  |
| -------- | ------------- | ----------------- | ------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 31       | Greylag Goose | Anser anser       | 06.01.2020    | certain    | <https://www.ornitho.ch/index.php?m_id=94&showback=stor&p_c=5&p_cc=-1&sp_tg=1&sp_DateSynth=02.06.2020&sp_DChoice=offset&sp_DOffset=5&sp_SChoice=species&sp_S=60&sp_PChoice=canton&sp_cC=000100110000000000000011001001100000000000000000000&sp_FChoice=list&sp_FDisplay=DATE_PLACE_SPECIES&sp_DFormat=DESC> | <https://www.ornitho.ch/index.php?m_id=81&frmSpecies=60&sp_tg=1&showback=stor> | <https://www.ornitho.ch/index.php?m_id=15&showback=stor&backlink=skip&frmSpecies=60&sp_tg=1> |

![image](assets/species.png)

### 2. Export Summary

Create CSV files from Biolovision **Summary** (`m_id=32`) pages using the csv button on the export row. This output page is selected on the last tab of the **search engine** page (`?m_id=8`). The exported table contains the following column:

| `number` | `common_name` | `observers` | `places` | `link_observations`                                                                                                                                                                                                                                                                                                                 | `link_stat`                                                                             | `link_info`                                                                                         | `photo` |
| -------- | ------------- | ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| ~40      | Greylag Geese | 2 Observers | 2 places | <https://www.ornitho.ch/index.php?m_id=94&showback=stor&p_c=5&p_cc=-1&sp_tg=1&sp_DateSynth=01.06.2020&sp_DChoice=range&sp_DFrom=01.06.2020&sp_DTo=01.06.2020&sp_SChoice=species&sp_S=60&sp_PChoice=canton&sp_cC=000100110000000000000011001001100000000000000000000&sp_FChoice=list&sp_FDisplay=DATE_PLACE_SPECIES&sp_DFormat=DESC> | <https://www.ornitho.ch/index.php?m_id=81&frmSpecies=60&showback=stor&cDate=2020-06-01> | <https://www.ornitho.ch/index.php?m_id=15&showback=stor&backlink=skip&y=2020&frmSpecies=60&sp_tg=1> |

![image](assets/summary.png)
