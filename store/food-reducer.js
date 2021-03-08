import Food from "../Model/Food";
import { Add_Food } from "./food-actions";
import { Delete_Food } from "./food-actions";

const initialState={
    foods:[]
};

export default (state = initialState, action) => {
    switch (action.type){
        case Add_Food:
            const newFood=new Food(new Date().toString(), action.foodData.image, action.foodData.title, action.foodData.info, action.foodData.cost)
            return {
                foods:state.foods.concat(newFood)
            };
            case Delete_Food:  
            return{
            foods:[
              ...state.foods.filter(id => id !== action.payload)
            ]
              };

            default:
                return state
    }
}


//const removeId = action.payload;
//return state.filter(key => key.id !== removeId); //key eller foodData?

//foods:[ ...state.foods.filter(key => key !== action.payload)]