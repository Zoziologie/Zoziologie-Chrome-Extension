# Zoziologie Chrome Extension

A set of tools to make your lifer easier on eBird and Biolovision (ornitho, faune-...)

- [Zoziologie Chrome Extension](#zoziologie-chrome-extension)
  - [How to install?](#how-to-install)
  - [eBird](#ebird)
    - [1. Convert Target to CSV](#1-convert-target-to-csv)
    - [5. Export Tripreport](#5-export-tripreport)
    - [5. Export Barchart](#5-export-barchart)
    - [3. Anchor Link](#3-anchor-link)
    - [4. Download Pictures](#4-download-pictures)
    - [1. Link to target List from personal locations](#1-link-to-target-list-from-personal-locations)
    - [1. Link to target List from personal locations](#1-link-to-target-list-from-personal-locations-1)
    - [1. Link to target List from personal locations](#1-link-to-target-list-from-personal-locations-2)
  - [Biolovision](#biolovision)
    - [1. Convert Species List to CSV](#1-convert-species-list-to-csv)
    - [2. Convert Summary to CSV](#2-convert-summary-to-csv)

## How to install?

You can now directly install the extension from the [chrome web store](<[Zoziologie](https://chrome.google.com/webstore/detail/zoziologie/ikoemgmlmapdnjkphgficpdlkfiepodh)>)!

[![image](https://user-images.githubusercontent.com/7571260/213334689-48582f00-4a24-46b6-a56f-3b1b230cb456.png)](https://chrome.google.com/webstore/detail/zoziologie/ikoemgmlmapdnjkphgficpdlkfiepodh)

## eBird

### 1. Convert Target to CSV

Export your [Target](https://ebird.org/targets) list into a [comma-separated value (csv)](https://en.wikipedia.org/wiki/Comma-separated_values) using the new button "Download (csv)" next to "Print". The exported table contains the following columns:

| `rank` | `common_name` | `scientific_name`     | `frequency` | `link_map`                                                                                                 |
| ------ | ------------- | --------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| 1      | Collared Dove | Streptopelia decaocto | 11.12%      | <https://ebird.org/map/brant?gp=true&yr=all&env.minX=-5.144&env.minY=41.334&env.maxX=9.56&env.maxY=51.093> |

![image](https://user-images.githubusercontent.com/7571260/213308310-d0cbc49d-79cb-4370-91c4-55044cfd9b2a.png)

### 5. Export Tripreport

| `species_code` | `common_name`  | `scientific_name` | `count` | `checklists` | `media` |
| -------------- | -------------- | ----------------- | ------- | ------------ | ------- |
| ostric2        | Common Ostrich | Struthio camelus  | 16      | 1            | 0       |

![image](https://user-images.githubusercontent.com/7571260/213334229-14c52291-4a8e-41f9-b1a4-ab05f33336ee.png)

### 5. Export Barchart

Export barchart into a csv. First row is the normalization (i.e., number of checklists for that periods). There are always 48 periods, 4 per months.

| `species_code` | `common_name`  | `scientific_name` | `Jan1` | `Jan2` | `...` | `Dec4` |
| -------------- | -------------- | ----------------- | ------ | ------ | ----- | ------ |
|                |                |                   | 16     | 4      | 24    | 4      |
| ostric2        | Common Ostrich | Struthio camelus  | 1      | 1      | 15    | 0      |

### 3. Anchor Link

To share a specific sighting within your checklist, click on the link icon next to the species name to copy the url of this entry on your clipboard.
For instance, clicking on the link icon of Madagascar Pratincole will copy the url of the checklist with "#madpra1" at the end, linking to this exact position on the page.

![image](https://user-images.githubusercontent.com/7571260/213308696-2bbe3e9f-1ad0-4bd0-bdc3-2be15baa1f83.png)

### 4. Download Pictures

Download any photos on the Macaulaylibrary at 2400px wide resolution (the original is only available for the author). The link **Download 2400** is available on all pages.
![Anchorlink](https://github.com/Zoziologie/Chrome-Extension/blob/master/assets/Download2400.PNG?raw=true)

### 1. Link to target List from personal locations

### 1. Link to target List from personal locations

### 1. Link to target List from personal locations

## Biolovision

### 1. Convert Species List to CSV

Create csv files from Biolovision **Specie List** (`m_id=94`) pages using the csv button on the export row. This output page is selected on the last tab of the **search engine** page (`?m_id=8`). The exported table contains the following columns:

| `number` | `common_name` | `scientific_name` | `latest_date` | `breeding` | `link_observation`                                                                                                                                                                                                                                                                                          | `link_stat`                                                                    | `link_info`                                                                                  |
| -------- | ------------- | ----------------- | ------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 31       | Greylag Goose | Anser anser       | 06.01.2020    | certain    | <https://www.ornitho.ch/index.php?m_id=94&showback=stor&p_c=5&p_cc=-1&sp_tg=1&sp_DateSynth=02.06.2020&sp_DChoice=offset&sp_DOffset=5&sp_SChoice=species&sp_S=60&sp_PChoice=canton&sp_cC=000100110000000000000011001001100000000000000000000&sp_FChoice=list&sp_FDisplay=DATE_PLACE_SPECIES&sp_DFormat=DESC> | <https://www.ornitho.ch/index.php?m_id=81&frmSpecies=60&sp_tg=1&showback=stor> | <https://www.ornitho.ch/index.php?m_id=15&showback=stor&backlink=skip&frmSpecies=60&sp_tg=1> |

![image](https://user-images.githubusercontent.com/7571260/213309351-6849421c-ba1a-48a1-96e3-49fcb8856aed.png)

### 2. Convert Summary to CSV

Create CSV files from Biolovision **Summary** (`m_id=32`) pages using the csv button on the export row. This output page is selected on the last tab of the **search engine** page (`?m_id=8`). The exported table contains the following column:

| `number` | `common_name` | `observers` | `places` | `link_observations`                                                                                                                                                                                                                                                                                                                 | `link_stat`                                                                             | `link_info`                                                                                         | `photo` |
| -------- | ------------- | ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| ~40      | Greylag Geese | 2 Observers | 2 places | <https://www.ornitho.ch/index.php?m_id=94&showback=stor&p_c=5&p_cc=-1&sp_tg=1&sp_DateSynth=01.06.2020&sp_DChoice=range&sp_DFrom=01.06.2020&sp_DTo=01.06.2020&sp_SChoice=species&sp_S=60&sp_PChoice=canton&sp_cC=000100110000000000000011001001100000000000000000000&sp_FChoice=list&sp_FDisplay=DATE_PLACE_SPECIES&sp_DFormat=DESC> | <https://www.ornitho.ch/index.php?m_id=81&frmSpecies=60&showback=stor&cDate=2020-06-01> | <https://www.ornitho.ch/index.php?m_id=15&showback=stor&backlink=skip&y=2020&frmSpecies=60&sp_tg=1> |

![image](https://user-images.githubusercontent.com/7571260/213309638-8a38374d-6243-46c7-ad6a-294efc8ff04a.png)
