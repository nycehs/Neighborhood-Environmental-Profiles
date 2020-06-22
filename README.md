# Site Overview

* **Client Name:** New York City Department of Health and Mental Hygiene
* **CMS Platform:** Static using [HUGO](https://gohugo.io/)

# Working With The Site
This site is currently build with the HUGO static site generator. Hugo docs - [https://gohugo.io/documentation/](https://gohugo.io/documentation/)

## Local Setup Details

* You will need to [install HUGO](https://gohugo.io/getting-started/installing/) if not done already.
* Once HUGO is installed run `hugo serve` from local project root to start a local server

## What is this site doing that is unexpected?

### General

* Project is using NYC's Core Framework which is based on Bootstrap 4. SASS is being processed by HUGO's [Pipes](https://gohugo.io/hugo-pipes/) capabilities.

### Report Pages

* Report data for the site is stored in the `/data` folder. 
* There is a markdown file for each report in site content that references the report metadata from its frontmatter.
* There are two main templates used for reports `themes/dohmh/layouts/neighborhood_reports/single` is the main report template along with the partial that is loaded for each indicator `themes/dohmh/partials/report_indicator`.

### Visualizations
Visualizations are powered by Vega-Lite with code and basic implementation approach provided by DOHMH team.

* Visualization specifications and functions to generate them are included in `assets/js/site.js`.
* All html, function calls, and dynamic variables are found in the `themes/dohmh/partials/report_indicator` partial.
* Functions are initiated on modal open following methods detailed in Bootstrap 4.5 docs.



## How is this site being deployed?

For initial development purposes this site is being deployed to MOD-Lab's Netlify account. Ultimately it will be hosted by the City in GitHub Pages.