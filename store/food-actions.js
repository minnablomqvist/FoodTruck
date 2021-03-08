export const Add_Food = 'Add_Food' //behöver unikt id, en sträng som går att läsa av som ett namn. Definerar action 

export const addFood=(image, title, info, cost) => { //funktion för att addera ny maträtt
    return { type: Add_Food, 
            foodData : {image:image, title:title, info:info, cost:cost}} //tar emot typen, och vilken data den tar emot
} 

export const Delete_Food = 'Delete_Food'
export const deleteFood = (id) => {
  return({
    type: Delete_Food,
    payload: id 
    }) 
  };