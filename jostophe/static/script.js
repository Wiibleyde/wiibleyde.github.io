const regexs = [
    { oiRegex: /oi/gi, oiReplace: "oa" },
    { estRegex: /est/gi, estReplace: "ai" },
    { etRegex: /et/gi, etReplace: "é" },
    { esRegex: /\bes\b/gi, esReplace: "ai" },
    { comRegex: /com/gi, comReplace: "kom" },
    { çRegex: /ç/gi, çReplace: "s" },
    { ienRegex: /ien/gi, ienReplace: "i1" },
    { aiRegex: /ai/gi, aiReplace: "é" },
    { ffRegex: /ff/gi, ffReplace: "f" },
    { mmRegex: /mm/gi, mmReplace: "m" },
    { quRegex: /qu/gi, quReplace: "k" },
    { éRegex: /é/gi, éReplace: "ai" },
    { ccRegex: /cc/gi, ccReplace: "k" },
    { ceRegex: /ce/gi, ceReplace: "se" },
    { perRegex: /per/gi, perReplace: "père" },
    { ezRegex: /ez/gi, ezReplace: "é" },
    { finalTRegex: /t\b(?!\s+(?:Fleet|Constant)\b)/gi, finalTReplace: "" },
    { finalErRegex: /er\b(?!\s+(?:rien)\b)/gi, finalErReplace: "é" },
    { finalSionRegex: /sion\b(?!\s+(?:NS)\b)/gi, finalSionReplace: "tion" },
    { finalTionRegex: /tion\b(?!\s+(?:rien)\b)/gi, finalTionReplace: "sion" },
]
  
function translateJostophe(sourceId, resultId) {
    let result = document.getElementById(resultId)
    result.innerHTML = "Processing..."
    let textarea = document.getElementById(sourceId)
    let text = textarea.value
    let translatedText = text
    for (let i = 0; i < regexs.length; i++) {
        let regex = regexs[i]
        translatedText = translatedText.replace(regex[Object.keys(regex)[0]], regex[Object.keys(regex)[1]])
    }
    result.innerHTML = translatedText
}

addEventListener('DOMContentLoaded', function() {
    let textarea = document.getElementById('source-text')
    textarea.addEventListener('keyup', function() {
        translateJostophe('source-text','result-text')
    })
})

// function copyText(textareaId) {
//     let textarea = document.getElementById(textareaId)
//     textarea.select()
//     document.execCommand('copy')
// }