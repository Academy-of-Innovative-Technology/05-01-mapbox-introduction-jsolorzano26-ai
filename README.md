[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23300758&assignment_repo_type=AssignmentRepo)
# 🗺️ Mapbox API – Account Setup Guide

![Alt text](src/img/preview.png "Mapbox Preview")

## 1. Go to Mapbox Signup

Visit the official signup page:  
👉 [Sign Up](https://account.mapbox.com/auth/signup/) : https://account.mapbox.com/auth/signup/

## 2. Create Your Account

Fill in the required details:

- **Select** Individual - for my own projects
- **Email address** (use @aoiths.org)
- **Username**
- **Password**
- **Full Name**

- **Skip** Registering Billing Information (Using the free tier)

## 3. Verify Your Email

- Check your inbox
- Click the verification link sent by Mapbox

## 4. Access Your Dashboard

After logging in, go to:  
👉 [Mapbox Dashboard](https://account.mapbox.com/)

This is your main dashboard where you manage:

- API tokens
- Usage stats
- Projects

## 5. Create Token

- Select Token under Admin (Left Menu)
- Create a token
- Copy your **Default Public Token**

Example of a token:

```bash
pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2FiYzEyMzQ1In0.xxxxx
```

## 6. Access Token and JavaScript

- Place the personal access token text from the MAPBox Dashboard into the env.js as the value to MAPBOX_ACCESS_TOKEN
  - *** IMPORTANT ***
  - The TOKEN should never be publicly available. 
  - The env.js file is not uploaded to Github
  - If testing at home create the file and paste the details in

- In the style.css

  - create a rule for map
    - width is 400 pixels
    - height is 400 pixels
    - border silver 2 pixel dashed

- In the script.js
  - call the MAPBOX_ACCESS_TOKEN from the env
  - have it assigned to mapboxgl.accessToke

- It should immediately show the map on the webpage.