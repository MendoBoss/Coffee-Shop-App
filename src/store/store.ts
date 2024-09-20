import { create } from "zustand"; // Pour créer le store
import { produce } from "immer"; //  Manipuler les info du store
import { persist, createJSONStorage } from "zustand/middleware"; // 
import AsyncStorage from "@react-native-async-storage/async-storage"; // utilisation de la BDD
import CoffeeData from "../data/CoffeeData";  //  infos sur les caffés
 import BeansData from "../data/BeansData";  // infos sur les grains de caffé

export const useStore = create(
    persist(
        (set,get)=> ({
            CoffeeList:CoffeeData,
            BeanList:BeansData,
            FavoritesList:[],
            CartList:[],
            CartPrice:0,
            OrderHystoriyList:[],

        }),{
            name:'coffe-app',
            storage: createJSONStorage(()=>AsyncStorage),
        }
    ),
);