import { useState } from 'react'
import MealItem from './mealItem'

const LocalMeal = () => {
    
    const localmeals = {
        yoruba: [
            {
                id: 1,
                names:'Food 1',
                images:'https://buzznigeria.com/wp-content/uploads/2013/10/pounded-yam1-e1433336691247.jpg',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 2,
                names:'Food 2',
                images:'https://www.chefspencil.com/wp-content/uploads/Ewa-Agoyin.jpg',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 3,
                names:'Food 3',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqfDmU6awGFlBSZi3tjFc00VeOnKAU80iGQ&usqp=CAU',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 4,
                names:'Food 4',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRq9A95510bZFgc853TewJoQGqyn8p3AaQw&usqp=CAU',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 5,
                names:'Food 5',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMA6MBpnNTIAI58JASX3wyCbvm0qTgrquHOg&usqp=CAU',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 6,
                names:'Food 6',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJgsS11C8U9BxM12Iz6sDUFChnjJO7lqChg&usqp=CAU',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 7,
                names:'Food 7',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuYUAnns07l7FkgxFTKskYegGmalKDpKGcA&usqp=CAU',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 8,
                names:'Food 8',
                images:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcUFRUXGBcaGhwaGxsaGhsYGxoeHRoaGhsbIBsbICwkGx0pIRsbJjYmKS4wMzMzGyI5PjkxPSwyMzABCwsLEA4QHhISHjQqJCo0OzI0MjIyMDI0MjIyMjQyNDQyMjIyMjIyNDQyMjIyNDIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAMsA+QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAD4QAAIBAwMCBAMHAwIFAwUAAAECEQADIQQSMUFRBSJhcROBkQYyobHB0fBCUuEUIxUzYoLxB1NyFpKTotL/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAMBEAAgIBBAECBQIFBQAAAAAAAQIAEQMEEiExQVFhBRMicYEykaGx0fDxFCNCweH/2gAMAwEAAhEDEQA/APrVeiumoMaEwBOk1wmuV6qhTldUTXgJobX+ILaEfec8D9SegqmYKLbqSX6nULbWTk9B3rNX7xdizGSf5HtVWo1TXG3Nyfw9B6VyawZchyH2k6nu4qucRVi1E0I6gkcynUkEA9iD9cGl2sxMd6PuLOP5FBagT78VkdeeYdcQdBgD1/WjEH8+dC2z5o/7qLs4BP8AMU0ijBxixLNv8+dX2xgUTofDiw88jEgcTPEn+nnjmmGmtCCSuzadsDr67o3EHpTRhLUTHqJntSjeU7SBMA8T7TzTLw3WXbZI2tt9Rj/FONRYVgFuKrGByMSeTQRuW0GGLAYgAE4DE5PNF/pVVtwYgwh9S1Gen8WRsHB+oo9XByDNItXbXbvyPxMdYHfihRqHt/7lpg6GOMiD1x09RWoZXx98j27iWxirE1NepbpPF7b4byn14+v70xBrSmRXFgxJBE8RUClWV6jqXKChrgMVfUWWaErIDIA16uMnavTQ1UKeNcqVcq5ciRUdoqVdihklldiu14CiknK6E71KIqjVakIpduB+PYD1NQ0BbQb9IB434n8MBEMOwmf7R39z09j2rMNcJJJJOeSZP1Nc1l9ndnbkmfygD0A/KqlNcnJlORr8eJY9JejVdM5oRTVqmhDRu3iEqf8AFVu0ZrymvXOPWiuDUrcwf5xQ99c/z5VaegPTioMs0Di4QMHCHcIBODgCT0Jp54HaQ7huVrixIBDbCe/Td6elQ8F0hZ2YyNoIkYywj8s03saUWrexFVQBMAfn3Pr/AOK0pj6aUigXLbibVbsf1xz9KF01tCd5ZsEx8ysjuRI+lX6YttJIaOgJB/nzqemBLHy7VgDpznsegj607sg1GdAzmrvBEZ9pcgHaAPMYHA79frWf09v4r7rmlZUORIKhSJyVBHt/DWhdpPSQTB6D09/SvNuMg7Y+fHWasru7kVto4i29pluStu4FUASqAbsdJBxIEVYjfDdbbCVaQpAxwWyRwYHzoHW3Ra1KKq+W5bIbBOVJI83sWx6iitVrYuWrf9xnocAcRyBkfyagIHfiEVJr3gWt07ISwHlnHXrRPh3irJ5eRPB/Q9KuvMpTkEDcP0PzpMylSQRFZ8q7DuWKImus+JI3Mr6tEfUHHzijprE29SRTDQeKlIB+727e3aiw6xunH5gsg8TTTXqpsX1cblMj8RVoroqwYWIoip2oss1KuEVckqZSKirVdUHSaEr6SwZGuTXN0c1zeKCFCB6VZx714mKgTRgVAJucY1m/GdXvaB91TA9TwW/QfPvTTxjWfDQR95iFHpySfoD84rNXHmufrMtn5Y/MbjWhcEb8v/BrxxUmOaiO1Yx1KogycZnr+dWqZyKoQ/4ohe9WIwzk1MNUQBUTUupCJK4tQ3j+ox3/AHivXXhfyoKw7l1EiCwHuCRP4UBcAgSKLmv0ChEAzkmJ+tEqSZ3EZnvx0oA7y4YQbZG0jrMxMzxz6/SiLcHkCAcGev710lPiFXEtQhVIYiJJBnoaV6bxRjcuAyQCNqou4kEkTI5WBz3n2rnjunFy3IubGXKluPbPAPfpUPDdPdtfDt3HDDzNvUECBwhDEn+qZnMGoS26vENQu0k9yWpZ7szaIW3cXZI+8doIdR3BYjPY1bpEdH8xuMTjKbVHGc/v1rl7U+YpbY7wQxkHI6ZIgD1Hai3u3AsNtbmdsjH71OCblWaqpTrdMrkbj5t0qOkjjH856VRp9EPiF2RA43eYeYiSOCYMHmKIsbCd6qQWAMlSp6wMio6i55gSxWFOMeY+/pn60Q9TBsjgSjelyCIIBKiQRnqY/k0D4qRuDDE+WPao3zcuKqjbagrJ3b32zG3iFkRmSRM1T4iu9Q4ZgUY+Uj72M8jHQ0GT6lIlOtCVK1WbsfOg9M5NEk1jqJuF6bWuh8pj+TnuK0mg8WS4AG8rfgfY9PnWTtrJq4vAo0ysh4/aWee5uK7Wa8H8Y2kI58pwD/b/AIrSV0sWUOLEWRU9XK7XqdJIOk1V8M1fXoqcSXOsaiKofVIJl1G3BkgR9azPj/jYlbaONr8FZBJg5HUr7emazZdSuNb7j8WnbI1CR+1HiKhpDCEBiIMsY9R6DnvWW8T1bMmwsVJ+8ZyMEjGPQ9OQKu1KktGfiRBYqxCDEjBInPAmMc80r1qMDFvaAoksS2DPmz19BntXIZ/mPuM6uHEqUB+8U6jVFDKFiwIySxYf9oyMT/DUvD/tJeFxQxa4sCVjIgfeHqIOCc1RqNRaDBV3MYIJCldvTMjJjkcYruh0oDb4IBLfL/q/E5960UiobEJsbZcg548zYL4xbYgAN0kkRE8fwUzW+IGR69fyrF6m8LaSgUmYE4AmM+v87VDTsUf4jS5OC8wMqQQFBnAPrWYWQa/EZk+H4wAbI/7m8R5MBSMAyYgz0xUmFZm348bcM3mtl3U4gosKVA7xP/7e1OdRrwI9QCGBnBEg496u6WzOZn07Y2qpLUX4xVWmvqtxASATLAf9IBDN7UF/qFmTmeon8pq3UEFEdVQjaw3EeY5kxGYwJ4GKSjbm3ekFU5qaLReKqSUU5UmFES39UxzGfwpreLHiNu0yDzJ4z0+lZXwttri4ibnJgmckMJYcYiJ6feitPfCmBuBUmCMmfoa6uJiy2TI4APEWWbbubW7bKKC2JnDAhZMiTtM9hEUyBVkVXIBJznqpmBPSAflNLr2rUXCN4iAqjaR5iJCycCVz+tTu6a25/wBwBnQh067ScSJ9j8pHWopomW3NEwnU6pSzRkL5TAMgmOI6R260NpdWgZbYXO0bZJyIzPYgyKgzzc2FX3bSysJ2joQZ+Xlqu/pbe+Q219pmZMqOce/5nvVEkmxLAWqMK1q3C6y0LP8ATPzJPP6V7aVLdUwQ26TPaCOOMz3oe5qiLdsooZDtkLk7THEc/KaN+CWG0rAPoTHv0ohV2IJ9IAdODcwHJIBMEx156D9at1nhzXYt71Uss4k8MD0x/wCTTb4AUKo4APImTgTOfWcdaKRIXG3d9F/kUQXsQGPEzI8D+GY+KpMdtv4k+nrUm8KYHBVu/SI55rQ7wMTJ6ngChXv+YAzByscHpHv+1D8pYO0HxELoVwQR0oW69au4og7lEdQRP4d6Ra3w3aQV4P8ASYke3egfCV5HMAgwFF4NaDw7xQpCtlePb2/akwIFVI+SaSrFTYle03014GlfgmvFxdhPmX8R3pma6yOHWxFmTrlRBqU0ckxXjNzezuu4ndsGzyEwMiW6x1A4LR657U6hA7XRudmXYYhipBJAJUBU+vSnXjWla5KoxTk4ERIGQYMdQeCZ6gRSU2WsquyfhrjbAIMgCAwybhJMn0OIrzJ5JJ7M9Fi2hQJBbjMFAKcgg7g4T0jgHnv8+azPjfiJ3OtoOZAV2jEDkDHlnnntWk1viJKqqW3G4RG1QB6DzEyaWPoiTlFjAYHackTwDiMfTk0/CQG+rqC/AJAomLdIikSG8/fGIzzxNX2bils8xz0MnMfjXdejKhQTtJH3ViFPEgSOe1C6MhR3gwSYgD5468etOdQRcPDla6/e5bqbCt8hPy9B3kVbpWG4WmCqGhVcqWZGkRA/uMRPEkTQxu5JEAclvyAHUUq1d5oJ3wYEbSQeZnBx7+1THjJ4uXmzfSR6+ftGPiHiGy3s53XHZg4zt2ooEd9yTVug17OhWZB4MwJmYH4fSlXhd4MVZiJHkMwesjy9Tk59+2Za64HubFaB97/4noJ7R09aY2Mfpr8xavaHITx4HvH/AIQrXbnw15HcySeoA/H5UV4uwRmtoSQDt3Dgkfej8f4aU+F3CrH7yIY3ST5hMiSAAZ9MUzuXV2EqPKJOCGg5Bx04rLkUA0BFqC53dCW+Has2wLq3FDRsAZzDSRmOhHeODFN/CtQLJuXFt3Lt1x52Vf7m9MBcDiTC9azm7eMKSB3A/QSeBzU11rWitwMTMiQw3ESCQVPSTj51ePJRqJdO5uNDqfiqbyqGk4UcyCF8xP8AUCDj86J/1flGF3A53naJkhoME46d6x2o+0N0odgtkxJncpMHMgAyI7HgGrPCNUrKRhr7yz3GWR0woJkCOg+dagykcGZdwubBtYWWRIx0GFPHPX34oTxTWtatXb27cETyoYjcJzuGZMgfKs34d9o1Fx7dw7QpCpugbpJAMR5uJnODT7wc/GubHClFMkCTJksoIjAxPyFGpkNXGvgWlO0XGkFlDBTPlLc4bI+frTu04A688EiR9OlAtqSHIYAADHJJPmJx1xHT+oUuu6vedtvyy0kfebtJAOJ4E9xjFWG29S9hbuP2uZiMdT+lLrl9kuLs+6JLzzH3QBPqZn0ozTWiqneZZmJ4k5yAY4AGPYVTrLioqg253eUxHlEEk55FE4B5PY8+kBe6hKWzngTnOR9K5qXKjJ9BAxPSgLFr7is9xpXy5KyB1JWADH6+1d1l5bSljuOZiXcnOe5j8B6UYbiQrzUjpVvF2+KqhMxtO7g4METPX06d6lqlJ/5ZjkQRwc+Ydao8Qv3FC3bUuvDJzgkeZYyT6flVGp8XW2Cz+YA5ZR9wHhWEkzwPn0qWBJRPIgeuALYKkx5gMGeSdsyBFDzimqOpG7a0kTDETBkjnAP5Un1HlMZiBBIgmQMx0rNkTyIDiuYRpNUbbBwcg/wVttNfFxA68H8O4r57ayafeA6z4b7CfK5z6Hof0o8GTY1HoxXc09erxr1dGDMaNU0n4ayQSWMdY6fhz6UDqEA+9tChZyRHvtEn9eaj4v4jcS6baou3qYzk9Ok8fhVGm1tr76go6eVy7wqlpbO7P0xn3rzjY9rG+hO2pLAEDuKNdpNsOygkLKb2Zdg7hYEZ5meDS99R5SBMM2ZUicGAIEsPWM47018U1IZi4JYsNxPEDhZwAAB2znik41tsqdx4MEQSZk/0nBHGRTU5FiP/AEghhBbi3GMl2Mf0D7sDOcRn9qGd3CksvLTiJ7ifT8qu8QuFmkQFCANtBABnPHJ/8UvuNC/eYbsg5BjOI6STz6VoVTxEF1o9y1NWiSH3K31nGMduKWa/B3TO7Ibp2PAirFZMgiZ5EnOYj1OcZoW8ijAJPeZ561oRADcz5MrMu3wIOmnZz5QTNOPC7W0+cE8GIBHz6CivBk3JcnyqAADMQTJPywB9PWovqrdslMmCMgRkY+lDkctagQcSAc3HD+Gq6ydwG3Byu3PBJ5HyoXQOthxcfdcUDIgBBiBMQGjvj2o3T+MqyKDKNHEMQfUET9DjmoOgHBgPhzIOMiR6/XpWIFhYbqarHiM28S+IoK/DRJ7iY4wY9e4pdfYfdXkR06ftmg/FdMLK20W4SpLSIAKiNwE9flFB6O+G3OZ3blCxiQZBB9x+VQYBW4HiUzqw21Rmi8GxdQNEGQRGDIPlzxJx86ne0TI7WwTAPPccqfofzpVZ1U9GWDGeRHAPYitDp73xLaN/UpFt/YSUP0JHypdEGjOVmWjYgJtrsKlREgjJxAjgmPwmtt9krAt2t207nYls89vbEVlntoXCxjcFx1JMAR8/yrW+H6YoVX4g2qTAAiFZsLPf1p+AENZl4gDZj64iuIIBnoaV3tIVuK9sHyKTsTbLSRAzAxHfrVV3VFrpFpMBMXAcEgxsPcGDPUY7ihh4sw1RsbRbLBWFxpfcIygWBBhTies++lmDTQqlY40r3GG+CJH3LhAK9/ug/nVd5yAxvQYIIIjaBOOcg9zVjlTcljtIGCDEjE/KYoVzaVtpIZbkgAnd2B5/mavqCPtLnvwVuAMwIhVHJmOhwDz2pZq/DLr3Wu3L3w7RUq1sHIWD/VgAzBnOJHrRWtvxdRQ4HZSYORCwOuQfr6VMa1Su24CX2yV2k8HMYgjtV2Oj/ZlixyJF7bqFUQE4lcdsnGKDvaVdpLlgAx4DAc4Ofvt/1Ee1G6S87b/9soogISVzzgKDgDHPMmgtPr7jtcFxAEVclTuE53A949KnFSubnH1G5LfxFYPP3VO6RxJK9OvT9KD8VJ3Kxx5YA64zn/7o+VcfSBLi/DlVuQW4Blc7iImTgR+FWaofE8rQNokNwN3bPSP5io3IIgZBxxBUaOKuRqXWb0mjENY75ihNn4NrfiW4P3lwfXsaYzWL8P1LW3D9Oo7g1pv+KWv766GHULt+oytswn2rtH/UoOlxQAR0ZSVIM8ht6cdjQ/8AoNtwvCTPmmI8oJIAM7V9T3n0rQ+L20e6Ax/5aBiA0MdzNBHoGtj60E9sknbG3q20Ag8lT9O1cfWMRlIH5nZ0jf7YuZzxy6zI6sWUMBBhiCCRAUAnEDn9qRWE2bUxEmZ7STzyMgVo/EmlO5YwBPacbcSAR0HPfNJEC4baCZaeBGeD/bII57dOp4m+io8Kt3XMC1SZUATJ5mRjOeo4H1pdqXJ9AfTnmPkKPv3482QJACmDB2wZYGPXPFLdVdDeU7Y5Xv5jke+K3YwRMmVlbjqBo8HIGBP7EVZoLAe4NwMMe8GMznjjrHSitVphsJB6AbDyDiT65mPSitDax5LbSQJO4Y78/nj50bZPpJEAYCCA3Xf3nbelQbyLhAE4BGJUqxIjBgkDHXmgrnw9x3AgR5QMxkZJjtP14podM53XFPHJwwzyGOMgLSS6QPKAQGwcZndwAOekUOK2PcHNSDiP7estsoQC2YB+8xAAOeSeeeKFu+LfEdUHkYTtaZXg+XPE8e/vS4eGurHywvSeTHUDvRh8NubN629wjIAYnkYMTBFCVQNd/wAZAzkdQbU/FfaHVgpJhiDzwTP84r2issTtJhNwaQfN6RHJ9uKPOvPwxZ2EZBltoAjzTnE+nypj4Tq1yxKjapn7qj2nGTn6VTOVXgS1UM1kwXV6FrbhkLOCJJOSCOnsf0NHfZ3Vzca3IHxAU9A4yhj0P4TVOrMujW3JDlwE6yIMT1HHPb1pRq9QN5dwQwKiJiNsAiKUF3ij3ByYQfabLw1WBBcEECVnmepHQ9a0CDaDcIaWjcCTMKIAiYEdvXNZbTeM7F8zgrtG1hwI4nscUJrftfcddigDmSBk1gbHnckDgTdj0qYwAP3M1qa4Wrm23BFzpEw0c45n9Kt8K+M1+5ZvqPhpD2yAJgSgJPc5PcQRwa+f+G+ITetM7mA4JkkRtO79K3Ou13xbbXLJO4OqbhzE9MHdloxW/AjY02tzE6hF3gKex3NNbQNvLE7OIxGIkzEjMjnpQ2hNvfsWYUBgTJElmjLc8H8K98b7kmFK59TAge/OOteN9G3hblvpgMGOR/Uo4HbOafMnNQnUI4BghicScbccwOaznihu243lyoQAsFYqdpMzBwTM8z70TodGV4vbwOCSSRnzCJOJFF6jU71ZN6/dIkiRMR92YI9KsgHuUp2mI9dqLzWzbtswcoRbVTgSpALMek4x3HPNMtNNm1JyoABUKS4x2BJZpis94b8TTPdZXD2yARccSwEHBiN3UkzgcUNovtDcdlLH+lTcQgliWc+ZY4UCMc5FTgciGQTxGr6h5+JcOza27aI4C4ntjaP+2h/FdSLoWIKKSVMzJ5wRjAP1pb8R7d5r7ONlwFirFlVNsAElsjBOIzIqnwzVi4CAFAD3GgAgeYg4B+cxNTwZnzEARnp2g0zsNPz/ACpKtzzRTXSCc/z0/esjdxCGNEPepQKrUftUoFVcZUs8eZLeosPjfcm2QSAHUeaDI7mBESW64pLq/FCNSiLbYBiedpDOvBM8QBx1iuf+orXkv2rigbEXcpkZbcd49CV217UWmb4dxdkFFeXaCgMR5YyxnJqtYKy7q/zOnoCrKVYynxJAWIZxI8ygAOYjcRJHUfnSKFufEA8rLnbwcwAIOJgZinFy2fMVuJAIVW2ggnlgpJI5IHaQazlyxsa4pllncSsFsf0jp2wOvtQYB6zQxocQC6igmOIyI+jehyM9yaGu2/KGIyOAOo6++KNuOu2VRuy+483mk/zpQGt1UsYG2VUHHb+RNdFSSZiybQOO4Jd1W9p4XAOeYmMxjj8KJfxG4U2Aqq8wIzmJ7z1pdag4pkFXYGwWBg+WPKfutPfMfSmMFFcRHzWcmzL/AA9DtJaQgMyQdrHETGes1zX6rddZ7aMEWJjcF8ogZckgEg4xgCIqGo1RCm3MwRtMYwTkdx6Vz/VstoicwvPU5yJ6gbT9KADzUNvAuPNPqQyqWthSyn7s4+T8zHEnmOasu+OsF2qIkQCIGMSMeo5pAfFTcdXZoMEN9OnvXTryLiXRnYQUDZBgzBpJwDyOY8ZTYIPAjW9rysrcAfoTg4Mcd+fypV4pctjaEQqwEsSeme4+c4qrxDXtduNcICljwOP8n5UHb85J7D8vWm48W3n+EXlzbuPMMGvIh5bcOJzHaJyP80Raa3dVviGDO7cTmTznrmk625PY+taX7G+E2710tfEovCmQrN6+3apm2Y1Lnx6dwcLM7bauKtGLreS2r3F/6VJHzIwKcWPszqn+7ZKHu5Cj5d6+qWkCgKEAUDhcY9qv+GhGBB9K4WX4w3O1QPvz/SbVtRRNz5bovspe3t8csFAwUIY5weATx6Vt/BvhaZAhdcn70bJwAAZJ80CjtUrcLHPzobWaYPbdbiKw2nBEZHHrzRYvizGtwH4gPgDCwZUHuO5UFWt5bfukru4ULBzzmcAjFCXvDAWbYBCiAI9II+mP80bobS2baoBkDiZJPck8+9EssQ6nkT3z1FZs+sdsm5eAOo1E2KQPMy/gxCW9qbzcBO4MzKikseFHlkEcxnrzXNVbv3Gi4y/DKtITEcbSp5B7nigftFdIfkqQ0kKWTcT1BBxIHtNQsXrcEPc3bBJLsSc5A/ugYPrXfwvvQN5Mx5E2tUt0Wr+FYZbtxmYP5hu3SOnmPQwevT5V3wTUy5uBe8CPKoHWYz8/XigtIfisIEBRCrAznkwOc9KnfLqP9vaG/qBO32MdfwoTlUNUadOxx7vPpLhqjcR0uWpLKVG7iTIY57SCI70TorW1AsQAIxUfD9CVRXPnlQN4ggDtj1570ZHQc9BU+YpujOVnV7BIqUJbJczx19v8070i4oHToPfv6mirt8Ivr/M0ljKUVDfiCYFWbTQeibE9aJ+P/wDH6mhXqN2w3/1A0wewARMNPrhW4rN+LeKK1lClo3Gu4UHJWRgGOvlOByc1sPtmD8NCBIlgfpP6Gsd4e5+GxOQn3WHORAUD0UsKvW8ZCSLr+k16I0ag3w3taa2hAZ0VmbzRBJ3kY5ALR2peLb7FZVMmBLSCvBnbkfv3ptqGdbe65tlpUISNxE+UmBgxmD69qz10k7nUsCEcgFt20k5OYHWPmPSgwkkm+7m11tbHiKr974eDyeRwehMZ44/gpfrpYtcxB7QIHAwOmKJ1FtyjXDEbgpYx69skmKp0rFmkgBc/Tt681062/VMKfWwQ/j/2V6NJAldwggDpPA3Qcdee1OvA0VwWZpkqx5IGcBlAOAR17j5x0fhwLHa+O3ET6irx4U9s7rRKvgFGPlcSDCt0OAY+hoWyKwigPlZCp7Er1mnts0jy5yBnABExGOB9aAOlW4zgeUgDBPJBIkfT60UviKglX32yMYnep6mSe+fpzQB2llVGIHBggMT7/oKiXDfnmBXNNtYpB3do+fPaM15GjymjtPYBvt8Qm5BJO8nc3vIMtVzaZQu8MAS0DiFByDt5IjrTGYdRSqQbED0mlDHLDYeWMCPr7dJ5okaRbb4KxBzPUAkjn5e+K8mlIMspM9Gzk8YUdTxPfpzVHieluKAH+GsF12DbvWIJ3gCR0ic/rAdx4MI0oupF7qcsCx2wBO3zd5HPz59KdeA65EBt7gSzAmeCdoBgn260lTRF18isBj7xB9OwxTLR+CIxHxHPbHA9zSc5xlSrH9pp0+LMW3Kv78R2PtK9u5G77pwDmPQE8fKix9unuXEt27SkswX3nnt0pLrPDraxBLmPoFCgH6QKt8N0qae6L7ZUCCQJ2zEnH0rnth05F7bNce5nQyJkI5A9/YT6NorZC7iST0kknmp3geOJ/wDNJbv2ssFXKOhKLKAsFDGDAnkZ9KY6fWC5bW4Su5gDgyK4eTDkX6mWuYv3lWtsBpElTjPBn3FJdBr3t3m07tuhQVPcGY+eD9KZ6nUkPx0rMfa5kCDUDF0MokTBHUHoK16XHvOxvPXsYV7R9XUdaxEuhgJLHicgdRjvIpLd8Nc4uKjP/SwULu9CABkflQXhP2gRYmSeo/z0p9q/EkNpiGErlDMENWoLlwttriFweRzFPhGlYrgndPl9M/4raWPB1kFjMjIIBnqJntWU+y+utuPvf7gOQcfP1B71tf8AUSAMVm1z5FeoLNYG3qA3fAm3EKq/DPKxwREx6Yo3/hNsASokCO1EprwuAZ/GuXtYpiWk9B3rC+XIaomJNngjiCDS2wYiO0Vn/FbYVxBJUxM9P8Ypl4hqQfvHHUfl7Gst4hrg9xbUydwLHsFMrMdTFb9IMjGyT7xOZMe2yJp7NljbkELiSY3H2A70l/1dj/3L/wD+Jv8A+KZeGahykHnbgfXNWf6J/wC4V00IrqYSJuftFpRcst3WWHuAf0kVgfCpBdQAIySTG49vQcT7Cvp+pt7lZe4I+oivkN4Xjq7lt42BfLx1PGOfunPTmn/EMVtft/KO0TC6MH8WtxgkHczEtM+wEcdPnSx5t8EgmV2sO+OYyOsRR2u07SAXECTAPJ9D7UF8YHyKc8zncYI6/wBP+az4aAudPMpIAB7iy+HYEwIDbZgqJHX19qnqdA1pbdzyujEMrKZBB4kdK5cPm2bjJM5yBPGSckRUNSblssm8lSdxEqA05BxIHsK3jqh/YmAkjJbeP5xv4IDkmInEfjWkFpWXIBEen68Gs79n1PwxOZJOfetKi4kY/nes+T0nPysGyFh5MVeI+HJtE5aMErLDMzPOPpWXfTvbchUDZOTIBEg94iY5rba4kETxS24FPoe9JGZsZ9oxcnQMzy3WthwykO+TtAIAz0xPTrH0qbWpJ+GCXUgGYMDbIIbmd0yvrTe5bQLuEloMge2OoODP7GlTallZGUBoGQ24qTlRuAiSJJBHp2rRjyBpq28XKL2o3gKHeU8yhMTcmSxJ7DMgSSOnNW+B+Dl7jXLskq2d2SWB67uTPel9q1DqCSM5ImexI9f3rYaGwCu3eVTICgdPl+VDqMvy0pfM16XCMhLt46EE1PhrM5ZQSZ6xj6VK8gRRbQbnmWJxA7/Wm+mLW0Zuc4kjcf2pTqfEgLhciOhzMDtPrP4VgR2c12BOmWqRuaQm35YwCWI/nvROmKfCZNpiIk9c1L7N61XRkKZLEiSM54INNtVYBUzA6QPzoMmQq2xvWAcq3zPletTaxA/pMT3HQ1doPFrtvKO0DpMj6cU08e8P+868Lz7T+NMPs94dbdVQiZG5mHbOPcn8jXWbOnytzCxOUuncZSA1DsQH/wCqXcANhh16H2oHxDXG4nwxJ3H8a1Wq+x1tzuRgoPp+1R0/2a+CPiK6kiYMTHSsqanTLyvfp7zRtyONrEVMJ8F1MZBo+34TdZZLQDmCcn5Uw1KXA8lQ0GZHNXOt5o2BlB+vykYrWc5IFVKTRqt3Z9oi0l17FzdmRhh3Fbjwr7QAqI/HJrO+JaUIDubcxBnMxjr+VJrVt1yhoMuFNStnuZ8mQ6Zto5B5r0n0S547GBFBP46oYM7AAetYz4t09fyqI0zMfMaSnw/GvZiW13HAjbxT7QNdMJIH5+vvVuh0ptgEjzMJPzqjwvw8b03CROf0+U1oxa3PjicfKjyFMa7UHEyPkbJVwzT3YYfIfgKbf6v1pW2l4YdT+QqXwWrGTHT65MiRXzr7U29l14B9hyQcmD863qvtMHisx9t7ZBR1E7hB+Un9a6muXdjv0MmiasomF8S1dssojyyogz5cd+PzNL73hrW7hZyFtbi24xEQDED1xR1tQ9ze4DEHqJAgEccTn8Kq1SDy/wBR3BsY598gVlRlUbZvYMxvniLhpluNcBPBwwEKyqOJMAHNCaq0oUALG2Px5B6U21rhyRBMcENtkbuse5zS3xCwZ6AGBj+Z5p6sOPEU242TzcO8GICACcEwT1Ez8q1OluYrP/ZbQbkaTAV2GOTWnt6ZF4/OhfupyW/UfvOvbVxBxS7UeFdiD+H+KOuahV/k12yS3IHypLYi0gyAGIb/AIK54Cn5gGgtR4NcCyAD02yJ9+0fOtebdRZF6iKoKyzQM/tMJc0u20ctbuh58ykrt6QygxyZnsPl7w7xBsl7pAEA5B5wIHX5Vs30g5WKB1XhyN9+2J9poywIphGY9WydRT4jqmQG0++2SJi4jWzHRvMJAMYNZ64RMl9w6kZj5HNPNZ4KpwoIAECDgCZiOg9KB1OlG1ENu0NmNyrsdhAHnKmGP/VG6ZkmjxDGt0ahNriwpob4c4TZcgQAF3KZ9jWlOvQqGnB6d/WKxiaNlDC2+3d0bzD6gSD8qq01m8mAUP8A8pxWfNpVyHdujV12M1ump17oyMGXBkcZj2pR9nfFFQPZuggg4uqJgDjcI+76+tB6hL7LG9I6wT9Kn4PpjbuB3zOG7EHmiGJUxsrG4OXXrxsm7t3lIG1lYY4MgzUdS5CzbHHIwPnmsH4l4U9i6fhuyI3mSDiDyI4x+1VDWasH/mE+4mso+Hg0yMCPeENcn/IEGaTUWzcZgwTGZiCB7jrSfW6lLRJB3e8x6YkUG2p1LKVLgBuYWCfnVFvwgnLEn0rZjwBf1Nx6CTJ8RWqW4Hdus7E9CcxgH0AHSi9NpifSmmk8HzMU7t+HcCnPlFUs5uTKXNmZxNIT0oux4fGSK1FrQIB6/lVqaVQZiaSXYwNtxJp9EcQD7/sKOSyEMGd3ZRJ/xTNljMZ6V2xbCD1PJoNtjmNFKZC2gj+2OZ6f5rn+3VyW1PInrVvw17Ch2iHun0G4k1lPtZqNii2eCCZ7dP3rXMKyv2i8Du37k71W2AAJkn1rp6tWOMqou4zSFRkBY0BMLZRSWZyFRcnqRJ/OgdQLb7zbeDtTzHjkh/fBFbzSfZezbB+IPiziGwo9gOvvWQ+1/wBn0S5NvyrAgDp6e2KwDCUAZjOjl1mLnaDFWn8OYbXLyBtkHvtZ2Hy8tXafSbh58RPPtb/ekhe8n9e4Zx74NXHxp2KBgAFaSRjmP2FNKkjjmITPibo194+8E1Qti4h5L7h2yq/rNG3Lzn1FZe7qh8QsDIIGRjq1MNPrWHGRR+ATORqOHI8Rjvk8z+f16040gEdaT6EfEfgY61oFtkdKEmLQeZMiahtrpFcqo25U69qra4RzkVa1VMfSptlbqgt6ypyMGluo0vsR/OtOInpFU3bIM0JWCTcQNp/l/PSvKDxTS7YIyIIoZ0nkUJUwTBDbn+mrbenHOR+VWpa7H8f3olFI9R6j9qqpUl8AXbRtmN6ZQ/p+lKRaBxHHPv2pupKkMBBHaoeJWR/zU+633h2Pes6n5b7T0evvGH6lvyIuS0BRGksZljP6V20vWi0itIixLkQVcjx/OP8ANCLeHf8AxVhuiMUQoQrPcL+LV1t6X23J6UTZtsYkwP5mqLLDG6XTmeOlWTNVtb6TP4VRqXCKYyenvVXfQhXUJuX0T7zAe5of/idr/wBwfjSKzp9zEud7HnsPQUx/4Uv9lH8owgDPp2m8Q6N9aLuQwkUkejNEYgVuTITwY1kHc7dt1l/tVpNyBo4kVt+lJftAg+G2OlK1aXiMEHxPklzSwf1qkeHF+laS5aEnFTRAOBFc/GxIBmM8Goi03gm2fWnOm8LQCiRk0YlaQ1yAXyZ7TWVUYAq4moiotVdxvU6ai3yqQqNVJINVbg9KtNRq7lSl19qqYEcRPoasuVQ3NXcAyD+tUsfUVZc5qphUlTi+1egdjVbVwtQEyQlBPUj3zU7LgEq2VbBoVHMjNSe4Y/wKVmQMstTRld22bbbT93+k1S9wzg0ZdzbM5jj0oNOKXiclefEJ1APEuRAf2o/TLAzQGmOaL607xABhwcEe1S+KOBQoby0Pdc96h4MPdDLuoCgkmkuo1DXG7L0FR1rkmJqemGRWjEgAuWvMY+F6XMmmvxl7V5UAtYESRXNg7URM2ooqf//Z',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 9,
                names:'Food 9',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRc7jh89xnAb2sJgibZej4VflGwWmoYUQ-g&usqp=CAU',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 10,
                names:'Food 10',
                images:'https://st2.depositphotos.com/1354142/9086/i/600/depositphotos_90860068-stock-photo-egusi-soup-nigerian-cuisine.jpg',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 11,
                names:'Food 11',
                images:'https://afrotourism.com/wp-content/uploads/2015/10/Nigerian-Goat-meat-pepper-soup-1.jpg',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 12,
                names:'Food 12',
                images:'https://qph.fs.quoracdn.net/main-qimg-f8d25d2eda19c4e0b48d4c01d3463ff1',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 13,
                names:'Food 13',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3EyL_UFDokj5h2SURPtE5IGeFrHBH9tkcQ&usqp=CAU',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 14,
                names:'Food 14',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIH2wcFW1kG7li310TjGBFLFhE0nAUTk2vPg&usqp=CAU',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },
            {
                id: 15,
                names:'Food 15',
                images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwh6x8rFp2nybOigCvTk1cjRe6wvoS8Nicw&usqp=CAU',
                description:
                    'lLorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum?',
                preparationMode:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis nobis cum rerum? Iusto, amet! Iure, ea at fugit sequi impedit nostrum voluptatum! Reprehenderit, obcaecati libero molestiae atque a voluptates!'
            },          
        ],


    }

    const [meals, setMeals] = useState(localmeals)

    return (
        <div className='meal-list'>
            {meals.yoruba.map((meal) =>
                <MealItem key= {meal.id}
                    foodName={ meal.names}
                    foodImage= {meal.images}
                    foodDesc= {meal.description}
                    foodPrep= {meal.preparationMode}
                />
            )}
        </div>
    )
}

export default LocalMeal
