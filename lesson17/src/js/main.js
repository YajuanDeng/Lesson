import "@/css/style.scss"

import {isNumber,isString} from "@/js/utils"

import { userInfoDom } from "@/js/userDom"

import "@/js/sort"

import { clientInfoDom } from "@/js/display"



const app = document.getElementById('app')
app.appendChild(userInfoDom)
app.appendChild(clientInfoDom)
