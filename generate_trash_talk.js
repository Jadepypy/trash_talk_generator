function generateTrashTalk(option){
  const task = {
  engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  }
  const phrase = ['很簡單','很容易','很快','很正常']
  const objects = {'engineer': '工程師', 'designer': '設計師', 'entrepreneur': '創業家'}

  if (option.flexRadioDefault === undefined){
    return '選擇一個對象！'
  }

  const object = option.flexRadioDefault
  const objTask = task[object]

  let trashTalk = '身為一個' + objects[object]
  const gesture = objTask[Math.floor(Math.random()*objTask.length)]
  const specifiedPhrase = phrase[Math.floor(Math.random()*phrase.length)]

  trashTalk += gesture + specifiedPhrase + '吧！'
  console.log(trashTalk)
  return trashTalk
}

// export generateTrashTalk function for other files to use
module.exports = generateTrashTalk