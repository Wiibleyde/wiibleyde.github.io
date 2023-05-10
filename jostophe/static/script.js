const oiRegex = /oi/gi
const estRegex = /est/gi
const etRegex = /et/gi
const esRegex = /\bes\b/gi
const comRegex = /com/gi
const çRegex = /ç/gi
const ienRegex = /ien/gi
const aiRegex = /ai/gi
const ffRegex = /ff/gi
const éRegex = /é/gi
const ccRegex = /cc/gi
const ceRegex = /ce/gi
const perRegex = /per/gi
const finalTRegex = /t\b(?!\s+(?:Constant|Holt|Fleet)\b)/gi
const finalSRegex = /s\b(?!\s+(?:mars|rien)\b)/gi
const finalErRegex = /er\b(?!\s+(?:rien)\b)/gi
const finalSionRegex = /sion\b(?!\s+(?:NS)\b)/gi
const finalTionRegex = /tion\b(?!\s+(?:rien)\b)/gi

function translateJostophe(sourceId, resultId) {
    let result = document.getElementById(resultId)
    result.innerHTML = "Processing..."
    let textarea = document.getElementById(sourceId)
    let text = textarea.value
    let translatedText = text.replace(oiRegex, "oa")
    translatedText = translatedText.replace(aiRegex,"é")
    translatedText = translatedText.replace(éRegex,"ai")
    translatedText = translatedText.replace(estRegex, "ai")
    translatedText = translatedText.replace(etRegex, "é")
    translatedText = translatedText.replace(esRegex,"ai")
    translatedText = translatedText.replace(comRegex,"kom")
    translatedText = translatedText.replace(ccRegex,"k")
    translatedText = translatedText.replace(ceRegex,"se")
    translatedText = translatedText.replace(perRegex,"père")
    translatedText = translatedText.replace(çRegex,"s")
    translatedText = translatedText.replace(ienRegex,"i1")
    translatedText = translatedText.replace(ffRegex, "f")
    translatedText = translatedText.replace(finalTRegex,"")
    translatedText = translatedText.replace(finalSRegex,"")
    translatedText = translatedText.replace(finalErRegex,"é")
    translatedText = translatedText.replace(finalSionRegex,"tion")
    translatedText = translatedText.replace(finalTionRegex,"sion")
    result.innerHTML = translatedText;
}

function copyText(textareaId) {
    let textarea = document.getElementById(textareaId)
    textarea.select()
    document.execCommand('copy')
}

addEventListener('DOMContentLoaded', function() {
    let textarea = document.getElementById('source-text')
    textarea.addEventListener('keyup', function() {
        translateJostophe('source-text','result-text')
    })
});